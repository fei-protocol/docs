# MockUniswapV2PairTrade

## Functions

### constructor

```solidity
function constructor(
    uint256 _price0CumulativeLast,
    uint256 _price1CumulativeLast,
    uint32 _blockTimestampLast,
    uint112 r0,
    uint112 r1
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_price0CumulativeLast` | uint256 |  |
| `_price1CumulativeLast` | uint256 |  |
| `_blockTimestampLast` | uint32 |  |
| `r0` | uint112 |  |
| `r1` | uint112 |  |

### getReserves

```solidity
function getReserves() public returns (uint112, uint112, uint32)
```

### simulateTrade

```solidity
function simulateTrade(
    uint112 newReserve0,
    uint112 newReserve1,
    uint32 blockTimestamp
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReserve0` | uint112 |  |
| `newReserve1` | uint112 |  |
| `blockTimestamp` | uint32 |  |

### set

```solidity
function set(
    uint256 _price0CumulativeLast,
    uint256 _price1CumulativeLast,
    uint32 _blockTimestampLast
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_price0CumulativeLast` | uint256 |  |
| `_price1CumulativeLast` | uint256 |  |
| `_blockTimestampLast` | uint32 |  |

### setReserves

```solidity
function setReserves(
    uint112 r0,
    uint112 r1
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `r0` | uint112 |  |
| `r1` | uint112 |  |

