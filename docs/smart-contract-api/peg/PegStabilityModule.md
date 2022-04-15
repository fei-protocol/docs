# PegStabilityModule

## Functions

### constructor

```solidity
function constructor(
    struct PegStabilityModule.OracleParams params,
    uint256 _mintFeeBasisPoints,
    uint256 _redeemFeeBasisPoints,
    uint256 _reservesThreshold,
    uint256 _feiLimitPerSecond,
    uint256 _mintingBufferCap,
    contract IERC20 _underlyingToken,
    contract IPCVDeposit _surplusTarget
) public
```

constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `params` | struct PegStabilityModule.OracleParams | PSM constructor parameter struct |
| `_mintFeeBasisPoints` | uint256 |  |
| `_redeemFeeBasisPoints` | uint256 |  |
| `_reservesThreshold` | uint256 |  |
| `_feiLimitPerSecond` | uint256 |  |
| `_mintingBufferCap` | uint256 |  |
| `_underlyingToken` | contract IERC20 |  |
| `_surplusTarget` | contract IPCVDeposit |  |

### pauseRedeem

```solidity
function pauseRedeem() external
```

set secondary pausable methods to paused

### unpauseRedeem

```solidity
function unpauseRedeem() external
```

set secondary pausable methods to unpaused

### pauseMint

```solidity
function pauseMint() external
```

set secondary pausable methods to paused

### unpauseMint

```solidity
function unpauseMint() external
```

set secondary pausable methods to unpaused

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amount
) external
```

withdraw assets from PSM to an external address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### setMintFee

```solidity
function setMintFee(
    uint256 newMintFeeBasisPoints
) external
```

set the mint fee vs oracle price in basis point terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMintFeeBasisPoints` | uint256 |  |

### setRedeemFee

```solidity
function setRedeemFee(
    uint256 newRedeemFeeBasisPoints
) external
```

set the redemption fee vs oracle price in basis point terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newRedeemFeeBasisPoints` | uint256 |  |

### setReservesThreshold

```solidity
function setReservesThreshold(
    uint256 newReservesThreshold
) external
```

set the ideal amount of reserves for the contract to hold for redemptions

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReservesThreshold` | uint256 |  |

### setSurplusTarget

```solidity
function setSurplusTarget(
    contract IPCVDeposit newTarget
) external
```

set the target for sending surplus reserves

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTarget` | contract IPCVDeposit |  |

### _setMintFee

```solidity
function _setMintFee(
    uint256 newMintFeeBasisPoints
) internal
```

set the mint fee vs oracle price in basis point terms

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMintFeeBasisPoints` | uint256 |  |

### _setRedeemFee

```solidity
function _setRedeemFee(
    uint256 newRedeemFeeBasisPoints
) internal
```

internal helper function to set the redemption fee

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newRedeemFeeBasisPoints` | uint256 |  |

### _setReservesThreshold

```solidity
function _setReservesThreshold(
    uint256 newReservesThreshold
) internal
```

helper function to set reserves threshold

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newReservesThreshold` | uint256 |  |

### _setSurplusTarget

```solidity
function _setSurplusTarget(
    contract IPCVDeposit newSurplusTarget
) internal
```

helper function to set the surplus target

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newSurplusTarget` | contract IPCVDeposit |  |

### allocateSurplus

```solidity
function allocateSurplus() external
```

send any surplus reserves to the PCV allocation

### deposit

```solidity
function deposit() external
```

function to receive ERC20 tokens from external contracts

### _redeem

```solidity
function _redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut
) internal returns (uint256 amountOut)
```

internal helper method to redeem fei in exchange for an external asset

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountFeiIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

### _mint

```solidity
function _mint(
    address to,
    uint256 amountIn,
    uint256 minAmountOut
) internal returns (uint256 amountFeiOut)
```

internal helper method to mint fei in exchange for an external asset

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

### redeem

```solidity
function redeem(
    address to,
    uint256 amountFeiIn,
    uint256 minAmountOut
) external returns (uint256 amountOut)
```

function to redeem FEI for an underlying asset
We do not burn Fei; this allows the contract's balance of Fei to be used before the buffer is used
In practice, this helps prevent artificial cycling of mint-burn cycles and prevents a griefing vector.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountFeiIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

### mint

```solidity
function mint(
    address to,
    uint256 amountIn,
    uint256 minAmountOut
) external returns (uint256 amountFeiOut)
```

function to buy FEI for an underlying asset
We first transfer any contract-owned fei, then mint the remaining if necessary

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

### getMintAmountOut

```solidity
function getMintAmountOut(
    uint256 amountIn
) public returns (uint256 amountFeiOut)
```

calculate the amount of FEI out for a given `amountIn` of underlying
First get oracle price of token
Then figure out how many dollars that amount in is worth by multiplying price * amount.
ensure decimals are normalized if on underlying they are not 18

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

calculate the amount of underlying out for a given `amountFeiIn` of FEI
First get oracle price of token
Then figure out how many dollars that amount in is worth by multiplying price * amount.
ensure decimals are normalized if on underlying they are not 18

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountFeiIn` | uint256 |  |

### getMaxMintAmountOut

```solidity
function getMaxMintAmountOut() external returns (uint256)
```

the maximum mint amount out

### hasSurplus

```solidity
function hasSurplus() external returns (bool)
```

a flag for whether the current balance is above (true) or below (false) the reservesThreshold

### reservesSurplus

```solidity
function reservesSurplus() public returns (int256)
```

an integer representing the positive surplus or negative deficit of contract balance vs reservesThreshold

### balance

```solidity
function balance() public returns (uint256)
```

function from PCVDeposit that must be overriden

### balanceReportedIn

```solidity
function balanceReportedIn() external returns (address)
```

returns address of token this contracts balance is reported in

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

override default behavior of not checking fei balance

### _getMintAmountOut

```solidity
function _getMintAmountOut(
    uint256 amountIn
) internal returns (uint256 amountFeiOut)
```

helper function to get mint amount out based on current market prices

will revert if price is outside of bounds and bounded PSM is being used

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountIn` | uint256 |  |

### _getRedeemAmountOut

```solidity
function _getRedeemAmountOut(
    uint256 amountFeiIn
) internal returns (uint256 amountTokenOut)
```

helper function to get redeem amount out based on current market prices

will revert if price is outside of bounds and bounded PSM is being used

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountFeiIn` | uint256 |  |

### _allocate

```solidity
function _allocate(
    uint256 amount
) internal
```

Allocates a portion of escrowed PCV to a target PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### _transfer

```solidity
function _transfer(
    address to,
    uint256 amount
) internal
```

transfer ERC20 token

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _transferFrom

```solidity
function _transferFrom(
    address from,
    address to,
    uint256 amount
) internal
```

transfer assets from user to this contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

### _mintFei

```solidity
function _mintFei(
    address to,
    uint256 amount
) internal
```

mint amount of FEI to the specified user on a rate limit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _validatePriceRange

```solidity
function _validatePriceRange(
    struct Decimal.D256 price
) internal
```

overriden function in the bounded PSM

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | struct Decimal.D256 |  |

## Events

### RedemptionsPaused

```solidity
event RedemptionsPaused(
    address account
)
```

event that is emitted when redemptions are paused

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
### RedemptionsUnpaused

```solidity
event RedemptionsUnpaused(
    address account
)
```

event that is emitted when redemptions are unpaused

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
### MintingPaused

```solidity
event MintingPaused(
    address account
)
```

event that is emitted when minting is paused

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
### MintingUnpaused

```solidity
event MintingUnpaused(
    address account
)
```

event that is emitted when minting is unpaused

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

