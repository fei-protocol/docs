# WeightedBalancerPoolManager

an abstract utility class for a contract that manages a Balancer WeightedPool (including LBP)
exposes the governable methods to Fei Governors or admins

## Functions

### constructor

```solidity
function constructor() internal
```

### setSwapEnabled

```solidity
function setSwapEnabled(
    contract IWeightedPool pool,
    bool swapEnabled
) public
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
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IWeightedPool |  |
| `startTime` | uint256 |  |
| `endTime` | uint256 |  |
| `endWeights` | uint256[] |  |

### _updateWeightsGradually

```solidity
function _updateWeightsGradually(
    contract IWeightedPool pool,
    uint256 startTime,
    uint256 endTime,
    uint256[] endWeights
) internal
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
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IWeightedPool |  |
| `recipient` | address |  |

