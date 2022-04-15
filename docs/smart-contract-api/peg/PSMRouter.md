# PSMRouter

the PSM router is an ungoverned, non custodial contract that allows user to seamlessly wrap and unwrap their WETH
for trading against the PegStabilityModule.

## Functions

### constructor

```solidity
function constructor(
    contract IPegStabilityModule _psm,
    contract IFei _fei
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_psm` | contract IPegStabilityModule |  |
| `_fei` | contract IFei |  |

### getMintAmountOut

```solidity
function getMintAmountOut(
    uint256 amountIn
) public returns (uint256 amountFeiOut)
```

view only pass through function to get amount of FEI out with given amount of ETH in

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountIn` | uint256 |  |

### getRedeemAmountOut

```solidity
function getRedeemAmountOut(
    uint256 amountFeiIn
) public returns (uint256 amountTokenOut)
```

view only pass through function to get amount of ETH out with given amount of FEI in

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
    address to,
    uint256 minAmountOut,
    uint256 ethAmountIn
) external returns (uint256)
```

Mints fei to the given address, with a minimum amount required

This wraps ETH and then calls into the PSM to mint the fei. We return the amount of fei minted.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | The address to mint fei to |
| `minAmountOut` | uint256 | The minimum amount of fei to mint |
| `ethAmountIn` | uint256 |  |

### mint

```solidity
function mint(
    address to,
    uint256 minAmountOut,
    uint256 deadline,
    uint256 ethAmountIn
) external returns (uint256)
```

Mints fei to the given address, with a minimum amount required and a deadline

This wraps ETH and then calls into the PSM to mint the fei. We return the amount of fei minted.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | The address to mint fei to |
| `minAmountOut` | uint256 | The minimum amount of fei to mint |
| `deadline` | uint256 | The deadline for this order to be filled |
| `ethAmountIn` | uint256 |  |

### redeem

```solidity
function redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut
) external returns (uint256)
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

### redeem

```solidity
function redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut,
    uint256 deadline
) external returns (uint256)
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
| `deadline` | uint256 | The deadline for this order to be filled |

### fallback

```solidity
function fallback() external
```

function to receive ether from the weth contract when the redeem function is called
will not accept eth unless there is an active redemption.

### _mint

```solidity
function _mint(
    address _to,
    uint256 _minAmountOut,
    uint256 _ethAmountIn
) internal returns (uint256)
```

helper function to wrap eth and handle mint call to PSM

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_minAmountOut` | uint256 |  |
| `_ethAmountIn` | uint256 |  |

### _redeem

```solidity
function _redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut
) internal returns (uint256 amountOut)
```

helper function to deposit user FEI, unwrap weth and send eth to the user
the PSM router receives the weth, then sends it to the specified recipient.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountFeiIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

