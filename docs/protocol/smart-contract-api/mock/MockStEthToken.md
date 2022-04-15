# MockStEthToken

## Functions

### constructor

```solidity
function constructor() public
```

### submit

```solidity
function submit(
    address _referral
) external returns (uint256 amount_)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_referral` | address |  |

### mintAt

```solidity
function mintAt(
    address _dst
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_dst` | address |  |

### balanceOf

```solidity
function balanceOf(
    address _account
) public returns (uint256 amount_)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_account` | address |  |

### getSharesByPooledEth

```solidity
function getSharesByPooledEth(
    uint256 _ethAmount
) public returns (uint256 shares_)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_ethAmount` | uint256 |  |

### transfer

```solidity
function transfer(
    address dst,
    uint256 amount
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `dst` | address |  |
| `amount` | uint256 |  |

### transferFrom

```solidity
function transferFrom(
    address from,
    address to,
    uint256 amount
) public returns (bool)
```

See {IERC20-transferFrom}.

Emits an {Approval} event indicating the updated allowance. This is not
required by the EIP. See the note at the beginning of {ERC20}.

NOTE: Does not update the allowance if the current allowance
is the maximum `uint256`.

Requirements:

- `from` and `to` cannot be the zero address.
- `from` must have a balance of at least `amount`.
- the caller must have allowance for ``from``'s tokens of at least
`amount`.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

### _transfer

```solidity
function _transfer(
    address _sender,
    address _recipient,
    uint256 _amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_sender` | address |  |
| `_recipient` | address |  |
| `_amount` | uint256 |  |

### getPooledEthByShares

```solidity
function getPooledEthByShares(
    uint256 _sharesAmount
) public returns (uint256 eth_)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_sharesAmount` | uint256 |  |

### _mintShares

```solidity
function _mintShares(
    uint256 _sharesAmount,
    address _recipient
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_sharesAmount` | uint256 |  |
| `_recipient` | address |  |

### getTotalPooledEther

```solidity
function getTotalPooledEther() public returns (uint256 totalEther_)
```

### getTotalShares

```solidity
function getTotalShares() public returns (uint256 totalShares_)
```

### receive

```solidity
function receive() external
```

