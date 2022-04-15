# IRewarder

## Functions

### onSushiReward

```solidity
function onSushiReward(
    uint256 pid,
    address user,
    address recipient,
    uint256 sushiAmount,
    uint256 newLpAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |
| `recipient` | address |  |
| `sushiAmount` | uint256 |  |
| `newLpAmount` | uint256 |  |

### pendingTokens

```solidity
function pendingTokens(
    uint256 pid,
    address user,
    uint256 sushiAmount
) external returns (contract IERC20[], uint256[])
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |
| `sushiAmount` | uint256 |  |

