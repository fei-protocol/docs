# StakingTokenWrapper

Allows the TribalChief to distribute TRIBE to a beneficiary contract
The beneficiary is the sole holder of a dummy token staked in the TribalChief

## Functions

### constructor

```solidity
function constructor(
    contract ITribalChief _tribalChief,
    address _beneficiary
) public
```

constructor for the StakingTokenWrapper

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribalChief` | contract ITribalChief | the TribalChief contract |
| `_beneficiary` | address | the recipient of all harvested TRIBE |

### init

```solidity
function init(
    uint256 _pid
) external
```

initialize the pool with this token as the sole staker

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pid` | uint256 | the pool id of the staking pool associated with this token |

### harvest

```solidity
function harvest() external
```

send rewards to the beneficiary

