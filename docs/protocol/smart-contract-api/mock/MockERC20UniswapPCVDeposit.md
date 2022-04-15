# MockERC20UniswapPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    contract IERC20 _token
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | contract IERC20 |  |

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
) public
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

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable |  |
| `amountOut` | uint256 |  |

### balance

```solidity
function balance() public returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

gets the resistant token balance and protocol owned fei of this deposit

