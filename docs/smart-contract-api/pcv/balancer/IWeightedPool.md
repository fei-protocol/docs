# IWeightedPool

## Functions

### getSwapEnabled

```solidity
function getSwapEnabled() external returns (bool)
```

### getNormalizedWeights

```solidity
function getNormalizedWeights() external returns (uint256[])
```

### getGradualWeightUpdateParams

```solidity
function getGradualWeightUpdateParams() external returns (uint256 startTime, uint256 endTime, uint256[] endWeights)
```

### setSwapEnabled

```solidity
function setSwapEnabled(
    bool swapEnabled
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `swapEnabled` | bool |  |

### updateWeightsGradually

```solidity
function updateWeightsGradually(
    uint256 startTime,
    uint256 endTime,
    uint256[] endWeights
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `startTime` | uint256 |  |
| `endTime` | uint256 |  |
| `endWeights` | uint256[] |  |

### withdrawCollectedManagementFees

```solidity
function withdrawCollectedManagementFees(
    address recipient
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `recipient` | address |  |

