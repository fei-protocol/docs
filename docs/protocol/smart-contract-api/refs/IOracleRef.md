# IOracleRef

## Functions

### updateOracle

```solidity
function updateOracle() external
```

### setOracle

```solidity
function setOracle(
    address newOracle
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOracle` | address |  |

### setBackupOracle

```solidity
function setBackupOracle(
    address newBackupOracle
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBackupOracle` | address |  |

### setDecimalsNormalizer

```solidity
function setDecimalsNormalizer(
    int256 newDecimalsNormalizer
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDecimalsNormalizer` | int256 |  |

### setDoInvert

```solidity
function setDoInvert(
    bool newDoInvert
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDoInvert` | bool |  |

### oracle

```solidity
function oracle() external returns (contract IOracle)
```

### backupOracle

```solidity
function backupOracle() external returns (contract IOracle)
```

### doInvert

```solidity
function doInvert() external returns (bool)
```

### decimalsNormalizer

```solidity
function decimalsNormalizer() external returns (int256)
```

### readOracle

```solidity
function readOracle() external returns (struct Decimal.D256)
```

### invert

```solidity
function invert(
    struct Decimal.D256 price
) external returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | struct Decimal.D256 |  |

## Events

### OracleUpdate

```solidity
event OracleUpdate(
    address oldOracle,
    address newOracle
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldOracle` | address |  |
| `newOracle` | address |  |
### InvertUpdate

```solidity
event InvertUpdate(
    bool oldDoInvert,
    bool newDoInvert
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDoInvert` | bool |  |
| `newDoInvert` | bool |  |
### DecimalsNormalizerUpdate

```solidity
event DecimalsNormalizerUpdate(
    int256 oldDecimalsNormalizer,
    int256 newDecimalsNormalizer
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDecimalsNormalizer` | int256 |  |
| `newDecimalsNormalizer` | int256 |  |
### BackupOracleUpdate

```solidity
event BackupOracleUpdate(
    address oldBackupOracle,
    address newBackupOracle
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldBackupOracle` | address |  |
| `newBackupOracle` | address |  |

