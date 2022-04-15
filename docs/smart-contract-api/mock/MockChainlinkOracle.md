# MockChainlinkOracle

## Functions

### constructor

```solidity
function constructor(
    int256 value,
    uint8 decimals
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | int256 |  |
| `decimals` | uint8 |  |

### decimals

```solidity
function decimals() external returns (uint8)
```

### description

```solidity
function description() external returns (string)
```

### getRoundData

```solidity
function getRoundData(
    uint80 _getRoundId
) external returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_getRoundId` | uint80 |  |

### latestRoundData

```solidity
function latestRoundData() external returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### set

```solidity
function set(
    uint80 roundId,
    int256 answer,
    uint256 startedAt,
    uint256 updatedAt,
    uint80 answeredInRound
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `roundId` | uint80 |  |
| `answer` | int256 |  |
| `startedAt` | uint256 |  |
| `updatedAt` | uint256 |  |
| `answeredInRound` | uint80 |  |

### version

```solidity
function version() external returns (uint256)
```

