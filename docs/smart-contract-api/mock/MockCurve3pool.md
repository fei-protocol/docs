# MockCurve3pool

## Functions

### constructor

```solidity
function constructor(
    address _dai,
    address _usdc,
    address _usdt
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_dai` | address |  |
| `_usdc` | address |  |
| `_usdt` | address |  |

### set_slippage

```solidity
function set_slippage(
    uint256 _slippage
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_slippage` | uint256 |  |

### add_liquidity

```solidity
function add_liquidity(
    uint256[3] amounts,
    uint256 min_mint_amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amounts` | uint256[3] |  |
| `min_mint_amount` | uint256 |  |

### balances

```solidity
function balances(
    uint256 i
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### remove_liquidity

```solidity
function remove_liquidity(
    uint256 _amount,
    uint256[3] min_amounts
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |
| `min_amounts` | uint256[3] |  |

### remove_liquidity_one_coin

```solidity
function remove_liquidity_one_coin(
    uint256 _amount,
    int128 i,
    uint256 min_amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |
| `i` | int128 |  |
| `min_amount` | uint256 |  |

### get_virtual_price

```solidity
function get_virtual_price() public returns (uint256)
```

### calc_withdraw_one_coin

```solidity
function calc_withdraw_one_coin(
    uint256 _token_amount,
    int128 i
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token_amount` | uint256 |  |
| `i` | int128 |  |

