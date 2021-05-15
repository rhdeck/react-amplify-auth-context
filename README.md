
<a name="readmemd"></a>

# react-amplify-auth-context

Easy-to-use context provider for AWS Amplify authentication wrapper


<a name="__climd"></a>

# Usage
```bash
npx react-amplify-auth-context [options]
```

<a name="_librarymd"></a>


# react-amplify-auth-context - v2.0.1

## Index

### Variables

* [Provider](#provider)
* [context](#const-context)

### Functions

* [AuthProvider](#const-authprovider)
* [updateState](#updatestate)
* [useAuth](#const-useauth)
* [withAuthProvider](#withauthprovider)

## Variables

###  Provider

• **Provider**: *[Provider](#provider)‹undefined | object›*

*Defined in [index.tsx:24](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L24)*

___

### `Const` context

• **context**: *Context‹undefined | object›* = createContext<
    | {
        Auth: typeof Auth;
        authState: string;
        authData: any;
        updateState: typeof updateState;
        checkAuthStatus: () => Promise<void>;
      }
    | undefined
  >(undefined)

*Defined in [index.tsx:13](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L13)*

## Functions

### `Const` AuthProvider

▸ **AuthProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [index.tsx:28](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L28)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`children` | ReactNode | - |
`debug` | boolean | false |

**Returns:** *Element‹›*

___

###  updateState

▸ **updateState**(`event`: string, `data?`: any): *void*

*Defined in [index.tsx:25](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`data?` | any |

**Returns:** *void*

___

### `Const` useAuth

▸ **useAuth**(): *object*

*Defined in [index.tsx:96](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L96)*

**Returns:** *object*

* **Auth**: *typeof Auth*

* **authData**: *any*

* **authState**: *string*

* **checkAuthStatus**(): *function*

  * (): *Promise‹void›*

* **updateState**: *typeof updateState*

___

###  withAuthProvider

▸ **withAuthProvider**(`C`: FC): *FC*

*Defined in [index.tsx:101](https://github.com/rhdeck/react-amplify-auth-context/blob/e5a3437/src/index.tsx#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`C` | FC |

**Returns:** *FC*
