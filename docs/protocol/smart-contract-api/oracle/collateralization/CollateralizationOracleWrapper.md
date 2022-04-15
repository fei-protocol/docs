# IPausable

## Functions

### paused

```solidity
function paused() external returns (bool)
```

# CollateralizationOracleWrapper

Reads a list of PCVDeposit that report their amount of collateral
        and the amount of protocol-owned FEI they manage, to deduce the
        protocol-wide collateralization ratio.

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _validityDuration
) public
```

CollateralizationOracleWrapper constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference. |
| `_validityDuration` | uint256 | the duration after which a reading becomes outdated. |

### initialize

```solidity
function initialize(
    address _core,
    address _collateralizationOracle,
    uint256 _validityDuration,
    uint256 _deviationThresholdBasisPoints
) public
```

CollateralizationOracleWrapper initializer

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference. |
| `_collateralizationOracle` | address | the CollateralizationOracle to inspect. |
| `_validityDuration` | uint256 | the duration after which a reading becomes outdated. |
| `_deviationThresholdBasisPoints` | uint256 | threshold for deviation after which
       keepers should call the update() function. |

### setCollateralizationOracle

```solidity
function setCollateralizationOracle(
    address _newCollateralizationOracle
) external
```

set the address of the CollateralizationOracle to inspect, and
to cache values from.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newCollateralizationOracle` | address | the address of the new oracle. |

### setDeviationThresholdBasisPoints

```solidity
function setDeviationThresholdBasisPoints(
    uint256 _newDeviationThresholdBasisPoints
) external
```

set the deviation threshold in basis points, used to detect if the
cached value deviated significantly from the actual fresh readings.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newDeviationThresholdBasisPoints` | uint256 | the new value to set. |

### setValidityDuration

```solidity
function setValidityDuration(
    uint256 _validityDuration
) external
```

set the validity duration of the cached collateralization values.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_validityDuration` | uint256 | the new validity duration
This function will emit a DurationUpdate event from Timed.sol |

### setReadPauseOverride

```solidity
function setReadPauseOverride(
    bool _readPauseOverride
) external
```

set the readPauseOverride flag

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_readPauseOverride` | bool | the new flag for readPauseOverride |

### setCache

```solidity
function setCache(
    uint256 _cachedProtocolControlledValue,
    uint256 _cachedUserCirculatingFei,
    int256 _cachedProtocolEquity
) external
```

governor or admin override to directly write to the cache

used in emergencies where the underlying oracle is compromised or failing

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_cachedProtocolControlledValue` | uint256 |  |
| `_cachedUserCirculatingFei` | uint256 |  |
| `_cachedProtocolEquity` | int256 |  |

### update

```solidity
function update() external
```

update reading of the CollateralizationOracle

### updateIfOutdated

```solidity
function updateIfOutdated() external
```

this method reverts if the oracle is not outdated
        It is useful if the caller is incentivized for calling only when the deviation threshold or frequency has passed

### _update

```solidity
function _update() internal returns (bool)
```

### _setCache

```solidity
function _setCache(
    uint256 _cachedProtocolControlledValue,
    uint256 _cachedUserCirculatingFei,
    int256 _cachedProtocolEquity
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_cachedProtocolControlledValue` | uint256 |  |
| `_cachedUserCirculatingFei` | uint256 |  |
| `_cachedProtocolEquity` | int256 |  |

### isOutdated

```solidity
function isOutdated() public returns (bool outdated)
```

### read

```solidity
function read() external returns (struct Decimal.D256 collateralRatio, bool validityStatus)
```

Get the current collateralization ratio of the protocol, from cache.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `collateralRatio` | struct Decimal.D256 | the current collateral ratio of the protocol. |
| `validityStatus` | bool | the current oracle validity status (false if any
        of the oracles for tokens held in the PCV are invalid, or if
        this contract is paused). |

### isExceededDeviationThreshold

```solidity
function isExceededDeviationThreshold() public returns (bool obsolete)
```

### _isExceededDeviationThreshold

```solidity
function _isExceededDeviationThreshold(
    uint256 cached,
    uint256 current
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cached` | uint256 |  |
| `current` | uint256 |  |

### isOutdatedOrExceededDeviationThreshold

```solidity
function isOutdatedOrExceededDeviationThreshold() external returns (bool)
```

### pcvStats

```solidity
function pcvStats() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)
```

returns the Protocol-Controlled Value, User-circulating FEI, and
        Protocol Equity. If there is a fresh cached value, return it.
        Otherwise, call the CollateralizationOracle to get fresh data.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolControlledValue` | uint256 | : the total USD value of all assets held
        by the protocol. |
| `userCirculatingFei` | uint256 | : the number of FEI not owned by the protocol. |
| `protocolEquity` | int256 | : the difference between PCV and user circulating FEI.
        If there are more circulating FEI than $ in the PCV, equity is 0. |
| `validityStatus` | bool | : the current oracle validity status (false if any
        of the oracles for tokens held in the PCV are invalid, or if
        this contract is paused). |

### isOvercollateralized

```solidity
function isOvercollateralized() external returns (bool)
```

returns true if the protocol is overcollateralized. Overcollateralization
        is defined as the protocol having more assets in its PCV (Protocol
        Controlled Value) than the circulating (user-owned) FEI, i.e.
        a positive Protocol Equity.

### pcvStatsCurrent

```solidity
function pcvStatsCurrent() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)
```

returns the Protocol-Controlled Value, User-circulating FEI, and
        Protocol Equity, from an actual fresh call to the CollateralizationOracle.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolControlledValue` | uint256 | : the total USD value of all assets held
        by the protocol. |
| `userCirculatingFei` | uint256 | : the number of FEI not owned by the protocol. |
| `protocolEquity` | int256 | : the difference between PCV and user circulating FEI.
        If there are more circulating FEI than $ in the PCV, equity is 0. |
| `validityStatus` | bool | : the current oracle validity status (false if any
        of the oracles for tokens held in the PCV are invalid, or if
        this contract is paused). |

### _readNotPaused

```solidity
function _readNotPaused() internal returns (bool)
```

