# FixedPricePSM

## Functions

### constructor

```solidity
function constructor(
    uint256 _floor,
    uint256 _ceiling,
    struct PegStabilityModule.OracleParams _params,
    uint256 _mintFeeBasisPoints,
    uint256 _redeemFeeBasisPoints,
    uint256 _reservesThreshold,
    uint256 _feiLimitPerSecond,
    uint256 _mintingBufferCap,
    contract IERC20 _underlyingToken,
    contract IPCVDeposit _surplusTarget
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_floor` | uint256 |  |
| `_ceiling` | uint256 |  |
| `_params` | struct PegStabilityModule.OracleParams |  |
| `_mintFeeBasisPoints` | uint256 |  |
| `_redeemFeeBasisPoints` | uint256 |  |
| `_reservesThreshold` | uint256 |  |
| `_feiLimitPerSecond` | uint256 |  |
| `_mintingBufferCap` | uint256 |  |
| `_underlyingToken` | contract IERC20 |  |
| `_surplusTarget` | contract IPCVDeposit |  |

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

