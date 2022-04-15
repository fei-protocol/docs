# TribalChiefSyncExtension

## Functions

### constructor

```solidity
function constructor(
    contract TribalChiefSyncV2 _tribalChiefSync
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribalChiefSync` | contract TribalChiefSyncV2 |  |

### autoDecreaseRewards

```solidity
function autoDecreaseRewards(
    contract IAutoRewardsDistributor[] distributors
) external
```

Sync a rewards rate change automatically using pre-approved map

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `distributors` | contract IAutoRewardsDistributor[] |  |

### decreaseRewards

```solidity
function decreaseRewards(
    uint256 tribePerBlock,
    bytes32 salt,
    contract IAutoRewardsDistributor[] distributors
) external
```

Sync a rewards rate change

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tribePerBlock` | uint256 |  |
| `salt` | bytes32 |  |
| `distributors` | contract IAutoRewardsDistributor[] |  |

### addPool

```solidity
function addPool(
    uint120 allocPoint,
    address stakedToken,
    address rewarder,
    struct TribalChiefSyncV2.RewardData[] rewardData,
    bytes32 salt,
    contract IAutoRewardsDistributor[] distributors
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
| `distributors` | contract IAutoRewardsDistributor[] |  |

### setPool

```solidity
function setPool(
    uint256 pid,
    uint120 allocPoint,
    contract IRewarder rewarder,
    bool overwrite,
    bytes32 salt,
    contract IAutoRewardsDistributor[] distributors
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
| `distributors` | contract IAutoRewardsDistributor[] |  |

### resetPool

```solidity
function resetPool(
    uint256 pid,
    bytes32 salt,
    contract IAutoRewardsDistributor[] distributors
) external
```

Sync a pool reset rewards action

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pid` | uint256 |  |
| `salt` | bytes32 |  |
| `distributors` | contract IAutoRewardsDistributor[] |  |

