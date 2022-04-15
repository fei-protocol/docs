# ExtendedMath

This contract contains math related utilities that allows to
compute fixed-point exponentiation or perform scaled arithmetic operations

## Functions

### powf

```solidity
function powf(
    int128 _x,
    int128 _y
) internal returns (int128 _xExpy)
```

Computes x**y where both `x` and `y` are fixed-point numbers

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_x` | int128 |  |
| `_y` | int128 |  |

### mulPow

```solidity
function mulPow(
    uint256 value,
    uint256 base,
    uint256 exponent,
    uint256 decimal
) internal returns (uint256)
```

Computes `value * base ** exponent` where all of the parameters
are fixed point numbers scaled with `decimal`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | uint256 |  |
| `base` | uint256 |  |
| `exponent` | uint256 |  |
| `decimal` | uint256 |  |

### scaledMul

```solidity
function scaledMul(
    uint256 a,
    uint256 b,
    uint256 _decimals
) internal returns (uint256)
```

Multiplies `a` and `b` scaling the result down by `_decimals`
`scaledMul(a, b, 18)` with an initial scale of 18 decimals for `a` and `b`
would keep the result to 18 decimals
The result of the computation is floored

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |
| `_decimals` | uint256 |  |

### scaledMul

```solidity
function scaledMul(
    uint256 a,
    uint256 b
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### scaledDiv

```solidity
function scaledDiv(
    uint256 a,
    uint256 b,
    uint256 _decimals
) internal returns (uint256)
```

Divides `a` and `b` scaling the result up by `_decimals`
`scaledDiv(a, b, 18)` with an initial scale of 18 decimals for `a` and `b`
would keep the result to 18 decimals
The result of the computation is floored

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |
| `_decimals` | uint256 |  |

### scaledDiv

```solidity
function scaledDiv(
    uint256 a,
    uint256 b
) internal returns (uint256)
```

See `scaledDiv(uint256 a, uint256 b, uint256 _decimals)`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### scaledPow

```solidity
function scaledPow(
    uint256 base,
    uint256 exp,
    uint256 _decimals
) internal returns (uint256)
```

Computes a**b where a is a scaled fixed-point number and b is an integer
This keeps a scale of `_decimals` for `a`
The computation is performed in O(log n)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `base` | uint256 |  |
| `exp` | uint256 |  |
| `_decimals` | uint256 |  |

### scaledPow

```solidity
function scaledPow(
    uint256 base,
    uint256 exp
) internal returns (uint256)
```

See `scaledPow(uint256 base, uint256 exp, uint256 _decimals)`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `base` | uint256 |  |
| `exp` | uint256 |  |

