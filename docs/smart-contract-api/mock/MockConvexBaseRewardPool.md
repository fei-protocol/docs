# MockConvexBaseRewardPool

## Functions

### constructor

```solidity
function constructor(
    address _rewardToken,
    address _lpTokens
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_rewardToken` | address |  |
| `_lpTokens` | address |  |

### mockSetRewardAmountPerClaim

```solidity
function mockSetRewardAmountPerClaim(
    uint256 _rewardAmountPerClaim
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_rewardAmountPerClaim` | uint256 |  |

### withdrawAndUnwrap

```solidity
function withdrawAndUnwrap(
    uint256 amount,
    bool claim
) public returns (bool)
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
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `claim` | bool |  |

### getReward

```solidity
function getReward(
    address who,
    bool claim
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `claim` | bool |  |

### stakeFor

```solidity
function stakeFor(
    address who,
    uint256 amount
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `amount` | uint256 |  |

### balanceOf

```solidity
function balanceOf(
    address who
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |

