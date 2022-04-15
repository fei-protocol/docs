# MockWeightedPool

## Functions

### constructor

```solidity
function constructor(
    contract MockVault vault,
    address owner
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `vault` | contract MockVault |  |
| `owner` | address |  |

### mockInitApprovals

```solidity
function mockInitApprovals() external
```

### mockSetNormalizedWeights

```solidity
function mockSetNormalizedWeights(
    uint256[] _weights
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_weights` | uint256[] |  |

### getNormalizedWeights

```solidity
function getNormalizedWeights() external returns (uint256[] _weights)
```

### getRate

```solidity
function getRate() external returns (uint256)
```

### mockSetRate

```solidity
function mockSetRate(
    uint256 _rate
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_rate` | uint256 |  |

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

### setSwapFeePercentage

```solidity
function setSwapFeePercentage(
    uint256 swapFeePercentage
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `swapFeePercentage` | uint256 |  |

### setPaused

```solidity
function setPaused(
    bool paused
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `paused` | bool |  |

