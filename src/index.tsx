import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from "react";
import { Auth } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import type { HubCapsule } from "@aws-amplify/core/lib/Hub";
const context = createContext<
  | {
      Auth: typeof Auth;
      authState: string;
      authData: any;
      updateState: typeof updateState;
    }
  | undefined
>(undefined);
const { Provider } = context;
function updateState(event: string, data?: any) {
  Hub.dispatch("auth", { event, data });
}
export const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState<string>("loading");
  const [authData, setAuthData] = useState<any>();
  const handleStateChange = useCallback((authState: string, authData: any) => {
    if (authState === "signedOut") {
      authState = "signIn";
    }
    setAuthState(authState);
    setAuthData(authData);
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const creds = await Auth.currentAuthenticatedUser();
        setAuthState("signedIn");
        setAuthData(creds);
      } catch (e) {
        setAuthState((oldAuthState) =>
          oldAuthState === "loading" ? "" : oldAuthState
        );
      }
    })();
  }, []);
  const handler = (capsule: HubCapsule): void => {
    console.log("got a handler fired in here", capsule);
    const { payload } = capsule;
    switch (payload.event) {
      case "signIn":
        handleStateChange("signedIn", payload.data);
        break;
      case "cognitoHostedUI":
        handleStateChange("signedIn", payload.data);
        break;
      case "cognitoHostedUI_failure":
        handleStateChange("signIn", null);
        break;
      case "parsingUrl_failure":
        handleStateChange("signIn", null);
        break;
      case "signOut":
        handleStateChange("signIn", null);
        break;
      case "customGreetingSignOut":
        handleStateChange("signIn", null);
        break;
      default:
        handleStateChange(payload.event, payload.data);
        //TODO
        break;
    }
  };
  useEffect(() => {
    Hub.listen("auth", handler);
    return () => {
      Hub.remove("auth", handler);
    };
  }, []);
  const value = useMemo(() => ({ updateState, Auth, authState, authData }), [
    authState,
    authData,
  ]);
  return <Provider value={value}>{children}</Provider>;
};
export default AuthProvider;
export const useAuthContext = () => {
  const c = useContext(context);
  if (!c) throw "Cannot use useAuth when not under the AuthProvider";
  return c;
};
export const useAuth = () => {
  const c = useContext(context);
  if (!c) throw "Cannot use useAuth when not under the AuthProvider";
  const { Auth } = c;
  return Auth;
};
export function withAuthProvider(C: FC): FC {
  return (props) => {
    return (
      <AuthProvider>
        <C {...props} />
      </AuthProvider>
    );
  };
}
