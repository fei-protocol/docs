# TribalChief

The idea for this TribalChief contract is to be the owner of tribe token
that is deposited into this contract.
This contract was forked from sushiswap and has been modified to distribute staking rewards in tribe.
All legacy code that relied on MasterChef V1 has been removed so that this contract will pay out staking rewards in tribe.
The assumption this code makes is that this MasterChief contract will be funded before going live and offering staking rewards.
This contract will not have the ability to mint tribe.

## Functions

### constructor

```solidity
function constructor(
    address coreAddress
) public
```

The way this function is constructed, you will not be able to
call initialize after this function is constructed, effectively
only allowing TribalChief to be used through delegate calls.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `coreAddress` | address | The Core contract address. |

### initialize

```solidity
function initialize(
    address _core,
    contract IERC20 _tribe
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | The Core contract address. |
| `_tribe` | contract IERC20 | The TRIBE token contract address. |

### updateBlockReward

```solidity
function updateBlockReward(
    uint256 newBlockReward
) external
```

Allows governor to change the amount of tribe per block
make sure to call the update pool function before hitting this function
this will ensure that all of the rewards a user earned previously get paid out

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBlockReward` | uint256 | The new amount of tribe per block to distribute |

### lockPool

```solidity
function lockPool(
    uint256 _pid
) external
```

Allows governor to lock the pool so the users cannot withdraw
until their lockup period is over

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | pool ID |

### unlockPool

```solidity
function unlockPool(
    uint256 _pid
) external
```

Allows governor to unlock the pool so that users can withdraw
before their tokens have been locked for the entire lockup period

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | pool ID |

### governorAddPoolMultiplier

```solidity
function governorAddPoolMultiplier(
    uint256 _pid,
    uint64 lockLength,
    uint64 newRewardsMultiplier
) external
```

Allows governor to change the pool multiplier
Unlocks the pool if the new multiplier is greater than the old one

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | pool ID |
| `lockLength` | uint64 | lock length to change |
| `newRewardsMultiplier` | uint64 | updated rewards multiplier |

### governorWithdrawTribe

```solidity
function governorWithdrawTribe(
    uint256 amount
) external
```

sends tokens back to governance treasury. Only callable by governance

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | the amount of tokens to send back to treasury |

### numPools

```solidity
function numPools() public returns (uint256)
```

Returns the number of pools.

### openUserDeposits

```solidity
function openUserDeposits(
    uint256 pid,
    address user
) public returns (uint256)
```

Returns the number of user deposits in a single pool.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |

### getTotalStakedInPool

```solidity
function getTotalStakedInPool(
    uint256 pid,
    address user
) public returns (uint256)
```

Returns the amount a user deposited in a single pool.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |

### add

```solidity
function add(
    uint120 allocPoint,
    contract IERC20 _stakedToken,
    contract IRewarder _rewarder,
    struct TribalChief.RewardData[] rewardData
) external
```

Add a new pool. Can only be called by the governor.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `allocPoint` | uint120 | AP of the new pool. |
| `_stakedToken` | contract IERC20 | Address of the ERC-20 token to stake. |
| `_rewarder` | contract IRewarder | Address of the rewarder delegate. |
| `rewardData` | struct TribalChief.RewardData[] | Reward Multiplier data |

### set

```solidity
function set(
    uint256 _pid,
    uint120 _allocPoint,
    contract IRewarder _rewarder,
    bool overwrite
) public
```

Update the given pool's TRIBE allocation point and `IRewarder` contract.
Can only be called by the governor.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | The index of the pool. See `poolInfo`. |
| `_allocPoint` | uint120 | New AP of the pool. |
| `_rewarder` | contract IRewarder | Address of the rewarder delegate. |
| `overwrite` | bool | True if _rewarder should be `set`. Otherwise `_rewarder` is ignored. |

### resetRewards

```solidity
function resetRewards(
    uint256 _pid
) public
```

Reset the given pool's TRIBE allocation to 0 and unlock the pool.
Can only be called by the governor or guardian.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | The index of the pool. See `poolInfo`. |

### pendingRewards

```solidity
function pendingRewards(
    uint256 _pid,
    address _user
) external returns (uint256)
```

View function to see all pending TRIBE on frontend.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | The index of the pool. See `poolInfo`. |
| `_user` | address | Address of user. |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | pending TRIBE reward for a given user. |

### massUpdatePools

```solidity
function massUpdatePools(
    uint256[] pids
) external
```

Update reward variables for all pools. Be careful of gas spending!

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pids` | uint256[] | Pool IDs of all to be updated. Make sure to update all active pools. |

### tribePerBlock

```solidity
function tribePerBlock() public returns (uint256)
```

Calculates and returns the `amount` of TRIBE per block.

### updatePool

```solidity
function updatePool(
    uint256 pid
) public
```

Update reward variables of the given pool.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |

### deposit

```solidity
function deposit(
    uint256 pid,
    uint256 amount,
    uint64 lockLength
) public
```

Deposit tokens to earn TRIBE allocation.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `amount` | uint256 | The token amount to deposit. |
| `lockLength` | uint64 | The length of time you would like to lock tokens |

### withdrawAllAndHarvest

```solidity
function withdrawAllAndHarvest(
    uint256 pid,
    address to
) external
```

Withdraw staked tokens from pool.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `to` | address | Receiver of the tokens. |

### withdrawFromDeposit

```solidity
function withdrawFromDeposit(
    uint256 pid,
    uint256 amount,
    address to,
    uint256 index
) public
```

Withdraw tokens from pool.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `amount` | uint256 | Token amount to withdraw. |
| `to` | address | Receiver of the tokens. |
| `index` | uint256 |  |

### _harvest

```solidity
function _harvest(
    uint256 pid,
    address to
) private
```

Helper function to harvest users tribe rewards

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `to` | address | Receiver of TRIBE rewards. |

### harvest

```solidity
function harvest(
    uint256 pid,
    address to
) public
```

Harvest proceeds for transaction sender to `to`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `to` | address | Receiver of TRIBE rewards. |

### emergencyWithdraw

```solidity
function emergencyWithdraw(
    uint256 pid,
    address to
) public
```

Withdraw without caring about rewards. EMERGENCY ONLY.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 | The index of the pool. See `poolInfo`. |
| `to` | address | Receiver of the deposited tokens. |

## Events

### Deposit

```solidity
event Deposit(
    address user,
    uint256 pid,
    uint256 amount,
    uint256 depositID
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `pid` | uint256 |  |
| `amount` | uint256 |  |
| `depositID` | uint256 |  |
### Withdraw

```solidity
event Withdraw(
    address user,
    uint256 pid,
    uint256 amount,
    address to
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `pid` | uint256 |  |
| `amount` | uint256 |  |
| `to` | address |  |
### EmergencyWithdraw

```solidity
event EmergencyWithdraw(
    address user,
    uint256 pid,
    uint256 amount,
    address to
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `pid` | uint256 |  |
| `amount` | uint256 |  |
| `to` | address |  |
### Harvest

```solidity
event Harvest(
    address user,
    uint256 pid,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `pid` | uint256 |  |
| `amount` | uint256 |  |
### LogPoolAddition

```solidity
event LogPoolAddition(
    uint256 pid,
    uint256 allocPoint,
    contract IERC20 stakedToken,
    contract IRewarder rewarder
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `allocPoint` | uint256 |  |
| `stakedToken` | contract IERC20 |  |
| `rewarder` | contract IRewarder |  |
### LogSetPool

```solidity
event LogSetPool(
    uint256 pid,
    uint256 allocPoint,
    contract IRewarder rewarder,
    bool overwrite
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `allocPoint` | uint256 |  |
| `rewarder` | contract IRewarder |  |
| `overwrite` | bool |  |
### LogPoolMultiplier

```solidity
event LogPoolMultiplier(
    uint256 pid,
    uint128 lockLength,
    uint256 multiplier
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `lockLength` | uint128 |  |
| `multiplier` | uint256 |  |
### LogUpdatePool

```solidity
event LogUpdatePool(
    uint256 pid,
    uint128 lastRewardBlock,
    uint256 lpSupply,
    uint256 accTribePerShare
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `lastRewardBlock` | uint128 |  |
| `lpSupply` | uint256 |  |
| `accTribePerShare` | uint256 |  |
### TribeWithdraw

```solidity
event TribeWithdraw(
    uint256 amount
)
```

tribe withdraw event

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
### NewTribePerBlock

```solidity
event NewTribePerBlock(
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
### PoolLocked

```solidity
event PoolLocked(
    bool locked,
    uint256 pid
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `locked` | bool |  |
| `pid` | uint256 |  |

