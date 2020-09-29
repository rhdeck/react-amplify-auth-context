
<a name="readmemd"></a>

# react-amplify-auth-context

Easy-to-use context provider for AWS Amplify authentication wrapper


<a name="__climd"></a>

# Usage
```bash
npx react-amplify-auth-context [options]
```

<a name="_librarymd"></a>


# react-amplify-auth-context - v1.0.1

## Index

### Variables

* [Provider](#provider)
* [context](#const-context)

### Functions

* [AuthProvider](#const-authprovider)
* [updateState](#updatestate)
* [useAuth](#const-useauth)
* [useAuthContext](#const-useauthcontext)
* [withAuthProvider](#withauthprovider)

## Variables

###  Provider

• **Provider**: *[Provider](#provider)‹undefined | object›*

Defined in index.tsx:22

___

### `Const` context

• **context**: *Context‹undefined | object›* = createContext<
  | {
      Auth: typeof Auth;
      authState: string;
      authData: any;
      updateState: typeof updateState;
    }
  | undefined
>(undefined)

Defined in index.tsx:13

## Functions

### `Const` AuthProvider

▸ **AuthProvider**(`__namedParameters`: object): *Element‹›*

Defined in index.tsx:26

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | ReactNode |

**Returns:** *Element‹›*

___

###  updateState

▸ **updateState**(`event`: string, `data?`: any): *void*

Defined in index.tsx:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`data?` | any |

**Returns:** *void*

___

### `Const` useAuth

▸ **useAuth**(): *AuthClass‹›*

Defined in index.tsx:95

**Returns:** *AuthClass‹›*

___

### `Const` useAuthContext

▸ **useAuthContext**(): *object*

Defined in index.tsx:90

**Returns:** *object*

* **Auth**: *typeof Auth*

* **authData**: *any*

* **authState**: *string*

* **updateState**: *typeof updateState*

___

###  withAuthProvider

▸ **withAuthProvider**(`C`: FC): *FC*

Defined in index.tsx:101

**Parameters:**

Name | Type |
------ | ------ |
`C` | FC |

**Returns:** *FC*
