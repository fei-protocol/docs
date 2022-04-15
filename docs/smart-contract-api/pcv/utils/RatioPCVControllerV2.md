# RatioPCVControllerV2

v2 includes methods for transferring approved ERC20 balances and wrapping and unwrapping WETH in transit

## Functions

### constructor

```solidity
function constructor(
    address _core
) public
```

PCV controller constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |

### receive

```solidity
function receive() external
```

### withdrawRatio

```solidity
function withdrawRatio(
    contract IPCVDeposit pcvDeposit,
    address to,
    uint256 basisPoints
) public
```

withdraw tokens from the input PCV deposit in basis points terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `to` | address | the address to send PCV to |
| `basisPoints` | uint256 | ratio of PCV to withdraw in basis points terms (1/10000) |

### withdrawRatioUnwrapWETH

```solidity
function withdrawRatioUnwrapWETH(
    contract IPCVDeposit pcvDeposit,
    address payable to,
    uint256 basisPoints
) public
```

withdraw WETH from the input PCV deposit in basis points terms and send as ETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `to` | address payable | the address to send PCV to |
| `basisPoints` | uint256 | ratio of PCV to withdraw in basis points terms (1/10000) |

### withdrawRatioWrapETH

```solidity
function withdrawRatioWrapETH(
    contract IPCVDeposit pcvDeposit,
    address to,
    uint256 basisPoints
) public
```

withdraw ETH from the input PCV deposit in basis points terms and send as WETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `to` | address | the address to send PCV to |
| `basisPoints` | uint256 | ratio of PCV to withdraw in basis points terms (1/10000) |

### withdrawUnwrapWETH

```solidity
function withdrawUnwrapWETH(
    contract IPCVDeposit pcvDeposit,
    address payable to,
    uint256 amount
) public
```

withdraw WETH from the input PCV deposit and send as ETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `to` | address payable | the address to send PCV to |
| `amount` | uint256 | raw amount of PCV to withdraw |

### withdrawWrapETH

```solidity
function withdrawWrapETH(
    contract IPCVDeposit pcvDeposit,
    address to,
    uint256 amount
) public
```

withdraw ETH from the input PCV deposit and send as WETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `to` | address | the address to send PCV to |
| `amount` | uint256 | raw amount of PCV to withdraw |

### withdrawRatioERC20

```solidity
function withdrawRatioERC20(
    contract IPCVDeposit pcvDeposit,
    address token,
    address to,
    uint256 basisPoints
) public
```

withdraw a specific ERC20 token from the input PCV deposit in basis points terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit | PCV deposit to withdraw from |
| `token` | address | the ERC20 token to withdraw |
| `to` | address | the address to send tokens to |
| `basisPoints` | uint256 | ratio of PCV to withdraw in basis points terms (1/10000) |

### transferFromRatio

```solidity
function transferFromRatio(
    address from,
    contract IERC20 token,
    address to,
    uint256 basisPoints
) public
```

transfer a specific ERC20 token from the input PCV deposit in basis points terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address | address to withdraw from |
| `token` | contract IERC20 | the ERC20 token to withdraw |
| `to` | address | the address to send tokens to |
| `basisPoints` | uint256 | ratio of PCV to withdraw in basis points terms (1/10000) |

### transferFrom

```solidity
function transferFrom(
    address from,
    contract IERC20 token,
    address to,
    uint256 amount
) public
```

transfer a specific ERC20 token from the input PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address | address to withdraw from |
| `token` | contract IERC20 | the ERC20 token to withdraw |
| `to` | address | the address to send tokens to |
| `amount` | uint256 | of tokens to transfer |

### transferETHAsWETH

```solidity
function transferETHAsWETH(
    address to
) public
```

send ETH as WETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | destination |

### transferWETHAsETH

```solidity
function transferWETHAsETH(
    address payable to
) public
```

send WETH as ETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable | destination |

### transferERC20

```solidity
function transferERC20(
    contract IERC20 token,
    address to
) public
```

send away ERC20 held on this contract, to avoid having any stuck.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | contract IERC20 | sent |
| `to` | address | destination |

### _withdrawRatio

```solidity
function _withdrawRatio(
    contract IPCVDeposit pcvDeposit,
    address to,
    uint256 basisPoints
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | contract IPCVDeposit |  |
| `to` | address |  |
| `basisPoints` | uint256 |  |

### _transferETHAsWETH

```solidity
function _transferETHAsWETH(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _transferWETHAsETH

```solidity
function _transferWETHAsETH(
    address payable to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable |  |
| `amount` | uint256 |  |

