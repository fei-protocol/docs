# IRiskCurve

## Functions

### changeWeights

```solidity
function changeWeights() external
```

kick off a new weight change using the current leverage and weight change time

### changeCurve

```solidity
function changeCurve(
    struct IRiskCurve.CurveParams curveParams
) external
```

change the risk curve parameters

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `curveParams` | struct IRiskCurve.CurveParams |  |

### isWeightChangeEligible

```solidity
function isWeightChangeEligible() external returns (bool)
```

determine whether or not to kick off a new weight change

### getCurveParams

```solidity
function getCurveParams() external returns (struct IRiskCurve.CurveParams)
```

return the risk curve parameters

### getCurrentLeverage

```solidity
function getCurrentLeverage() external returns (uint256)
```

return the current leverage in the protocol, defined as PCV / protocol equity

### getAssetWeight

```solidity
function getAssetWeight(
    address asset,
    uint256 leverage
) external returns (uint256)
```

return the balancer weight of an asset at a given leverage

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |
| `leverage` | uint256 |  |

### getWeights

```solidity
function getWeights(
    uint256 leverage
) external returns (address[], uint256[])
```

return the set of assets and their corresponding weights at a given leverage

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `leverage` | uint256 |  |

### getCurrentTargetAssetWeight

```solidity
function getCurrentTargetAssetWeight(
    address asset
) external returns (uint256)
```

return the target weight for an asset at current leverage

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |

### getCurrentTargetWeights

```solidity
function getCurrentTargetWeights() external returns (address[], uint256[])
```

return the set of assets and their corresponding weights at a current leverage

### getWeightChangeTime

```solidity
function getWeightChangeTime(
    uint256[] oldWeights,
    uint256[] newWeights
) external returns (uint256)
```

get the number of seconds to transition weights given the old and new weights

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldWeights` | uint256[] |  |
| `newWeights` | uint256[] |  |

