# IMockUniswapV2PairLiquidity

## Functions

### burnEth

```solidity
function burnEth(
    address to,
    struct Decimal.D256 ratio
) external returns (uint256 amountEth, uint256 amount1)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `ratio` | struct Decimal.D256 |  |

### burnToken

```solidity
function burnToken(
    address to,
    struct Decimal.D256 ratio
) external returns (uint256 amount0, uint256 amount1)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `ratio` | struct Decimal.D256 |  |

### mintAmount

```solidity
function mintAmount(
    address to,
    uint256 _liquidity
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `_liquidity` | uint256 |  |

### setReserves

```solidity
function setReserves(
    uint112 newReserve0,
    uint112 newReserve1
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReserve0` | uint112 |  |
| `newReserve1` | uint112 |  |

