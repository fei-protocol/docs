# IPCVDeposit

## Functions

### deposit

```solidity
function deposit() external
```

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### withdrawERC20

```solidity
function withdrawERC20(
    address token,
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

### withdrawETH

```solidity
function withdrawETH(
    address payable to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable |  |
| `amount` | uint256 |  |

## Events

### Deposit

```solidity
event Deposit(
    address _from,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_from` | address |  |
| `_amount` | uint256 |  |
### Withdrawal

```solidity
event Withdrawal(
    address _caller,
    address _to,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |
### WithdrawERC20

```solidity
event WithdrawERC20(
    address _caller,
    address _token,
    address _to,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_token` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |
### WithdrawETH

```solidity
event WithdrawETH(
    address _caller,
    address _to,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |

