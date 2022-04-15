# AutoRewardsDistributorV2

Controller Contract to set tribe per block in Rewards Distributor Admin on Rari

## Functions

### constructor

```solidity
function constructor(
    address coreAddress,
    contract IRewardsDistributorAdmin _rewardsDistributorAdmin,
    contract ITribalChief _tribalChief,
    contract StakingTokenWrapper _stakedTokenWrapper,
    address _underlying,
    bool _isBorrowIncentivized,
    contract Unitroller _comptroller
) public
```

constructor function

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `coreAddress` | address | address of core contract |
| `_rewardsDistributorAdmin` | contract IRewardsDistributorAdmin | address of rewards distributor admin contract |
| `_tribalChief` | contract ITribalChief | address of tribalchief contract |
| `_stakedTokenWrapper` | contract StakingTokenWrapper | the stakedTokenWrapper this contract controls rewards for |
| `_underlying` | address | address of the underlying for the cToken |
| `_isBorrowIncentivized` | bool | boolean that incentivizes borrow or supply |
| `_comptroller` | contract Unitroller | address of the comptroller contract |

### init

```solidity
function init() external
```

### _deriveRequiredCompSpeed

```solidity
function _deriveRequiredCompSpeed() internal returns (uint256 compSpeed)
```

helper function that gets all needed state from the TribalChief contract
based on this state, it then calculates what the compSpeed should be.

### getNewRewardSpeed

```solidity
function getNewRewardSpeed() public returns (uint256 newCompSpeed, bool updateNeeded)
```

function to get the new comp speed and figure out if an update is needed

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCompSpeed` | uint256 | the newly calculated compSpeed based on allocation points in the TribalChief |
| `updateNeeded` | bool | boolean indicating whether the new compSpeed is not equal to the existing compSpeed |

### setAutoRewardsDistribution

```solidity
function setAutoRewardsDistribution() external
```

function to automatically set the rewards speed on the RewardsDistributor contract
through the RewardsDistributorAdmin

### setRewardsDistributorAdmin

```solidity
function setRewardsDistributorAdmin(
    contract IRewardsDistributorAdmin _newRewardsDistributorAdmin
) external
```

API to point to a new rewards distributor admin contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newRewardsDistributorAdmin` | contract IRewardsDistributorAdmin | the address of the new RewardsDistributorAdmin contract |

## Events

### SpeedChanged

```solidity
event SpeedChanged(
    uint256 newSpeed
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newSpeed` | uint256 |  |
### RewardsDistributorAdminChanged

```solidity
event RewardsDistributorAdminChanged(
    contract IRewardsDistributorAdmin oldRewardsDistributorAdmin,
    contract IRewardsDistributorAdmin newRewardsDistributorAdmin
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldRewardsDistributorAdmin` | contract IRewardsDistributorAdmin |  |
| `newRewardsDistributorAdmin` | contract IRewardsDistributorAdmin |  |

