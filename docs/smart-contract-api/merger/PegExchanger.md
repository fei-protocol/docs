# PegExchanger

## Functions

### constructor

```solidity
function constructor(
    address tribeRariDAO
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tribeRariDAO` | address |  |

### exchange

```solidity
function exchange(
    uint256 amount
) public
```

call to exchange held RGT with TRIBE

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | the amount to exchange |

### isExpired

```solidity
function isExpired() public returns (bool)
```

tells whether or not the contract is expired.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | boolean true if we have passed the expiration block, else false |

### setExpirationTimestamp

```solidity
function setExpirationTimestamp(
    uint256 timestamp
) public
```

the expiry must be set to at least MIN_EXPIRY_WINDOW in the future.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `timestamp` | uint256 | the block timestamp for expiration |

## Events

### Exchange

```solidity
event Exchange(
    address from,
    uint256 amountIn,
    uint256 amountOut
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `amountIn` | uint256 |  |
| `amountOut` | uint256 |  |
### SetExpiry

```solidity
event SetExpiry(
    address caller,
    uint256 expiry
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |
| `expiry` | uint256 |  |

