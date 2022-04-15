# Permissions

## Functions

### constructor

```solidity
function constructor() public
```

### createRole

```solidity
function createRole(
    bytes32 role,
    bytes32 adminRole
) external
```

creates a new role to be maintained

can also be used to update admin of existing role

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `role` | bytes32 | the new role id |
| `adminRole` | bytes32 | the admin role id for `role` |

### grantMinter

```solidity
function grantMinter(
    address minter
) external
```

grants minter role to address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter` | address | new minter |

### grantBurner

```solidity
function grantBurner(
    address burner
) external
```

grants burner role to address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `burner` | address | new burner |

### grantPCVController

```solidity
function grantPCVController(
    address pcvController
) external
```

grants controller role to address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvController` | address | new controller |

### grantGovernor

```solidity
function grantGovernor(
    address governor
) external
```

grants governor role to address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | address | new governor |

### grantGuardian

```solidity
function grantGuardian(
    address guardian
) external
```

grants guardian role to address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guardian` | address | new guardian |

### revokeMinter

```solidity
function revokeMinter(
    address minter
) external
```

revokes minter role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter` | address | ex minter |

### revokeBurner

```solidity
function revokeBurner(
    address burner
) external
```

revokes burner role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `burner` | address | ex burner |

### revokePCVController

```solidity
function revokePCVController(
    address pcvController
) external
```

revokes pcvController role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvController` | address | ex pcvController |

### revokeGovernor

```solidity
function revokeGovernor(
    address governor
) external
```

revokes governor role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | address | ex governor |

### revokeGuardian

```solidity
function revokeGuardian(
    address guardian
) external
```

revokes guardian role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guardian` | address | ex guardian |

### revokeOverride

```solidity
function revokeOverride(
    bytes32 role,
    address account
) external
```

revokes a role from address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `role` | bytes32 | the role to revoke |
| `account` | address | the address to revoke the role from |

### isMinter

```solidity
function isMinter(
    address _address
) external returns (bool)
```

checks if address is a minter

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_address` | address | address to check |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true _address is a minter |

### isBurner

```solidity
function isBurner(
    address _address
) external returns (bool)
```

checks if address is a burner

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_address` | address | address to check |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true _address is a burner |

### isPCVController

```solidity
function isPCVController(
    address _address
) external returns (bool)
```

checks if address is a controller

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_address` | address | address to check |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true _address is a controller |

### isGovernor

```solidity
function isGovernor(
    address _address
) public returns (bool)
```

checks if address is a governor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_address` | address | address to check |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true _address is a governor |

### isGuardian

```solidity
function isGuardian(
    address _address
) public returns (bool)
```

checks if address is a guardian

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_address` | address | address to check |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true _address is a guardian |

### _setupGovernor

```solidity
function _setupGovernor(
    address governor
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | address |  |

