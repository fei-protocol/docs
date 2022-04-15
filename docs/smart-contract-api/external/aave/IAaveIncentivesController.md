# IAaveIncentivesController

## Functions

### setClaimer

```solidity
function setClaimer(
    address user,
    address claimer
) external
```

Whitelists an address to claim the rewards on behalf of another address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address | The address of the user |
| `claimer` | address | The address of the claimer |

### getClaimer

```solidity
function getClaimer(
    address user
) external returns (address)
```

Returns the whitelisted claimer for a certain address (0x0 if not set)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address | The address of the user |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | address | The claimer address |

### configureAssets

```solidity
function configureAssets(
    address[] assets,
    uint256[] emissionsPerSecond
) external
```

Configure assets for a certain rewards emission

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] | The assets to incentivize |
| `emissionsPerSecond` | uint256[] | The emission for each asset |

### handleAction

```solidity
function handleAction(
    address asset,
    uint256 userBalance,
    uint256 totalSupply
) external
```

Called by the corresponding asset on any update that affects the rewards distribution

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address | The address of the user |
| `userBalance` | uint256 | The balance of the user of the asset in the lending pool |
| `totalSupply` | uint256 | The total supply of the asset in the lending pool |

### getRewardsBalance

```solidity
function getRewardsBalance(
    address[] assets,
    address user
) external returns (uint256)
```

Returns the total of rewards of an user, already accrued + not yet accrued

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] |  |
| `user` | address | The address of the user |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The rewards |

### claimRewards

```solidity
function claimRewards(
    address[] assets,
    uint256 amount,
    address to
) external returns (uint256)
```

Claims reward for an user, on all the assets of the lending pool, accumulating the pending rewards

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] |  |
| `amount` | uint256 | Amount of rewards to claim |
| `to` | address | Address that will be receiving the rewards |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | Rewards claimed |

### claimRewardsOnBehalf

```solidity
function claimRewardsOnBehalf(
    address[] assets,
    uint256 amount,
    address user,
    address to
) external returns (uint256)
```

Claims reward for an user on behalf, on all the assets of the lending pool, accumulating the pending rewards. The caller must
be whitelisted via "allowClaimOnBehalf" function by the RewardsAdmin role manager

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `assets` | address[] |  |
| `amount` | uint256 | Amount of rewards to claim |
| `user` | address | Address to check and claim rewards |
| `to` | address | Address that will be receiving the rewards |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | Rewards claimed |

### getUserUnclaimedRewards

```solidity
function getUserUnclaimedRewards(
    address user
) external returns (uint256)
```

returns the unclaimed rewards of the user

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address | the address of the user |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | the unclaimed user rewards |

### REWARD_TOKEN

```solidity
function REWARD_TOKEN() external returns (address)
```

for backward compatibility with previous implementation of the Incentives controller

## Events

### RewardsAccrued

```solidity
event RewardsAccrued(
    address user,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `amount` | uint256 |  |
### RewardsClaimed

```solidity
event RewardsClaimed(
    address user,
    address to,
    address claimer,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `to` | address |  |
| `claimer` | address |  |
| `amount` | uint256 |  |
### ClaimerSet

```solidity
event ClaimerSet(
    address user,
    address claimer
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `claimer` | address |  |

