# IMockERC20

## Functions

### mint

```solidity
function mint(
    address account,
    uint256 amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

# MockAngleStakingRewards

## Functions

### constructor

```solidity
function constructor(
    contract IERC20 _stakingToken,
    contract IMockERC20 _rewardToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_stakingToken` | contract IERC20 |  |
| `_rewardToken` | contract IMockERC20 |  |

### stake

```solidity
function stake(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### getReward

```solidity
function getReward() external
```

