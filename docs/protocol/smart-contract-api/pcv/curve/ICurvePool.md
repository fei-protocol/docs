# ICurvePool

## Functions

### coins

```solidity
function coins(
    uint256 arg0
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `arg0` | uint256 |  |

### balances

```solidity
function balances(
    uint256 arg0
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `arg0` | uint256 |  |

### fee

```solidity
function fee() external returns (uint256)
```

### admin_fee

```solidity
function admin_fee() external returns (uint256)
```

### owner

```solidity
function owner() external returns (address)
```

### lp_token

```solidity
function lp_token() external returns (address)
```

### initial_A

```solidity
function initial_A() external returns (uint256)
```

### future_A

```solidity
function future_A() external returns (uint256)
```

### initial_A_time

```solidity
function initial_A_time() external returns (uint256)
```

### future_A_time

```solidity
function future_A_time() external returns (uint256)
```

### admin_actions_deadline

```solidity
function admin_actions_deadline() external returns (uint256)
```

### transfer_ownership_deadline

```solidity
function transfer_ownership_deadline() external returns (uint256)
```

### future_fee

```solidity
function future_fee() external returns (uint256)
```

### future_admin_fee

```solidity
function future_admin_fee() external returns (uint256)
```

### future_owner

```solidity
function future_owner() external returns (address)
```

### decimals

```solidity
function decimals() external returns (uint256)
```

### transfer

```solidity
function transfer(
    address _to,
    uint256 _value
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_value` | uint256 |  |

### transferFrom

```solidity
function transferFrom(
    address _from,
    address _to,
    uint256 _value
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_from` | address |  |
| `_to` | address |  |
| `_value` | uint256 |  |

### approve

```solidity
function approve(
    address _spender,
    uint256 _value
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_spender` | address |  |
| `_value` | uint256 |  |

### totalSupply

```solidity
function totalSupply() external returns (uint256)
```

### mint

```solidity
function mint(
    address _to,
    uint256 _value
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_value` | uint256 |  |

### burnFrom

```solidity
function burnFrom(
    address _to,
    uint256 _value
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_value` | uint256 |  |

### balanceOf

```solidity
function balanceOf(
    address _owner
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_owner` | address |  |

### A

```solidity
function A() external returns (uint256)
```

### get_virtual_price

```solidity
function get_virtual_price() external returns (uint256)
```

### get_dy

```solidity
function get_dy(
    int128 i,
    int128 j,
    uint256 dx
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `dx` | uint256 |  |

### get_dy_underlying

```solidity
function get_dy_underlying(
    int128 i,
    int128 j,
    uint256 dx
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `dx` | uint256 |  |

### exchange

```solidity
function exchange(
    int128 i,
    int128 j,
    uint256 dx,
    uint256 min_dy
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `dx` | uint256 |  |
| `min_dy` | uint256 |  |

### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(
    uint256 _token_amount,
    int128 i
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token_amount` | uint256 |  |
| `i` | int128 |  |

### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(
    uint256 _token_amount,
    int128 i,
    uint256 min_amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token_amount` | uint256 |  |
| `i` | int128 |  |
| `min_amount` | uint256 |  |

### ramp_A

```solidity
function ramp_A(
    uint256 _future_A,
    uint256 _future_time
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_future_A` | uint256 |  |
| `_future_time` | uint256 |  |

### stop_ramp_A

```solidity
function stop_ramp_A() external
```

### commit_new_fee

```solidity
function commit_new_fee(
    uint256 new_fee,
    uint256 new_admin_fee
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `new_fee` | uint256 |  |
| `new_admin_fee` | uint256 |  |

### apply_new_fee

```solidity
function apply_new_fee() external
```

### commit_transfer_ownership

```solidity
function commit_transfer_ownership(
    address _owner
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_owner` | address |  |

### apply_transfer_ownership

```solidity
function apply_transfer_ownership() external
```

### revert_transfer_ownership

```solidity
function revert_transfer_ownership() external
```

### admin_balances

```solidity
function admin_balances(
    uint256 i
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### withdraw_admin_fees

```solidity
function withdraw_admin_fees() external
```

### donate_admin_fees

```solidity
function donate_admin_fees() external
```

### kill_me

```solidity
function kill_me() external
```

### unkill_me

```solidity
function unkill_me() external
```

