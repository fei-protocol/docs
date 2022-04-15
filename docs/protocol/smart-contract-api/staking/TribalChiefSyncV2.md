# IAutoRewardsDistributor

## Functions

### setAutoRewardsDistribution

```solidity
function setAutoRewardsDistribution() external
```

# ITimelock

## Functions

### execute

```solidity
function execute(
    address target,
    uint256 value,
    bytes data,
    bytes32 predecessor,
    bytes32 salt
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `data` | bytes |  |
| `predecessor` | bytes32 |  |
| `salt` | bytes32 |  |

# TribalChiefSyncV2

## Functions

### constructor

```solidity
function constructor(
    contract ITribalChief _tribalChief,
    contract IAutoRewardsDistributor _autoRewardsDistributor,
    contract ITimelock _timelock,
    uint256[] rewards,
    uint256[] timestamps
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribalChief` | contract ITribalChief |  |
| `_autoRewardsDistributor` | contract IAutoRewardsDistributor |  |
| `_timelock` | contract ITimelock |  |
| `rewards` | uint256[] |  |
| `timestamps` | uint256[] |  |

### autoDecreaseRewards

```solidity
function autoDecreaseRewards() external
```

Sync a rewards rate change automatically using pre-approved map

### isRewardDecreaseAvailable

```solidity
function isRewardDecreaseAvailable() public returns (bool)
```

### nextRewardTimestamp

```solidity
function nextRewardTimestamp() public returns (uint256)
```

### nextRewardsRate

```solidity
function nextRewardsRate() public returns (uint256)
```

### decreaseRewards

```solidity
function decreaseRewards(
    uint256 tribePerBlock,
    bytes32 salt
) external
```

Sync a rewards rate change

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tribePerBlock` | uint256 |  |
| `salt` | bytes32 |  |

### addPool

```solidity
function addPool(
    uint120 allocPoint,
    address stakedToken,
    address rewarder,
    struct TribalChiefSyncV2.RewardData[] rewardData,
    bytes32 salt
) external
```

Sync a pool addition

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `allocPoint` | uint120 |  |
| `stakedToken` | address |  |
| `rewarder` | address |  |
| `rewardData` | struct TribalChiefSyncV2.RewardData[] |  |
| `salt` | bytes32 |  |

### setPool

```solidity
function setPool(
    uint256 pid,
    uint120 allocPoint,
    contract IRewarder rewarder,
    bool overwrite,
    bytes32 salt
) external
```

Sync a pool set action

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `allocPoint` | uint120 |  |
| `rewarder` | contract IRewarder |  |
| `overwrite` | bool |  |
| `salt` | bytes32 |  |

### resetPool

```solidity
function resetPool(
    uint256 pid,
    bytes32 salt
) external
```

Sync a pool reset rewards action

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `salt` | bytes32 |  |

