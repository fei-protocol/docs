# RestrictedPermissions

## Functions

### constructor

```solidity
function constructor(
    contract IPermissionsRead _core
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | contract IPermissionsRead |  |

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

### isGovernor

```solidity
function isGovernor(
    address 
) external returns (bool)
```

returns false rather than reverting so calls to onlyGuardianOrGovernor don't revert

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### isPCVController

```solidity
function isPCVController(
    address 
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### isBurner

```solidity
function isBurner(
    address 
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

