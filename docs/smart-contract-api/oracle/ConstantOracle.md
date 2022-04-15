# ConstantOracle

Return a constant oracle price

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _priceBasisPoints
) public
```

Constant oracle constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_priceBasisPoints` | uint256 | the price to report in basis points |

### update

```solidity
function update() external
```

updates the oracle price

no-op, oracle is fixed

### isOutdated

```solidity
function isOutdated() external returns (bool)
```

determine if read value is stale

always false, oracle is fixed

### read

```solidity
function read() external returns (struct Decimal.D256, bool)
```

read the oracle price

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct Decimal.D256 | constant oracle price |
| `[1]` | bool | true if not paused |

