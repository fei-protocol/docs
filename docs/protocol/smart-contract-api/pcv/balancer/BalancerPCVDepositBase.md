# BalancerPCVDepositBase

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _vault,
    address _rewards,
    bytes32 _poolId,
    uint256 _maximumSlippageBasisPoints
) internal
```

Balancer PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_vault` | address | Balancer vault |
| `_rewards` | address | Balancer rewards (the MerkleOrchard) |
| `_poolId` | bytes32 | Balancer poolId to deposit in |
| `_maximumSlippageBasisPoints` | uint256 | Maximum slippage basis points when depositing |

### receive

```solidity
function receive() external
```

### wrapETH

```solidity
function wrapETH() external
```

Wraps all ETH held by the contract to WETH
Anyone can call it.
Balancer uses WETH in its pools, and not ETH.

### unwrapETH

```solidity
function unwrapETH() external
```

unwrap WETH on the contract, for instance before
sending to another PCVDeposit that needs pure ETH.
Balancer uses WETH in its pools, and not ETH.

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

### exitPool

```solidity
function exitPool(
    address _to
) external
```

redeeem all assets from LP pool

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address | address to send underlying tokens to |

### claimRewards

```solidity
function claimRewards(
    uint256 distributionId,
    uint256 amount,
    bytes32[] merkleProof
) external
```

claim BAL rewards associated to this PCV Deposit.
Note that if dual incentives are active, this will only claim BAL rewards.
For more context, see the following links :
- https://docs.balancer.fi/products/merkle-orchard
- https://docs.balancer.fi/products/merkle-orchard/claiming-tokens
A permissionless manual claim can always be done directly on the
MerkleOrchard contract, on behalf of this PCVDeposit. This function is
provided solely for claiming more conveniently the BAL rewards.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `distributionId` | uint256 |  |
| `amount` | uint256 |  |
| `merkleProof` | bytes32[] |  |

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
### ClaimRewards

```solidity
event ClaimRewards(
    address _caller,
    address _token,
    address _to,
    uint256 _amount
)
```

event generated when rewards are claimed

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_token` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |
### ExitPool

```solidity
event ExitPool(
    bytes32 _poodId,
    address _to,
    uint256 _bptAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_poodId` | bytes32 |  |
| `_to` | address |  |
| `_bptAmount` | uint256 |  |

