# IUniRef

## Functions

### setPair

```solidity
function setPair(
    address newPair
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPair` | address |  |

### pair

```solidity
function pair() external returns (contract IUniswapV2Pair)
```

### token

```solidity
function token() external returns (address)
```

### getReserves

```solidity
function getReserves() external returns (uint256 feiReserves, uint256 tokenReserves)
```

## Events

### PairUpdate

```solidity
event PairUpdate(
    address oldPair,
    address newPair
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldPair` | address |  |
| `newPair` | address |  |

