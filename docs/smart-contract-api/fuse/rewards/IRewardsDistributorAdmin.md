# IRewardsDistributorAdmin

## Functions

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

Set COMP speed for a single market

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to update |
| `compSpeed` | uint256 | New COMP speed for market |

### _setCompBorrowSpeed

```solidity
function _setCompBorrowSpeed(
    address cToken,
    uint256 compSpeed
) external
```

Set COMP speed for a single market

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address | The market whose COMP speed to update |
| `compSpeed` | uint256 | New COMP speed for market |

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

### compSupplySpeeds

```solidity
function compSupplySpeeds(
    address 
) external returns (uint256)
```

The portion of compRate that each market currently receives

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### compBorrowSpeeds

```solidity
function compBorrowSpeeds(
    address 
) external returns (uint256)
```

The portion of compRate that each market currently receives

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### _setImplementation

```solidity
function _setImplementation(
    address implementation_
) external
```

Set logic contract address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `implementation_` | address |  |

### AUTO_REWARDS_DISTRIBUTOR_ROLE

```solidity
function AUTO_REWARDS_DISTRIBUTOR_ROLE() external returns (bytes32)
```

Role for AutoRewardsDistributor contracts

