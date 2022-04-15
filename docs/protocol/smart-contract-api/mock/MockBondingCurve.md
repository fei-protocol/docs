# MockBondingCurve

## Functions

### constructor

```solidity
function constructor(
    bool _atScale,
    uint256 price
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_atScale` | bool |  |
| `price` | uint256 |  |

### setScale

```solidity
function setScale(
    bool _atScale
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_atScale` | bool |  |

### setCurrentPrice

```solidity
function setCurrentPrice(
    uint256 price
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | uint256 |  |

### allocate

```solidity
function allocate() public
```

### purchase

```solidity
function purchase(
    address ,
    uint256 
) public returns (uint256 amountOut)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | uint256 |  |

### getAmountOut

```solidity
function getAmountOut(
    uint256 amount
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### getAverageUSDPrice

```solidity
function getAverageUSDPrice(
    uint256 
) public returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

