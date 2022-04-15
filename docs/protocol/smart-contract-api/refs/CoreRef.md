# CoreRef

defines some modifiers and utilities around interacting with Core

## Functions

### constructor

```solidity
function constructor(
    address coreAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `coreAddress` | address |  |

### _initialize

```solidity
function _initialize(
    address 
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### setContractAdminRole

```solidity
function setContractAdminRole(
    bytes32 newContractAdminRole
) external
```

sets a new admin role for this contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newContractAdminRole` | bytes32 |  |

### isContractAdmin

```solidity
function isContractAdmin(
    address _admin
) public returns (bool)
```

returns whether a given address has the admin role for this contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_admin` | address |  |

### pause

```solidity
function pause() public
```

set pausable methods to paused

### unpause

```solidity
function unpause() public
```

set pausable methods to unpaused

### core

```solidity
function core() public returns (contract ICore)
```

address of the Core contract referenced

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | contract ICore | ICore implementation address |

### fei

```solidity
function fei() public returns (contract IFei)
```

address of the Fei contract referenced by Core

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | contract IFei | IFei implementation address |

### tribe

```solidity
function tribe() public returns (contract IERC20)
```

address of the Tribe contract referenced by Core

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | contract IERC20 | IERC20 implementation address |

### feiBalance

```solidity
function feiBalance() public returns (uint256)
```

fei balance of contract

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | fei amount held |

### tribeBalance

```solidity
function tribeBalance() public returns (uint256)
```

tribe balance of contract

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | tribe amount held |

### _burnFeiHeld

```solidity
function _burnFeiHeld() internal
```

### _mintFei

```solidity
function _mintFei(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _setContractAdminRole

```solidity
function _setContractAdminRole(
    bytes32 newContractAdminRole
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newContractAdminRole` | bytes32 |  |

