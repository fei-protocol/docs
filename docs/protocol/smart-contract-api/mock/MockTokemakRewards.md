# MockTokemakRewards

## Functions

### constructor

```solidity
function constructor(
    address _rewardsToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_rewardsToken` | address |  |

### claim

```solidity
function claim(
    struct MockTokemakRewards.Recipient recipient,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `recipient` | struct MockTokemakRewards.Recipient |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

