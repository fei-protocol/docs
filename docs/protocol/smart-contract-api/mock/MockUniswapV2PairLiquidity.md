# MockUniswapV2PairLiquidity

## Functions

### constructor

```solidity
function constructor(
    address _token0,
    address _token1
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token0` | address |  |
| `_token1` | address |  |

### getReserves

```solidity
function getReserves() external returns (uint112, uint112, uint32)
```

### mint

```solidity
function mint(
    address to
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |

### mintAmount

```solidity
function mintAmount(
    address to,
    uint256 _liquidity
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `_liquidity` | uint256 |  |

### set

```solidity
function set(
    uint112 newReserve0,
    uint112 newReserve1,
    uint256 newLiquidity
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReserve0` | uint112 |  |
| `newReserve1` | uint112 |  |
| `newLiquidity` | uint256 |  |

### setReserves

```solidity
function setReserves(
    uint112 newReserve0,
    uint112 newReserve1
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReserve0` | uint112 |  |
| `newReserve1` | uint112 |  |

### faucet

```solidity
function faucet(
    address account,
    uint256 amount
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

### burnEth

```solidity
function burnEth(
    address to,
    struct Decimal.D256 ratio
) public returns (uint256 amountEth, uint256 amount1)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `ratio` | struct Decimal.D256 |  |

### withdrawFei

```solidity
function withdrawFei(
    address to,
    uint256 amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### burnToken

```solidity
function burnToken(
    address to,
    struct Decimal.D256 ratio
) public returns (uint256 amount0, uint256 amount1)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `ratio` | struct Decimal.D256 |  |

### swap

```solidity
function swap(
    uint256 amount0Out,
    uint256 amount1Out,
    address to,
    bytes 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount0Out` | uint256 |  |
| `amount1Out` | uint256 |  |
| `to` | address |  |
| `` | bytes |  |

### sync

```solidity
function sync() external
```

### totalSupply

```solidity
function totalSupply() public returns (uint256)
```

See {IERC20-totalSupply}.

### balanceOf

```solidity
function balanceOf(
    address account
) public returns (uint256)
```

See {IERC20-balanceOf}.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### transfer

```solidity
function transfer(
    address recipient,
    uint256 amount
) public returns (bool)
```

See {IERC20-transfer}.

Requirements:

- `recipient` cannot be the zero address.
- the caller must have a balance of at least `amount`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `recipient` | address |  |
| `amount` | uint256 |  |

### allowance

```solidity
function allowance(
    address owner,
    address spender
) public returns (uint256)
```

See {IERC20-allowance}.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |
| `spender` | address |  |

### approve

```solidity
function approve(
    address spender,
    uint256 amount
) public returns (bool)
```

See {IERC20-approve}.

Requirements:

- `spender` cannot be the zero address.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spender` | address |  |
| `amount` | uint256 |  |

### transferFrom

```solidity
function transferFrom(
    address sender,
    address recipient,
    uint256 amount
) public returns (bool)
```

See {IERC20-transferFrom}.

Emits an {Approval} event indicating the updated allowance. This is not
required by the EIP. See the note at the beginning of {ERC20};

Requirements:
- `sender` and `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.
- the caller must have allowance for `sender`'s tokens of at least
`amount`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address |  |
| `recipient` | address |  |
| `amount` | uint256 |  |

### increaseAllowance

```solidity
function increaseAllowance(
    address spender,
    uint256 addedValue
) public returns (bool)
```

Atomically increases the allowance granted to `spender` by the caller.

This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.

Emits an {Approval} event indicating the updated allowance.

Requirements:

- `spender` cannot be the zero address.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spender` | address |  |
| `addedValue` | uint256 |  |

### decreaseAllowance

```solidity
function decreaseAllowance(
    address spender,
    uint256 subtractedValue
) public returns (bool)
```

Atomically decreases the allowance granted to `spender` by the caller.

This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.

Emits an {Approval} event indicating the updated allowance.

Requirements:

- `spender` cannot be the zero address.
- `spender` must have allowance for the caller of at least
`subtractedValue`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spender` | address |  |
| `subtractedValue` | uint256 |  |

### _transfer

```solidity
function _transfer(
    address sender,
    address recipient,
    uint256 amount
) internal
```

Moves tokens `amount` from `sender` to `recipient`.

This is internal function is equivalent to {transfer}, and can be used to
e.g. implement automatic token fees, slashing mechanisms, etc.

Emits a {Transfer} event.

Requirements:

- `sender` cannot be the zero address.
- `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address |  |
| `recipient` | address |  |
| `amount` | uint256 |  |

### _mint

```solidity
function _mint(
    address account,
    uint256 amount
) internal
```

Creates `amount` tokens and assigns them to `account`, increasing
the total supply.

Emits a {Transfer} event with `from` set to the zero address.

Requirements

- `to` cannot be the zero address.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

### _burn

```solidity
function _burn(
    address account,
    uint256 amount
) internal
```

Destroys `amount` tokens from `account`, reducing the
total supply.

Emits a {Transfer} event with `to` set to the zero address.

Requirements

- `account` cannot be the zero address.
- `account` must have at least `amount` tokens.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

### _approve

```solidity
function _approve(
    address owner,
    address spender,
    uint256 amount
) internal
```

Sets `amount` as the allowance of `spender` over the `owner`s tokens.

This is internal function is equivalent to `approve`, and can be used to
e.g. set automatic allowances for certain subsystems, etc.

Emits an {Approval} event.

Requirements:

- `owner` cannot be the zero address.
- `spender` cannot be the zero address.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |
| `spender` | address |  |
| `amount` | uint256 |  |

### _burnFrom

```solidity
function _burnFrom(
    address account,
    uint256 amount
) internal
```

Destroys `amount` tokens from `account`.`amount` is then deducted
from the caller's allowance.

See {_burn} and {_approve}.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

