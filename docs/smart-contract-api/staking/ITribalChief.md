# ITribalChief

## Functions

### rewardMultipliers

```solidity
function rewardMultipliers(
    uint256 _pid,
    uint128 _blocksLocked
) external returns (uint128)
```

view only functions that return data on pools, user deposit(s), tribe distributed per block, and other constants

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |
| `_blocksLocked` | uint128 |  |

### stakedToken

```solidity
function stakedToken(
    uint256 _index
) external returns (contract IERC20)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_index` | uint256 |  |

### poolInfo

```solidity
function poolInfo(
    uint256 _index
) external returns (uint256, uint256, uint128, uint120, bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_index` | uint256 |  |

### tribePerBlock

```solidity
function tribePerBlock() external returns (uint256)
```

### pendingRewards

```solidity
function pendingRewards(
    uint256 _pid,
    address _user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |
| `_user` | address |  |

### getTotalStakedInPool

```solidity
function getTotalStakedInPool(
    uint256 pid,
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |

### openUserDeposits

```solidity
function openUserDeposits(
    uint256 pid,
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `user` | address |  |

### numPools

```solidity
function numPools() external returns (uint256)
```

### totalAllocPoint

```solidity
function totalAllocPoint() external returns (uint256)
```

### SCALE_FACTOR

```solidity
function SCALE_FACTOR() external returns (uint256)
```

### deposit

```solidity
function deposit(
    uint256 _pid,
    uint256 _amount,
    uint64 _lockLength
) external
```

functions for users to deposit, withdraw and get rewards from our contracts

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |
| `_amount` | uint256 |  |
| `_lockLength` | uint64 |  |

### harvest

```solidity
function harvest(
    uint256 pid,
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `to` | address |  |

### withdrawAllAndHarvest

```solidity
function withdrawAllAndHarvest(
    uint256 pid,
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `to` | address |  |

### withdrawFromDeposit

```solidity
function withdrawFromDeposit(
    uint256 pid,
    uint256 amount,
    address to,
    uint256 index
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `amount` | uint256 |  |
| `to` | address |  |
| `index` | uint256 |  |

### emergencyWithdraw

```solidity
function emergencyWithdraw(
    uint256 pid,
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `to` | address |  |

### updatePool

```solidity
function updatePool(
    uint256 pid
) external
```

functions to update pools that can be called by anyone

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |

### massUpdatePools

```solidity
function massUpdatePools(
    uint256[] pids
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pids` | uint256[] |  |

### resetRewards

```solidity
function resetRewards(
    uint256 _pid
) external
```

functions to change and add pools and multipliers that can only be called by governor, guardian, or TribalChiefAdmin

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |

### set

```solidity
function set(
    uint256 _pid,
    uint120 _allocPoint,
    contract IRewarder _rewarder,
    bool overwrite
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |
| `_allocPoint` | uint120 |  |
| `_rewarder` | contract IRewarder |  |
| `overwrite` | bool |  |

### add

```solidity
function add(
    uint120 allocPoint,
    contract IERC20 _stakedToken,
    contract IRewarder _rewarder,
    struct ITribalChief.RewardData[] rewardData
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `allocPoint` | uint120 |  |
| `_stakedToken` | contract IERC20 |  |
| `_rewarder` | contract IRewarder |  |
| `rewardData` | struct ITribalChief.RewardData[] |  |

### governorWithdrawTribe

```solidity
function governorWithdrawTribe(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### governorAddPoolMultiplier

```solidity
function governorAddPoolMultiplier(
    uint256 _pid,
    uint64 lockLength,
    uint64 newRewardsMultiplier
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |
| `lockLength` | uint64 |  |
| `newRewardsMultiplier` | uint64 |  |

### unlockPool

```solidity
function unlockPool(
    uint256 _pid
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |

### lockPool

```solidity
function lockPool(
    uint256 _pid
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 |  |

### updateBlockReward

```solidity
function updateBlockReward(
    uint256 newBlockReward
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBlockReward` | uint256 |  |

