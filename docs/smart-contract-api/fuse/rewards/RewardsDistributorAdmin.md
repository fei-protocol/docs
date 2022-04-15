# RewardsDistributorAdmin

this contract has its own internal ACL. The reasons for doing this
and not leveraging core are twofold. One, it simplifies devops operations around adding
and removing users, and two, by being self contained, it is more efficient as it does not need
to make external calls to figure out who has a particular role.

## Functions

### constructor

```solidity
function constructor(
    address coreAddress,
    contract IRewardsDistributorAdmin _rewardsDistributorContract,
    address[] _autoRewardDistributors
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `coreAddress` | address | address of core contract |
| `_rewardsDistributorContract` | contract IRewardsDistributorAdmin | admin rewards distributor contract |
| `_autoRewardDistributors` | address[] | list of auto rewards distributor contracts that can call this contract |

### _setPendingAdmin

```solidity
function _setPendingAdmin(
    address newPendingAdmin
) external
```

Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address | New pending admin. |

### _acceptAdmin

```solidity
function _acceptAdmin() external
```

Accepts transfer of admin rights. msg.sender must be pendingAdmin

Admin function for pending admin to accept role and update admin

### _grantComp

```solidity
function _grantComp(
    address recipient,
    uint256 amount
) external
```

Transfer COMP to the recipient

Note: If there is not enough COMP, we do not perform the transfer all.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `recipient` | address | The address of the recipient to transfer COMP to |
| `amount` | uint256 | The amount of COMP to (possibly) transfer |

### _setCompSupplySpeed

```solidity
function _setCompSupplySpeed(
    address cToken,
    uint256 compSpeed
) external
```

Set COMP speed for a single market.
Callable only by users with auto rewards distributor role

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to update |
| `compSpeed` | uint256 |  |

### _setCompBorrowSpeed

```solidity
function _setCompBorrowSpeed(
    address cToken,
    uint256 compSpeed
) external
```

Set COMP speed for a single market
Callable only by users with auto rewards distributor role

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to update |
| `compSpeed` | uint256 |  |

### guardianDisableSupplySpeed

```solidity
function guardianDisableSupplySpeed(
    address cToken
) external
```

Set COMP supply speed for a single market to 0
Callable only by the guardian or governor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to set to 0 |

### guardianDisableBorrowSpeed

```solidity
function guardianDisableBorrowSpeed(
    address cToken
) external
```

Set COMP borrow speed for a single market to 0
Callable only by the guardian or governor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to set to 0 |

### _setContributorCompSpeed

```solidity
function _setContributorCompSpeed(
    address contributor,
    uint256 compSpeed
) external
```

Set COMP speed for a single contributor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `contributor` | address | The contributor whose COMP speed to update |
| `compSpeed` | uint256 | New COMP speed for contributor |

### _addMarket

```solidity
function _addMarket(
    address cToken
) external
```

Add a default market to claim rewards for in `claimRewards()`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market to add |

### _setImplementation

```solidity
function _setImplementation(
    address implementation_
) external
```

Set the implementation contract the RewardsDistributorDelegator delegate calls

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `implementation_` | address | the logic contract address |

### compSupplySpeeds

```solidity
function compSupplySpeeds(
    address cToken
) external returns (uint256)
```

view function to get the comp supply speeds from the rewards distributor contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market to view |

### compBorrowSpeeds

```solidity
function compBorrowSpeeds(
    address cToken
) external returns (uint256)
```

view function to get the comp borrow speeds from the rewards distributor contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market to view |

### becomeAdmin

```solidity
function becomeAdmin() public
```

allow admin or governor to assume auto reward distributor admin role

