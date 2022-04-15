# IPCVEquityMinter

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

### setAPRBasisPoints

```solidity
function setAPRBasisPoints(
    uint256 newAprBasisPoints
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAprBasisPoints` | uint256 |  |

### MAX_APR_BASIS_POINTS

```solidity
function MAX_APR_BASIS_POINTS() external returns (uint256)
```

### collateralizationOracle

```solidity
function collateralizationOracle() external returns (contract ICollateralizationOracle)
```

### aprBasisPoints

```solidity
function aprBasisPoints() external returns (uint256)
```

## Events

### APRUpdate

```solidity
event APRUpdate(
    uint256 oldAprBasisPoints,
    uint256 newAprBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldAprBasisPoints` | uint256 |  |
| `newAprBasisPoints` | uint256 |  |
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

