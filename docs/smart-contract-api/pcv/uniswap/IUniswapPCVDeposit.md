# IUniswapPCVDeposit

## Functions

### setMaxBasisPointsFromPegLP

```solidity
function setMaxBasisPointsFromPegLP(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### router

```solidity
function router() external returns (contract IUniswapV2Router02)
```

### liquidityOwned

```solidity
function liquidityOwned() external returns (uint256)
```

### maxBasisPointsFromPegLP

```solidity
function maxBasisPointsFromPegLP() external returns (uint256)
```

## Events

### MaxBasisPointsFromPegLPUpdate

```solidity
event MaxBasisPointsFromPegLPUpdate(
    uint256 oldMaxBasisPointsFromPegLP,
    uint256 newMaxBasisPointsFromPegLP
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldMaxBasisPointsFromPegLP` | uint256 |  |
| `newMaxBasisPointsFromPegLP` | uint256 |  |

