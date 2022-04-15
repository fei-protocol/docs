# IKashiPair

## Functions

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external returns (bytes32)
```

### accrue

```solidity
function accrue() external
```

### accrueInfo

```solidity
function accrueInfo() external returns (uint64 interestPerSecond, uint64 lastBlockAccrued, uint128 feesEarnedFraction)
```

### addAsset

```solidity
function addAsset(
    address to,
    bool skim,
    uint256 share
) external returns (uint256 fraction)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `skim` | bool |  |
| `share` | uint256 |  |

### addCollateral

```solidity
function addCollateral(
    address to,
    bool skim,
    uint256 share
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `skim` | bool |  |
| `share` | uint256 |  |

### allowance

```solidity
function allowance(
    address ,
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | address |  |

### approve

```solidity
function approve(
    address spender,
    uint256 amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spender` | address |  |
| `amount` | uint256 |  |

### asset

```solidity
function asset() external returns (contract IERC20)
```

### balanceOf

```solidity
function balanceOf(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### borrow

```solidity
function borrow(
    address to,
    uint256 amount
) external returns (uint256 part, uint256 share)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### claimOwnership

```solidity
function claimOwnership() external
```

### collateral

```solidity
function collateral() external returns (contract IERC20)
```

### cook

```solidity
function cook(
    uint8[] actions,
    uint256[] values,
    bytes[] datas
) external returns (uint256 value1, uint256 value2)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `actions` | uint8[] |  |
| `values` | uint256[] |  |
| `datas` | bytes[] |  |

### decimals

```solidity
function decimals() external returns (uint8)
```

### exchangeRate

```solidity
function exchangeRate() external returns (uint256)
```

### feeTo

```solidity
function feeTo() external returns (address)
```

### init

```solidity
function init(
    bytes data
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `data` | bytes |  |

### isSolvent

```solidity
function isSolvent(
    address user,
    bool open
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `open` | bool |  |

### masterContract

```solidity
function masterContract() external returns (address)
```

### name

```solidity
function name() external returns (string)
```

### nonces

```solidity
function nonces(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### oracleData

```solidity
function oracleData() external returns (bytes)
```

### owner

```solidity
function owner() external returns (address)
```

### pendingOwner

```solidity
function pendingOwner() external returns (address)
```

### permit

```solidity
function permit(
    address owner_,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner_` | address |  |
| `spender` | address |  |
| `value` | uint256 |  |
| `deadline` | uint256 |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

### removeAsset

```solidity
function removeAsset(
    address to,
    uint256 fraction
) external returns (uint256 share)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `fraction` | uint256 |  |

### removeCollateral

```solidity
function removeCollateral(
    address to,
    uint256 share
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `share` | uint256 |  |

### repay

```solidity
function repay(
    address to,
    bool skim,
    uint256 part
) external returns (uint256 amount)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `skim` | bool |  |
| `part` | uint256 |  |

### setFeeTo

```solidity
function setFeeTo(
    address newFeeTo
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFeeTo` | address |  |

### symbol

```solidity
function symbol() external returns (string)
```

### totalAsset

```solidity
function totalAsset() external returns (uint128 elastic, uint128 base)
```

### totalBorrow

```solidity
function totalBorrow() external returns (uint128 elastic, uint128 base)
```

### totalCollateralShare

```solidity
function totalCollateralShare() external returns (uint256)
```

### totalSupply

```solidity
function totalSupply() external returns (uint256)
```

### transfer

```solidity
function transfer(
    address to,
    uint256 amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### transferFrom

```solidity
function transferFrom(
    address from,
    address to,
    uint256 amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

### transferOwnership

```solidity
function transferOwnership(
    address newOwner,
    bool direct,
    bool renounce
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOwner` | address |  |
| `direct` | bool |  |
| `renounce` | bool |  |

### updateExchangeRate

```solidity
function updateExchangeRate() external returns (bool updated, uint256 rate)
```

### userBorrowPart

```solidity
function userBorrowPart(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### userCollateralShare

```solidity
function userCollateralShare(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### withdrawFees

```solidity
function withdrawFees() external
```

## Events

### Approval

```solidity
event Approval(
    address _owner,
    address _spender,
    uint256 _value
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_owner` | address |  |
| `_spender` | address |  |
| `_value` | uint256 |  |
### LogAccrue

```solidity
event LogAccrue(
    uint256 accruedAmount,
    uint256 feeFraction,
    uint64 rate,
    uint256 utilization
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `accruedAmount` | uint256 |  |
| `feeFraction` | uint256 |  |
| `rate` | uint64 |  |
| `utilization` | uint256 |  |
### LogAddAsset

```solidity
event LogAddAsset(
    address from,
    address to,
    uint256 share,
    uint256 fraction
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `share` | uint256 |  |
| `fraction` | uint256 |  |
### LogAddCollateral

```solidity
event LogAddCollateral(
    address from,
    address to,
    uint256 share
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `share` | uint256 |  |
### LogBorrow

```solidity
event LogBorrow(
    address from,
    address to,
    uint256 amount,
    uint256 part
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |
| `part` | uint256 |  |
### LogExchangeRate

```solidity
event LogExchangeRate(
    uint256 rate
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `rate` | uint256 |  |
### LogFeeTo

```solidity
event LogFeeTo(
    address newFeeTo
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFeeTo` | address |  |
### LogRemoveAsset

```solidity
event LogRemoveAsset(
    address from,
    address to,
    uint256 share,
    uint256 fraction
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `share` | uint256 |  |
| `fraction` | uint256 |  |
### LogRemoveCollateral

```solidity
event LogRemoveCollateral(
    address from,
    address to,
    uint256 share
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `share` | uint256 |  |
### LogRepay

```solidity
event LogRepay(
    address from,
    address to,
    uint256 amount,
    uint256 part
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |
| `part` | uint256 |  |
### LogWithdrawFees

```solidity
event LogWithdrawFees(
    address feeTo,
    uint256 feesEarnedFraction
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `feeTo` | address |  |
| `feesEarnedFraction` | uint256 |  |
### OwnershipTransferred

```solidity
event OwnershipTransferred(
    address previousOwner,
    address newOwner
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `previousOwner` | address |  |
| `newOwner` | address |  |
### Transfer

```solidity
event Transfer(
    address _from,
    address _to,
    uint256 _value
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_from` | address |  |
| `_to` | address |  |
| `_value` | uint256 |  |

