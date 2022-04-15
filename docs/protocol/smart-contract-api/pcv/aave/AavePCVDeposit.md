# LendingPool

## Functions

### deposit

```solidity
function deposit(
    address asset,
    uint256 amount,
    address onBehalfOf,
    uint16 referralCode
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |
| `amount` | uint256 |  |
| `onBehalfOf` | address |  |
| `referralCode` | uint16 |  |

### withdraw

```solidity
function withdraw(
    address asset,
    uint256 amount,
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |
| `amount` | uint256 |  |
| `to` | address |  |

# IncentivesController

## Functions

### claimRewards

```solidity
function claimRewards(
    address[] assets,
    uint256 amount,
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] |  |
| `amount` | uint256 |  |
| `to` | address |  |

### getRewardsBalance

```solidity
function getRewardsBalance(
    address[] assets,
    address user
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] |  |
| `user` | address |  |

# AavePCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract LendingPool _lendingPool,
    contract IERC20 _token,
    contract IERC20 _aToken,
    contract IncentivesController _incentivesController
) public
```

Aave PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_lendingPool` | contract LendingPool | the Aave v2 lending pool |
| `_token` | contract IERC20 | the underlying token of the PCV deposit |
| `_aToken` | contract IERC20 | the associated Aave aToken for the deposit |
| `_incentivesController` | contract IncentivesController | the Aave incentives controller for the aToken |

### claimRewards

```solidity
function claimRewards() external
```

claims Aave rewards from the deposit and transfers to this address

### deposit

```solidity
function deposit() external
```

deposit buffered aTokens

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountUnderlying
) external
```

withdraw tokens from the PCV allocation

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send PCV to |
| `amountUnderlying` | uint256 | of tokens withdrawn |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit

aTokens are rebasing, so represent 1:1 on underlying value

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

## Events

### ClaimRewards

```solidity
event ClaimRewards(
    address caller,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |
| `amount` | uint256 |  |

