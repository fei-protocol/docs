# CompositeOracle

Reads two oracles and returns their product

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IOracle _oracleA,
    contract IOracle _oracleB
) public
```

CompositeOracle constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_oracleA` | contract IOracle | first referenced oracle |
| `_oracleB` | contract IOracle | second referenced oracle |

### update

```solidity
function update() external
```

updates the oracle price

### isOutdated

```solidity
function isOutdated() external returns (bool)
```

determine if read value is stale

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true if read value is stale |

### read

```solidity
function read() external returns (struct Decimal.D256, bool)
```

read the oracle price

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct Decimal.D256 | oracle price |
| `[1]` | bool | true if price is valid |

