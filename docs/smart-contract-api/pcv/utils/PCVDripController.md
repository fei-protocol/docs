# PCVDripController

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IPCVDeposit _source,
    contract IPCVDeposit _target,
    uint256 _frequency,
    uint256 _dripAmount,
    uint256 _incentiveAmount
) public
```

PCV Drip Controller constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_source` | contract IPCVDeposit | the PCV deposit to drip from |
| `_target` | contract IPCVDeposit | the PCV deposit to drip to |
| `_frequency` | uint256 | frequency of dripping |
| `_dripAmount` | uint256 | amount to drip on each drip |
| `_incentiveAmount` | uint256 | the FEI incentive for calling drip |

### drip

```solidity
function drip() external
```

drip PCV to target by withdrawing from source

### setSource

```solidity
function setSource(
    contract IPCVDeposit newSource
) external
```

set the new PCV Deposit source

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

set the new PCV Deposit target

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

set the new drip amount

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDripAmount` | uint256 |  |

### dripEligible

```solidity
function dripEligible() public returns (bool)
```

checks whether the target balance is less than the drip amount

### _mintFei

```solidity
function _mintFei(
    address to,
    uint256 amountIn
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountIn` | uint256 |  |

