# CollateralizationOracleGuardian

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract ICollateralizationOracleWrapper _oracleWrapper,
    uint256 _frequency,
    uint256 _deviationThresholdBasisPoints
) public
```

The constructor for CollateralizationOracleGuardian
        @param _core the core address to reference
        @param _oracleWrapper the instance of CollateralizationOracleWrapper
        @param _frequency the maximum frequency a guardian can update the cache
        @param _deviationThresholdBasisPoints the maximum percent change in a cache value for a given update

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_oracleWrapper` | contract ICollateralizationOracleWrapper |  |
| `_frequency` | uint256 |  |
| `_deviationThresholdBasisPoints` | uint256 |  |

### setCache

```solidity
function setCache(
    uint256 protocolControlledValue,
    uint256 userCirculatingFei
) external
```

guardian set the cache values on collateralization oracle

make sure to pause the CR oracle wrapper or else the set value would be overwritten on next update

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolControlledValue` | uint256 | new PCV value |
| `userCirculatingFei` | uint256 | new user FEI value |

### calculateDeviationThresholdBasisPoints

```solidity
function calculateDeviationThresholdBasisPoints(
    uint256 a,
    uint256 b
) public returns (uint256)
```

return the percent deviation between a and b in basis points terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### setDeviationThresholdBasisPoints

```solidity
function setDeviationThresholdBasisPoints(
    uint256 newDeviationThresholdBasisPoints
) external
```

governance setter for maximum deviation the guardian can change per update

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDeviationThresholdBasisPoints` | uint256 |  |

### _setDeviationThresholdBasisPoints

```solidity
function _setDeviationThresholdBasisPoints(
    uint256 newDeviationThresholdBasisPoints
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDeviationThresholdBasisPoints` | uint256 |  |

## Events

### DeviationThresholdUpdate

```solidity
event DeviationThresholdUpdate(
    uint256 oldDeviationThresholdBasisPoints,
    uint256 newDeviationThresholdBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDeviationThresholdBasisPoints` | uint256 |  |
| `newDeviationThresholdBasisPoints` | uint256 |  |

