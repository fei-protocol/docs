# OracleRef

defines some utilities around interacting with the referenced oracle

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _oracle,
    address _backupOracle,
    int256 _decimalsNormalizer,
    bool _doInvert
) internal
```

OracleRef constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core to reference |
| `_oracle` | address | oracle to reference |
| `_backupOracle` | address | backup oracle to reference |
| `_decimalsNormalizer` | int256 | number of decimals to normalize the oracle feed if necessary |
| `_doInvert` | bool | invert the oracle price if this flag is on |

### setOracle

```solidity
function setOracle(
    address newOracle
) external
```

sets the referenced oracle

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOracle` | address | the new oracle to reference |

### setDoInvert

```solidity
function setDoInvert(
    bool newDoInvert
) external
```

sets the flag for whether to invert or not

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDoInvert` | bool | the new flag for whether to invert |

### setDecimalsNormalizer

```solidity
function setDecimalsNormalizer(
    int256 newDecimalsNormalizer
) external
```

sets the new decimalsNormalizer

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDecimalsNormalizer` | int256 | the new decimalsNormalizer |

### setBackupOracle

```solidity
function setBackupOracle(
    address newBackupOracle
) external
```

sets the referenced backup oracle

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBackupOracle` | address | the new backup oracle to reference |

### invert

```solidity
function invert(
    struct Decimal.D256 price
) public returns (struct Decimal.D256)
```

invert a peg price

the inverted peg would be X per FEI

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | struct Decimal.D256 | the peg price to invert |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct Decimal.D256 | the inverted peg as a Decimal |

### updateOracle

```solidity
function updateOracle() public
```

updates the referenced oracle

### readOracle

```solidity
function readOracle() public returns (struct Decimal.D256)
```

the peg price of the referenced oracle

the peg is defined as FEI per X with X being ETH, dollars, etc

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct Decimal.D256 | the peg as a Decimal |

### _setOracle

```solidity
function _setOracle(
    address newOracle
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOracle` | address |  |

### _setBackupOracle

```solidity
function _setBackupOracle(
    address newBackupOracle
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBackupOracle` | address |  |

### _setDoInvert

```solidity
function _setDoInvert(
    bool newDoInvert
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDoInvert` | bool |  |

### _setDecimalsNormalizer

```solidity
function _setDecimalsNormalizer(
    int256 newDecimalsNormalizer
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDecimalsNormalizer` | int256 |  |

### _setDecimalsNormalizerFromToken

```solidity
function _setDecimalsNormalizerFromToken(
    address token
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

