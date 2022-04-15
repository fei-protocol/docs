# WethPCVDeposit

## Functions

### receive

```solidity
function receive() external
```

Empty callback on ETH reception

### wrapETH

```solidity
function wrapETH() public
```

Wraps all ETH held by the contract to WETH
Anyone can call it

### deposit

```solidity
function deposit() external
```

deposit

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

