# IWeightedBalancerPoolManager

## Functions

### setSwapEnabled

```solidity
function setSwapEnabled(
    contract IWeightedPool pool,
    bool swapEnabled
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IWeightedPool |  |
| `swapEnabled` | bool |  |

### updateWeightsGradually

```solidity
function updateWeightsGradually(
    contract IWeightedPool pool,
    uint256 startTime,
    uint256 endTime,
    uint256[] endWeights
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IWeightedPool |  |
| `startTime` | uint256 |  |
| `endTime` | uint256 |  |
| `endWeights` | uint256[] |  |

### withdrawCollectedManagementFees

```solidity
function withdrawCollectedManagementFees(
    contract IWeightedPool pool,
    address recipient
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IWeightedPool |  |
| `recipient` | address |  |

