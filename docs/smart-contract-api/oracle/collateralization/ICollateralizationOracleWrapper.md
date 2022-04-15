# ICollateralizationOracleWrapper

## Functions

### updateIfOutdated

```solidity
function updateIfOutdated() external
```

### setValidityDuration

```solidity
function setValidityDuration(
    uint256 _validityDuration
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_validityDuration` | uint256 |  |

### setReadPauseOverride

```solidity
function setReadPauseOverride(
    bool newReadPauseOverride
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReadPauseOverride` | bool |  |

### setDeviationThresholdBasisPoints

```solidity
function setDeviationThresholdBasisPoints(
    uint256 _newDeviationThresholdBasisPoints
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newDeviationThresholdBasisPoints` | uint256 |  |

### setCollateralizationOracle

```solidity
function setCollateralizationOracle(
    address _newCollateralizationOracle
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newCollateralizationOracle` | address |  |

### setCache

```solidity
function setCache(
    uint256 protocolControlledValue,
    uint256 userCirculatingFei,
    int256 protocolEquity
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolControlledValue` | uint256 |  |
| `userCirculatingFei` | uint256 |  |
| `protocolEquity` | int256 |  |

### cachedProtocolControlledValue

```solidity
function cachedProtocolControlledValue() external returns (uint256)
```

### cachedUserCirculatingFei

```solidity
function cachedUserCirculatingFei() external returns (uint256)
```

### cachedProtocolEquity

```solidity
function cachedProtocolEquity() external returns (int256)
```

### deviationThresholdBasisPoints

```solidity
function deviationThresholdBasisPoints() external returns (uint256)
```

### collateralizationOracle

```solidity
function collateralizationOracle() external returns (address)
```

### isOutdatedOrExceededDeviationThreshold

```solidity
function isOutdatedOrExceededDeviationThreshold() external returns (bool)
```

### pcvStatsCurrent

```solidity
function pcvStatsCurrent() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)
```

### isExceededDeviationThreshold

```solidity
function isExceededDeviationThreshold() external returns (bool)
```

### readPauseOverride

```solidity
function readPauseOverride() external returns (bool)
```

## Events

### CachedValueUpdate

```solidity
event CachedValueUpdate(
    address from,
    uint256 protocolControlledValue,
    uint256 userCirculatingFei,
    int256 protocolEquity
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `protocolControlledValue` | uint256 |  |
| `userCirculatingFei` | uint256 |  |
| `protocolEquity` | int256 |  |
### CollateralizationOracleUpdate

```solidity
event CollateralizationOracleUpdate(
    address from,
    address oldOracleAddress,
    address newOracleAddress
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `oldOracleAddress` | address |  |
| `newOracleAddress` | address |  |
### DeviationThresholdUpdate

```solidity
event DeviationThresholdUpdate(
    address from,
    uint256 oldThreshold,
    uint256 newThreshold
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `oldThreshold` | uint256 |  |
| `newThreshold` | uint256 |  |
### ReadPauseOverrideUpdate

```solidity
event ReadPauseOverrideUpdate(
    bool readPauseOverride
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `readPauseOverride` | bool |  |

