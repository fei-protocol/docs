# IIdleToken

## Functions

### redeemIdleToken

```solidity
function redeemIdleToken(
    uint256 _amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |

### token

```solidity
function token() external returns (contract IERC20)
```

### transfer

```solidity
function transfer(
    address account,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

# IdlePCVRedeemer

## Functions

### constructor

```solidity
function constructor(
    address _target,
    contract IIdleToken _idleToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_target` | address |  |
| `_idleToken` | contract IIdleToken |  |

### redeem

```solidity
function redeem(
    uint256 amount
) external
```

redeem Idle Token shares

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | asset amount to redeem |

### sweep

```solidity
function sweep(
    contract IERC20 token,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | contract IERC20 |  |
| `amount` | uint256 |  |

