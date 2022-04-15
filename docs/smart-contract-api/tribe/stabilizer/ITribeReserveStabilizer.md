# ITribeReserveStabilizer

## Functions

### setCollateralizationOracle

```solidity
function setCollateralizationOracle(
    contract ICollateralizationOracle newCollateralizationOracle
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationOracle` | contract ICollateralizationOracle |  |

### setCollateralizationThreshold

```solidity
function setCollateralizationThreshold(
    uint256 newCollateralizationThresholdBasisPoints
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationThresholdBasisPoints` | uint256 |  |

### startOracleDelayCountdown

```solidity
function startOracleDelayCountdown() external
```

### resetOracleDelayCountdown

```solidity
function resetOracleDelayCountdown() external
```

### isCollateralizationBelowThreshold

```solidity
function isCollateralizationBelowThreshold() external returns (bool)
```

### collateralizationOracle

```solidity
function collateralizationOracle() external returns (contract ICollateralizationOracle)
```

### collateralizationThreshold

```solidity
function collateralizationThreshold() external returns (struct Decimal.D256)
```

## Events

### CollateralizationOracleUpdate

```solidity
event CollateralizationOracleUpdate(
    address oldCollateralizationOracle,
    address newCollateralizationOracle
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldCollateralizationOracle` | address |  |
| `newCollateralizationOracle` | address |  |
### CollateralizationThresholdUpdate

```solidity
event CollateralizationThresholdUpdate(
    uint256 oldCollateralizationThresholdBasisPoints,
    uint256 newCollateralizationThresholdBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldCollateralizationThresholdBasisPoints` | uint256 |  |
| `newCollateralizationThresholdBasisPoints` | uint256 |  |

