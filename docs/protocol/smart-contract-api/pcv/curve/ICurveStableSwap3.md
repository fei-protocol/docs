# ICurveStableSwap3

## Functions

### __init__

```solidity
function __init__(
    address _owner,
    address[3] _coins,
    address _pool_token,
    uint256 _A,
    uint256 _fee,
    uint256 _admin_fee
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_owner` | address |  |
| `_coins` | address[3] |  |
| `_pool_token` | address |  |
| `_A` | uint256 |  |
| `_fee` | uint256 |  |
| `_admin_fee` | uint256 |  |

### get_balances

```solidity
function get_balances() external returns (uint256[3])
```

### calc_token_amount

```solidity
function calc_token_amount(
    uint256[3] amounts,
    bool deposit
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[3] |  |
| `deposit` | bool |  |

### add_liquidity

```solidity
function add_liquidity(
    uint256[3] amounts,
    uint256 min_mint_amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[3] |  |
| `min_mint_amount` | uint256 |  |

### remove_liquidity

```solidity
function remove_liquidity(
    uint256 _amount,
    uint256[3] min_amounts
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |
| `min_amounts` | uint256[3] |  |

### remove_liquidity_imbalance

```solidity
function remove_liquidity_imbalance(
    uint256[3] amounts,
    uint256 max_burn_amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[3] |  |
| `max_burn_amount` | uint256 |  |

