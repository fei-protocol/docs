# UintArrayOps

## Functions

### sum

```solidity
function sum(
    uint256[] array
) internal returns (uint256 _sum)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `array` | uint256[] |  |

### signedDifference

```solidity
function signedDifference(
    uint256[] a,
    uint256[] b
) internal returns (int256[] _difference)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256[] |  |
| `b` | uint256[] |  |

### positiveDifference

```solidity
function positiveDifference(
    uint256[] a,
    uint256[] b
) internal returns (uint256[] _positiveDifference)
```

given two int arrays a & b, returns an array c such that c[i] = a[i] - b[i], with negative values truncated to 0

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256[] |  |
| `b` | uint256[] |  |

