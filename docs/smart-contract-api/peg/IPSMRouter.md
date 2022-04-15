# IPSMRouter

## Functions

### psm

```solidity
function psm() external returns (contract IPegStabilityModule)
```

reference to the PegStabilityModule that this router interacts with

### fei

```solidity
function fei() external returns (contract IFei)
```

reference to the FEI contract used.

### getMintAmountOut

```solidity
function getMintAmountOut(
    uint256 amountIn
) external returns (uint256 amountFeiOut)
```

calculate the amount of FEI out for a given `amountIn` of underlying

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountIn` | uint256 |  |

### getRedeemAmountOut

```solidity
function getRedeemAmountOut(
    uint256 amountFeiIn
) external returns (uint256 amountOut)
```

calculate the amount of underlying out for a given `amountFeiIn` of FEI

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountFeiIn` | uint256 |  |

### getMaxMintAmountOut

```solidity
function getMaxMintAmountOut() external returns (uint256)
```

the maximum mint amount out

### getMaxRedeemAmountOut

```solidity
function getMaxRedeemAmountOut() external returns (uint256)
```

the maximum redeem amount out

### mint

```solidity
function mint(
    address _to,
    uint256 _minAmountOut,
    uint256 ethAmountIn
) external returns (uint256)
```

Mints fei to the given address, with a minimum amount required

This wraps ETH and then calls into the PSM to mint the fei. We return the amount of fei minted.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address | The address to mint fei to |
| `_minAmountOut` | uint256 | The minimum amount of fei to mint |
| `ethAmountIn` | uint256 |  |

### redeem

```solidity
function redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut
) external returns (uint256 amountOut)
```

Redeems fei for ETH
First pull user FEI into this contract
Then call redeem on the PSM to turn the FEI into weth
Withdraw all weth to eth in the router
Send the eth to the specified recipient

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to receive the eth |
| `amountFeiIn` | uint256 | the amount of FEI to redeem |
| `minAmountOut` | uint256 | the minimum amount of weth to receive |

