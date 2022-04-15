# ICoreRef

## Functions

### setContractAdminRole

```solidity
function setContractAdminRole(
    bytes32 newContractAdminRole
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newContractAdminRole` | bytes32 |  |

### pause

```solidity
function pause() external
```

### unpause

```solidity
function unpause() external
```

### core

```solidity
function core() external returns (contract ICore)
```

### fei

```solidity
function fei() external returns (contract IFei)
```

### tribe

```solidity
function tribe() external returns (contract IERC20)
```

### feiBalance

```solidity
function feiBalance() external returns (uint256)
```

### tribeBalance

```solidity
function tribeBalance() external returns (uint256)
```

### CONTRACT_ADMIN_ROLE

```solidity
function CONTRACT_ADMIN_ROLE() external returns (bytes32)
```

### isContractAdmin

```solidity
function isContractAdmin(
    address admin
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `admin` | address |  |

## Events

### CoreUpdate

```solidity
event CoreUpdate(
    address oldCore,
    address newCore
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldCore` | address |  |
| `newCore` | address |  |
### ContractAdminRoleUpdate

```solidity
event ContractAdminRoleUpdate(
    bytes32 oldContractAdminRole,
    bytes32 newContractAdminRole
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldContractAdminRole` | bytes32 |  |
| `newContractAdminRole` | bytes32 |  |

