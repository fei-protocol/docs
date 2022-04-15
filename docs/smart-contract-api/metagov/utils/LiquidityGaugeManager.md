# ILiquidityGauge

## Functions

### deposit

```solidity
function deposit(
    uint256 value
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 value,
    bool claim_rewards
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | uint256 |  |
| `claim_rewards` | bool |  |

### claim_rewards

```solidity
function claim_rewards() external
```

### balanceOf

```solidity
function balanceOf(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### staking_token

```solidity
function staking_token() external returns (address)
```

### reward_tokens

```solidity
function reward_tokens(
    uint256 i
) external returns (address token)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### reward_count

```solidity
function reward_count() external returns (uint256 nTokens)
```

# ILiquidityGaugeController

## Functions

### vote_for_gauge_weights

```solidity
function vote_for_gauge_weights(
    address gauge_addr,
    uint256 user_weight
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge_addr` | address |  |
| `user_weight` | uint256 |  |

### last_user_vote

```solidity
function last_user_vote(
    address user,
    address gauge
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `gauge` | address |  |

### vote_user_power

```solidity
function vote_user_power(
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |

### gauge_types

```solidity
function gauge_types(
    address gauge
) external returns (int128)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge` | address |  |

# LiquidityGaugeManager

## Functions

### constructor

```solidity
function constructor(
    address _gaugeController
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_gaugeController` | address |  |

### setGaugeController

```solidity
function setGaugeController(
    address _gaugeController
) public
```

Set the gauge controller used for gauge weight voting

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_gaugeController` | address | the gauge controller address |

### setTokenToGauge

```solidity
function setTokenToGauge(
    address token,
    address gaugeAddress
) public
```

Set gauge for a given token.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | the token address to stake in gauge |
| `gaugeAddress` | address | the address of the gauge where to stake token |

### voteForGaugeWeight

```solidity
function voteForGaugeWeight(
    address token,
    uint256 gaugeWeight
) public
```

Vote for a gauge's weight

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | the address of the token to vote for |
| `gaugeWeight` | uint256 | the weight of gaugeAddress in basis points [0, 10_000] |

### stakeInGauge

```solidity
function stakeInGauge(
    address token,
    uint256 amount
) public
```

Stake tokens in a gauge

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | the address of the token to stake in the gauge |
| `amount` | uint256 | the amount of tokens to stake in the gauge |

### stakeAllInGauge

```solidity
function stakeAllInGauge(
    address token
) public
```

Stake all tokens held in a gauge

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | the address of the token to stake in the gauge |

### unstakeFromGauge

```solidity
function unstakeFromGauge(
    address token,
    uint256 amount
) public
```

Unstake tokens from a gauge

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | the address of the token to unstake from the gauge |
| `amount` | uint256 | the amount of tokens to unstake from the gauge |

### claimGaugeRewards

```solidity
function claimGaugeRewards(
    address gaugeAddress
) public
```

Claim rewards associated to a gauge where this contract stakes
tokens.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gaugeAddress` | address |  |

## Events

### GaugeControllerChanged

```solidity
event GaugeControllerChanged(
    address oldController,
    address newController
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldController` | address |  |
| `newController` | address |  |
### GaugeSetForToken

```solidity
event GaugeSetForToken(
    address token,
    address gauge
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `gauge` | address |  |
### GaugeVote

```solidity
event GaugeVote(
    address gauge,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge` | address |  |
| `amount` | uint256 |  |
### GaugeStake

```solidity
event GaugeStake(
    address gauge,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge` | address |  |
| `amount` | uint256 |  |
### GaugeUnstake

```solidity
event GaugeUnstake(
    address gauge,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge` | address |  |
| `amount` | uint256 |  |
### GaugeRewardsClaimed

```solidity
event GaugeRewardsClaimed(
    address gauge,
    address token,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `gauge` | address |  |
| `token` | address |  |
| `amount` | uint256 |  |

