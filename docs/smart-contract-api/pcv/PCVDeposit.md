# PCVDeposit

## Functions

### withdrawERC20

```solidity
function withdrawERC20(
    address token,
    address to,
    uint256 amount
) public
```

withdraw ERC20 from the contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | address of the ERC20 to send |
| `to` | address | address destination of the ERC20 |
| `amount` | uint256 | quantity of ERC20 to send |

### _withdrawERC20

```solidity
function _withdrawERC20(
    address token,
    address to,
    uint256 amount
) internal
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
    uint256 amountOut
) external
```

withdraw ETH from the contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable | address to send ETH |
| `amountOut` | uint256 | amount of ETH to send |

### balance

```solidity
function balance() public returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

gets the resistant token balance and protocol owned fei of this deposit

