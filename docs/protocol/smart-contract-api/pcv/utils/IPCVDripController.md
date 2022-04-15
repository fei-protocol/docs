# IPCVDripController

## Functions

### setSource

```solidity
function setSource(
    contract IPCVDeposit newSource
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newSource` | contract IPCVDeposit |  |

### setTarget

```solidity
function setTarget(
    contract IPCVDeposit newTarget
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTarget` | contract IPCVDeposit |  |

### setDripAmount

```solidity
function setDripAmount(
    uint256 newDripAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDripAmount` | uint256 |  |

### drip

```solidity
function drip() external
```

### source

```solidity
function source() external returns (contract IPCVDeposit)
```

### target

```solidity
function target() external returns (contract IPCVDeposit)
```

### dripAmount

```solidity
function dripAmount() external returns (uint256)
```

### dripEligible

```solidity
function dripEligible() external returns (bool)
```

## Events

### SourceUpdate

```solidity
event SourceUpdate(
    address oldSource,
    address newSource
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldSource` | address |  |
| `newSource` | address |  |
### TargetUpdate

```solidity
event TargetUpdate(
    address oldTarget,
    address newTarget
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTarget` | address |  |
| `newTarget` | address |  |
### DripAmountUpdate

```solidity
event DripAmountUpdate(
    uint256 oldDripAmount,
    uint256 newDripAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDripAmount` | uint256 |  |
| `newDripAmount` | uint256 |  |
### Dripped

```solidity
event Dripped(
    address source,
    address target,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `source` | address |  |
| `target` | address |  |
| `amount` | uint256 |  |

