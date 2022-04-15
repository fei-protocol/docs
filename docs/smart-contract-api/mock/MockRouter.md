# MockRouter

## Functions

### constructor

```solidity
function constructor(
    address pair
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pair` | address |  |

### addLiquidityETH

```solidity
function addLiquidityETH(
    address token,
    uint256 amountTokenDesired,
    uint256 amountToken0Min,
    uint256 ,
    address to,
    uint256 
) external returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `amountTokenDesired` | uint256 |  |
| `amountToken0Min` | uint256 |  |
| `` | uint256 |  |
| `to` | address |  |
| `` | uint256 |  |

### checkAmountMin

```solidity
function checkAmountMin(
    uint256 amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### setAmountMin

```solidity
function setAmountMin(
    uint256 amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### addLiquidity

```solidity
function addLiquidity(
    address token0,
    address token1,
    uint256 amountToken0Desired,
    uint256 amountToken1Desired,
    uint256 amountToken0Min,
    uint256 ,
    address to,
    uint256 
) external returns (uint256, uint256, uint256 liquidity)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token0` | address |  |
| `token1` | address |  |
| `amountToken0Desired` | uint256 |  |
| `amountToken1Desired` | uint256 |  |
| `amountToken0Min` | uint256 |  |
| `` | uint256 |  |
| `to` | address |  |
| `` | uint256 |  |

### setWETH

```solidity
function setWETH(
    address weth
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `weth` | address |  |

### removeLiquidity

```solidity
function removeLiquidity(
    address ,
    address ,
    uint256 liquidity,
    uint256 amountToken0Min,
    uint256 ,
    address to,
    uint256 
) external returns (uint256 amountFei, uint256 amountToken)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | address |  |
| `liquidity` | uint256 |  |
| `amountToken0Min` | uint256 |  |
| `` | uint256 |  |
| `to` | address |  |
| `` | uint256 |  |

### transferLiquidity

```solidity
function transferLiquidity(
    uint256 liquidity
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `liquidity` | uint256 |  |

### ratioOwned

```solidity
function ratioOwned(
    address to
) public returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |

