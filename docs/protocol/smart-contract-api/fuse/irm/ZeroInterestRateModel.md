# ZeroInterestRateModel

## Functions

### getBorrowRate

```solidity
function getBorrowRate(
    uint256 ,
    uint256 ,
    uint256 
) external returns (uint256)
```

Calculates the current borrow interest rate per block

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |
| `` | uint256 |  |
| `` | uint256 |  |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The borrow rate per block (as a percentage, and scaled by 1e18) |

### getSupplyRate

```solidity
function getSupplyRate(
    uint256 ,
    uint256 ,
    uint256 ,
    uint256 
) external returns (uint256)
```

Calculates the current supply interest rate per block

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |
| `` | uint256 |  |
| `` | uint256 |  |
| `` | uint256 |  |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The supply rate per block (as a percentage, and scaled by 1e18) |

