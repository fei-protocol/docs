# IReserveStabilizer

## Functions

### exchangeFei

```solidity
function exchangeFei(
    uint256 feiAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `feiAmount` | uint256 |  |

### setUsdPerFeiRate

```solidity
function setUsdPerFeiRate(
    uint256 exchangeRateBasisPoints
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `exchangeRateBasisPoints` | uint256 |  |

### usdPerFeiBasisPoints

```solidity
function usdPerFeiBasisPoints() external returns (uint256)
```

### getAmountOut

```solidity
function getAmountOut(
    uint256 amountIn
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountIn` | uint256 |  |

## Events

### FeiExchange

```solidity
event FeiExchange(
    address to,
    uint256 feiAmountIn,
    uint256 amountOut
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `feiAmountIn` | uint256 |  |
| `amountOut` | uint256 |  |
### UsdPerFeiRateUpdate

```solidity
event UsdPerFeiRateUpdate(
    uint256 oldUsdPerFeiBasisPoints,
    uint256 newUsdPerFeiBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldUsdPerFeiBasisPoints` | uint256 |  |
| `newUsdPerFeiBasisPoints` | uint256 |  |

