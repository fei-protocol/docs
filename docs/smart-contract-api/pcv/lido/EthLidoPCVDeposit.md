# ILido

## Functions

### getTotalShares

```solidity
function getTotalShares() external returns (uint256)
```

### getTotalPooledEther

```solidity
function getTotalPooledEther() external returns (uint256)
```

### sharesOf

```solidity
function sharesOf(
    address _account
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_account` | address |  |

### getSharesByPooledEth

```solidity
function getSharesByPooledEth(
    uint256 _ethAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_ethAmount` | uint256 |  |

### getPooledEthByShares

```solidity
function getPooledEthByShares(
    uint256 _sharesAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_sharesAmount` | uint256 |  |

### getFee

```solidity
function getFee() external returns (uint256)
```

### increaseAllowance

```solidity
function increaseAllowance(
    address _spender,
    uint256 _addedValue
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_spender` | address |  |
| `_addedValue` | uint256 |  |

### decreaseAllowance

```solidity
function decreaseAllowance(
    address _spender,
    uint256 _subtractedValue
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_spender` | address |  |
| `_subtractedValue` | uint256 |  |

### submit

```solidity
function submit(
    address referral
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `referral` | address |  |

# IStableSwapSTETH

## Functions

### exchange

```solidity
function exchange(
    int128 i,
    int128 j,
    uint256 dx,
    uint256 min_dy
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `dx` | uint256 |  |
| `min_dy` | uint256 |  |

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

# EthLidoPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _steth,
    address _stableswap,
    uint256 _maximumSlippageBasisPoints
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_steth` | address |  |
| `_stableswap` | address |  |
| `_maximumSlippageBasisPoints` | uint256 |  |

### receive

```solidity
function receive() external
```

### deposit

```solidity
function deposit() external
```

deposit ETH held by the contract to get stETH.

everyone can call deposit(), it is not protected by PCVController
rights, because all ETH held by the contract is destined to be
changed to stETH anyway.

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountIn
) external
```

withdraw stETH held by the contract to get ETH.
This function with swap stETH held by the contract to ETH, and transfer
it to the target address. Note: the withdraw could
revert if the Curve pool is imbalanced with too many stETH and the amount
of ETH out of the trade is less than the tolerated slippage.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the destination of the withdrawn ETH |
| `amountIn` | uint256 | the number of stETH to withdraw. |

### balance

```solidity
function balance() public returns (uint256 amount)
```

Returns the current balance of stETH held by the contract

### setMaximumSlippage

```solidity
function setMaximumSlippage(
    uint256 _maximumSlippageBasisPoints
) external
```

Sets the maximum slippage vs 1:1 price accepted during withdraw.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_maximumSlippageBasisPoints` | uint256 | the maximum slippage expressed in basis points (1/10_000) |

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

## Events

### UpdateMaximumSlippage

```solidity
event UpdateMaximumSlippage(
    uint256 maximumSlippageBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `maximumSlippageBasisPoints` | uint256 |  |

