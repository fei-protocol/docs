# ICore

## Functions

### init

```solidity
function init() external
```

### setFei

```solidity
function setFei(
    address token
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

### setTribe

```solidity
function setTribe(
    address token
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

### allocateTribe

```solidity
function allocateTribe(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### fei

```solidity
function fei() external returns (contract IFei)
```

### tribe

```solidity
function tribe() external returns (contract IERC20)
```

## Events

### FeiUpdate

```solidity
event FeiUpdate(
    address _fei
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_fei` | address |  |
### TribeUpdate

```solidity
event TribeUpdate(
    address _tribe
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribe` | address |  |
### GenesisGroupUpdate

```solidity
event GenesisGroupUpdate(
    address _genesisGroup
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_genesisGroup` | address |  |
### TribeAllocation

```solidity
event TribeAllocation(
    address _to,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_amount` | uint256 |  |
### GenesisPeriodComplete

```solidity
event GenesisPeriodComplete(
    uint256 _timestamp
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_timestamp` | uint256 |  |

