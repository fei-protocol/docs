# IPegStabilityModule

The Fei PSM is a contract which holds a reserve of assets in order to exchange FEI at $1 of underlying assets with a fee.
`mint()` - buy FEI for $1 of underlying tokens
`redeem()` - sell FEI back for $1 of the same

The contract has a reservesThreshold() of underlying meant to stand ready for redemptions. Any surplus reserves can be sent into the PCV using `allocateSurplus()`

The contract is a
PCVDeposit - to track reserves
OracleRef - to determine price of underlying, and
RateLimitedMinter - to stop infinite mints and related issues (but this is in the implementation due to inheritance-linearization difficulties)

Inspired by MakerDAO PSM, code written without reference

## Functions

### mint

```solidity
function mint(
    address to,
    uint256 amountIn,
    uint256 minAmountOut
) external returns (uint256 amountFeiOut)
```

mint `amountFeiOut` FEI to address `to` for `amountIn` underlying tokens

see getMintAmountOut() to pre-calculate amount out

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

redeem `amountFeiIn` FEI for `amountOut` underlying tokens and send to address `to`

see getRedeemAmountOut() to pre-calculate amount out

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountFeiIn` | uint256 |  |
| `minAmountOut` | uint256 |  |

### allocateSurplus

```solidity
function allocateSurplus() external
```

send any surplus reserves to the PCV allocation

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

### hasSurplus

```solidity
function hasSurplus() external returns (bool)
```

a flag for whether the current balance is above (true) or below and equal (false) to the reservesThreshold

### reservesSurplus

```solidity
function reservesSurplus() external returns (int256)
```

an integer representing the positive surplus or negative deficit of contract balance vs reservesThreshold

### reservesThreshold

```solidity
function reservesThreshold() external returns (uint256)
```

the ideal amount of reserves for the contract to hold for redemptions

### mintFeeBasisPoints

```solidity
function mintFeeBasisPoints() external returns (uint256)
```

the mint fee vs oracle price in basis point terms

### redeemFeeBasisPoints

```solidity
function redeemFeeBasisPoints() external returns (uint256)
```

the redemption fee vs oracle price in basis point terms

### underlyingToken

```solidity
function underlyingToken() external returns (contract IERC20)
```

the underlying token exchanged for FEI

### surplusTarget

```solidity
function surplusTarget() external returns (contract IPCVDeposit)
```

the PCV deposit target to send surplus reserves

### MAX_FEE

```solidity
function MAX_FEE() external returns (uint256)
```

the max mint and redeem fee in basis points

## Events

### AllocateSurplus

```solidity
event AllocateSurplus(
    address caller,
    uint256 amount
)
```

event emitted when excess PCV is allocated

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |
| `amount` | uint256 |  |
### MaxFeeUpdate

```solidity
event MaxFeeUpdate(
    uint256 oldMaxFee,
    uint256 newMaxFee
)
```

event emitted when a new max fee is set

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldMaxFee` | uint256 |  |
| `newMaxFee` | uint256 |  |
### MintFeeUpdate

```solidity
event MintFeeUpdate(
    uint256 oldMintFee,
    uint256 newMintFee
)
```

event emitted when a new mint fee is set

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldMintFee` | uint256 |  |
| `newMintFee` | uint256 |  |
### RedeemFeeUpdate

```solidity
event RedeemFeeUpdate(
    uint256 oldRedeemFee,
    uint256 newRedeemFee
)
```

event emitted when a new redeem fee is set

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldRedeemFee` | uint256 |  |
| `newRedeemFee` | uint256 |  |
### ReservesThresholdUpdate

```solidity
event ReservesThresholdUpdate(
    uint256 oldReservesThreshold,
    uint256 newReservesThreshold
)
```

event emitted when reservesThreshold is updated

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldReservesThreshold` | uint256 |  |
| `newReservesThreshold` | uint256 |  |
### SurplusTargetUpdate

```solidity
event SurplusTargetUpdate(
    contract IPCVDeposit oldTarget,
    contract IPCVDeposit newTarget
)
```

event emitted when surplus target is updated

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTarget` | contract IPCVDeposit |  |
| `newTarget` | contract IPCVDeposit |  |
### Redeem

```solidity
event Redeem(
    address to,
    uint256 amountFeiIn,
    uint256 amountAssetOut
)
```

event emitted upon a redemption

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountFeiIn` | uint256 |  |
| `amountAssetOut` | uint256 |  |
### Mint

```solidity
event Mint(
    address to,
    uint256 amountIn,
    uint256 amountFeiOut
)
```

event emitted when fei gets minted

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountIn` | uint256 |  |
| `amountFeiOut` | uint256 |  |

