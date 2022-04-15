# LinearTokenTimelock

## Functions

### constructor

```solidity
function constructor(
    address _beneficiary,
    uint256 _duration,
    address _lockedToken,
    uint256 _cliffDuration,
    address _clawbackAdmin,
    uint256 _startTime
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_beneficiary` | address |  |
| `_duration` | uint256 |  |
| `_lockedToken` | address |  |
| `_cliffDuration` | uint256 |  |
| `_clawbackAdmin` | address |  |
| `_startTime` | uint256 |  |

### _proportionAvailable

```solidity
function _proportionAvailable(
    uint256 initialBalance,
    uint256 elapsed,
    uint256 duration
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `initialBalance` | uint256 |  |
| `elapsed` | uint256 |  |
| `duration` | uint256 |  |

