# CToken

## Functions

### redeemUnderlying

```solidity
function redeemUnderlying(
    uint256 redeemAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `redeemAmount` | uint256 |  |

### exchangeRateStored

```solidity
function exchangeRateStored() external returns (uint256)
```

### balanceOf

```solidity
function balanceOf(
    address account
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### isCToken

```solidity
function isCToken() external returns (bool)
```

### isCEther

```solidity
function isCEther() external returns (bool)
```

# CompoundPCVDepositBase

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _cToken
) internal
```

Compound PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_cToken` | address | Compound cToken to deposit |

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountUnderlying
) external
```

withdraw tokens from the PCV allocation

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send PCV to |
| `amountUnderlying` | uint256 | of tokens withdrawn |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit excluding the FEI

returns stale values from Compound if the market hasn't been updated

### _transferUnderlying

```solidity
function _transferUnderlying(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

