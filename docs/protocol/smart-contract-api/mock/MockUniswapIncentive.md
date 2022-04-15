# MockUniswapIncentive

## Functions

### constructor

```solidity
function constructor(
    address core
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `core` | address |  |

### incentivize

```solidity
function incentivize(
    address sender,
    address recipient,
    address ,
    uint256 
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address |  |
| `recipient` | address |  |
| `` | address |  |
| `` | uint256 |  |

### isIncentiveParity

```solidity
function isIncentiveParity() external returns (bool)
```

### setIncentiveParity

```solidity
function setIncentiveParity(
    bool _isParity
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_isParity` | bool |  |

### isExemptAddress

```solidity
function isExemptAddress(
    address 
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### setExempt

```solidity
function setExempt(
    bool exempt
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `exempt` | bool |  |

### updateOracle

```solidity
function updateOracle() external returns (bool)
```

### setExemptAddress

```solidity
function setExemptAddress(
    address account,
    bool _isExempt
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `_isExempt` | bool |  |

### getBuyIncentive

```solidity
function getBuyIncentive(
    uint256 amount
) external returns (uint256, uint32 weight, struct Decimal.D256 initialDeviation, struct Decimal.D256 finalDeviation)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### getSellPenalty

```solidity
function getSellPenalty(
    uint256 amount
) external returns (uint256, struct Decimal.D256 initialDeviation, struct Decimal.D256 finalDeviation)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

