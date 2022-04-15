# ISaddleSwap

## Functions

### getA

```solidity
function getA() external returns (uint256)
```

### getToken

```solidity
function getToken(
    uint8 index
) external returns (contract IERC20)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint8 |  |

### getTokenIndex

```solidity
function getTokenIndex(
    address tokenAddress
) external returns (uint8)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAddress` | address |  |

### getTokenBalance

```solidity
function getTokenBalance(
    uint8 index
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint8 |  |

### getVirtualPrice

```solidity
function getVirtualPrice() external returns (uint256)
```

### calculateSwap

```solidity
function calculateSwap(
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenIndexFrom` | uint8 |  |
| `tokenIndexTo` | uint8 |  |
| `dx` | uint256 |  |

### calculateTokenAmount

```solidity
function calculateTokenAmount(
    uint256[] amounts,
    bool deposit
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[] |  |
| `deposit` | bool |  |

### calculateRemoveLiquidity

```solidity
function calculateRemoveLiquidity(
    uint256 amount
) external returns (uint256[])
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### calculateRemoveLiquidityOneToken

```solidity
function calculateRemoveLiquidityOneToken(
    uint256 tokenAmount,
    uint8 tokenIndex
) external returns (uint256 availableTokenAmount)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAmount` | uint256 |  |
| `tokenIndex` | uint8 |  |

### swap

```solidity
function swap(
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx,
    uint256 minDy,
    uint256 deadline
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenIndexFrom` | uint8 |  |
| `tokenIndexTo` | uint8 |  |
| `dx` | uint256 |  |
| `minDy` | uint256 |  |
| `deadline` | uint256 |  |

### addLiquidity

```solidity
function addLiquidity(
    uint256[] amounts,
    uint256 minToMint,
    uint256 deadline
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[] |  |
| `minToMint` | uint256 |  |
| `deadline` | uint256 |  |

### removeLiquidity

```solidity
function removeLiquidity(
    uint256 amount,
    uint256[] minAmounts,
    uint256 deadline
) external returns (uint256[])
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `minAmounts` | uint256[] |  |
| `deadline` | uint256 |  |

### removeLiquidityOneToken

```solidity
function removeLiquidityOneToken(
    uint256 tokenAmount,
    uint8 tokenIndex,
    uint256 minAmount,
    uint256 deadline
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAmount` | uint256 |  |
| `tokenIndex` | uint8 |  |
| `minAmount` | uint256 |  |
| `deadline` | uint256 |  |

