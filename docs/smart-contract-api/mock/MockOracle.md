# MockOracle

## Functions

### constructor

```solidity
function constructor(
    uint256 usdPerEth
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `usdPerEth` | uint256 |  |

### update

```solidity
function update() public
```

### read

```solidity
function read() public returns (struct Decimal.D256, bool)
```

### isOutdated

```solidity
function isOutdated() public returns (bool)
```

### setOutdated

```solidity
function setOutdated(
    bool _outdated
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_outdated` | bool |  |

### setValid

```solidity
function setValid(
    bool isValid
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `isValid` | bool |  |

### setExchangeRate

```solidity
function setExchangeRate(
    uint256 usdPerEth
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `usdPerEth` | uint256 |  |

### setExchangeRateScaledBase

```solidity
function setExchangeRateScaledBase(
    uint256 usdPerEth
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `usdPerEth` | uint256 |  |

