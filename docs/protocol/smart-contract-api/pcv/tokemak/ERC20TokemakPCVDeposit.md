# ITokemakERC20Pool

## Functions

### deposit

```solidity
function deposit(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 requestedAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `requestedAmount` | uint256 |  |

# ERC20TokemakPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _pool,
    address _rewards
) public
```

Tokemak ERC20 PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_pool` | address | Tokemak pool to deposit in |
| `_rewards` | address | Tokemak rewards contract |

### deposit

```solidity
function deposit() external
```

deposit ERC-20 tokens to Tokemak

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

