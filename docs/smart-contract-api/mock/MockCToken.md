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

# MockCToken

## Functions

### constructor

```solidity
function constructor(
    contract IERC20 _token,
    bool _isCEther
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | contract IERC20 |  |
| `_isCEther` | bool |  |

### setError

```solidity
function setError(
    bool _error
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_error` | bool |  |

### isCToken

```solidity
function isCToken() external returns (bool)
```

### underlying

```solidity
function underlying() external returns (address)
```

### mint

```solidity
function mint() external
```

### mint

```solidity
function mint(
    uint256 amount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

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

