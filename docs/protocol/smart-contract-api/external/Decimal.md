# Decimal

## Functions

### zero

```solidity
function zero() internal returns (struct Decimal.D256)
```

### one

```solidity
function one() internal returns (struct Decimal.D256)
```

### from

```solidity
function from(
    uint256 a
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |

### ratio

```solidity
function ratio(
    uint256 a,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### add

```solidity
function add(
    struct Decimal.D256 self,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |

### sub

```solidity
function sub(
    struct Decimal.D256 self,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |

### sub

```solidity
function sub(
    struct Decimal.D256 self,
    uint256 b,
    string reason
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |
| `reason` | string |  |

### mul

```solidity
function mul(
    struct Decimal.D256 self,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |

### div

```solidity
function div(
    struct Decimal.D256 self,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |

### pow

```solidity
function pow(
    struct Decimal.D256 self,
    uint256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | uint256 |  |

### add

```solidity
function add(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### sub

```solidity
function sub(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### sub

```solidity
function sub(
    struct Decimal.D256 self,
    struct Decimal.D256 b,
    string reason
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |
| `reason` | string |  |

### mul

```solidity
function mul(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### div

```solidity
function div(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (struct Decimal.D256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### equals

```solidity
function equals(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### greaterThan

```solidity
function greaterThan(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### lessThan

```solidity
function lessThan(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### greaterThanOrEqualTo

```solidity
function greaterThanOrEqualTo(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### lessThanOrEqualTo

```solidity
function lessThanOrEqualTo(
    struct Decimal.D256 self,
    struct Decimal.D256 b
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

### isZero

```solidity
function isZero(
    struct Decimal.D256 self
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |

### asUint256

```solidity
function asUint256(
    struct Decimal.D256 self
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct Decimal.D256 |  |

### getPartial

```solidity
function getPartial(
    uint256 target,
    uint256 numerator,
    uint256 denominator
) private returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | uint256 |  |
| `numerator` | uint256 |  |
| `denominator` | uint256 |  |

### compareTo

```solidity
function compareTo(
    struct Decimal.D256 a,
    struct Decimal.D256 b
) private returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | struct Decimal.D256 |  |
| `b` | struct Decimal.D256 |  |

