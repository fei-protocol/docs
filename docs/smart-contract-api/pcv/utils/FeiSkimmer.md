# FeiSkimmer

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IPCVDeposit _source,
    uint256 _threshold
) public
```

FEI Skimmer

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_source` | contract IPCVDeposit | the target to skim from |
| `_threshold` | uint256 | the threshold of FEI to be maintained by source |

### skimEligible

```solidity
function skimEligible() external returns (bool)
```

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true if FEI balance of source exceeds threshold |

### skim

```solidity
function skim() external
```

skim FEI above the threshold from the source. Pausable. Requires skimEligible()

### setThreshold

```solidity
function setThreshold(
    uint256 newThreshold
) external
```

set the threshold for FEI skims. Only Governor or Admin

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newThreshold` | uint256 | the new value above which FEI is skimmed. |

## Events

### ThresholdUpdate

```solidity
event ThresholdUpdate(
    uint256 newThreshold
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newThreshold` | uint256 |  |

