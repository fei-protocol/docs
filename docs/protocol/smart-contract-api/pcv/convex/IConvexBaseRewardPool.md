# IConvexBaseRewardPool

## Functions

### rewardToken

```solidity
function rewardToken() external returns (address)
```

### stakingToken

```solidity
function stakingToken() external returns (address)
```

### duration

```solidity
function duration() external returns (uint256)
```

### operator

```solidity
function operator() external returns (address)
```

### rewardManager

```solidity
function rewardManager() external returns (address)
```

### pid

```solidity
function pid() external returns (uint256)
```

### periodFinish

```solidity
function periodFinish() external returns (uint256)
```

### rewardRate

```solidity
function rewardRate() external returns (uint256)
```

### lastUpdateTime

```solidity
function lastUpdateTime() external returns (uint256)
```

### rewardPerTokenStored

```solidity
function rewardPerTokenStored() external returns (uint256)
```

### queuedRewards

```solidity
function queuedRewards() external returns (uint256)
```

### currentRewards

```solidity
function currentRewards() external returns (uint256)
```

### historicalRewards

```solidity
function historicalRewards() external returns (uint256)
```

### newRewardRatio

```solidity
function newRewardRatio() external returns (uint256)
```

### userRewardPerTokenPaid

```solidity
function userRewardPerTokenPaid(
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |

### rewards

```solidity
function rewards(
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |

### extraRewards

```solidity
function extraRewards(
    uint256 i
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### totalSupply

```solidity
function totalSupply() external returns (uint256)
```

### balanceOf

```solidity
function balanceOf(
    address account
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### extraRewardsLength

```solidity
function extraRewardsLength() external returns (uint256)
```

### addExtraReward

```solidity
function addExtraReward(
    address _reward
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_reward` | address |  |

### clearExtraRewards

```solidity
function clearExtraRewards() external
```

### lastTimeRewardApplicable

```solidity
function lastTimeRewardApplicable() external returns (uint256)
```

### rewardPerToken

```solidity
function rewardPerToken() external returns (uint256)
```

### earned

```solidity
function earned(
    address account
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### stake

```solidity
function stake(
    uint256 _amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |

### stakeAll

```solidity
function stakeAll() external returns (bool)
```

### stakeFor

```solidity
function stakeFor(
    address _for,
    uint256 _amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_for` | address |  |
| `_amount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 amount,
    bool claim
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `claim` | bool |  |

### withdrawAll

```solidity
function withdrawAll(
    bool claim
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `claim` | bool |  |

### withdrawAndUnwrap

```solidity
function withdrawAndUnwrap(
    uint256 amount,
    bool claim
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `claim` | bool |  |

### withdrawAllAndUnwrap

```solidity
function withdrawAllAndUnwrap(
    bool claim
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `claim` | bool |  |

### getReward

```solidity
function getReward(
    address _account,
    bool _claimExtras
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_account` | address |  |
| `_claimExtras` | bool |  |

### getReward

```solidity
function getReward() external returns (bool)
```

### donate

```solidity
function donate(
    uint256 _amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |

### queueNewRewards

```solidity
function queueNewRewards(
    uint256 _rewards
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_rewards` | uint256 |  |

