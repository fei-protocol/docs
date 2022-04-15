# ConvexPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _curvePool,
    address _convexBooster,
    address _convexRewards
) public
```

ConvexPCVDeposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_curvePool` | address | The Curve pool whose LP tokens are staked |
| `_convexBooster` | address | The Convex Booster contract (for deposit/withdraw) |
| `_convexRewards` | address | The Convex Rewards contract (for claiming rewards) |

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

Curve/Convex deposits report their balance in USD

### deposit

```solidity
function deposit() public
```

deposit Curve LP tokens on Convex and stake deposit tokens in the
Convex rewards contract.
Note : this call is permissionless, and can be used if LP tokens are
transferred to this contract directly.

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountLpTokens
) public
```

unstake LP tokens from Convex Rewards, and withdraw Curve
LP tokens from Convex

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountLpTokens` | uint256 |  |

### claimRewards

```solidity
function claimRewards() public
```

claim CRV & CVX rewards earned by the LP tokens staked on this contract.

### balance

```solidity
function balance() public returns (uint256)
```

returns the balance in USD

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256 resistantBalance, uint256 resistantFei)
```

returns the resistant balance in USD and FEI held by the contract

