# Timed

## Functions

### constructor

```solidity
function constructor(
    uint256 _duration
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_duration` | uint256 |  |

### isTimeEnded

```solidity
function isTimeEnded() public returns (bool)
```

return true if time period has ended

### remainingTime

```solidity
function remainingTime() public returns (uint256)
```

number of seconds remaining until time is up

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | remaining |

### timeSinceStart

```solidity
function timeSinceStart() public returns (uint256)
```

number of seconds since contract was initialized

will be less than or equal to duration

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | timestamp |

### isTimeStarted

```solidity
function isTimeStarted() public returns (bool)
```

### _initTimed

```solidity
function _initTimed() internal
```

### _setDuration

```solidity
function _setDuration(
    uint256 newDuration
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDuration` | uint256 |  |

## Events

### DurationUpdate

```solidity
event DurationUpdate(
    uint256 oldDuration,
    uint256 newDuration
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDuration` | uint256 |  |
| `newDuration` | uint256 |  |
### TimerReset

```solidity
event TimerReset(
    uint256 startTime
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `startTime` | uint256 |  |

