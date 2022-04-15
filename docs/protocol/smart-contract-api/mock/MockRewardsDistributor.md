# MockRewardsDistributor

## Functions

### constructor

```solidity
function constructor() public
```

### _setPendingAdmin

```solidity
function _setPendingAdmin(
    address _newPendingAdmin
) external
```

Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_newPendingAdmin` | address | New pending admin. |

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
| `compSpeed` | uint256 |  |

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
| `compSpeed` | uint256 |  |

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

### setCompSupplySpeed

```solidity
function setCompSupplySpeed(
    uint256 newSpeed
) external
```

admin function

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newSpeed` | uint256 |  |

### setCompBorrowSpeed

```solidity
function setCompBorrowSpeed(
    uint256 newSpeed
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newSpeed` | uint256 |  |

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

## Events

### successSetAdmin

```solidity
event successSetAdmin(
    address pendingAdmin
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pendingAdmin` | address |  |
### successAcceptPendingAdmin

```solidity
event successAcceptPendingAdmin(
    address newlyAppointedAdmin
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newlyAppointedAdmin` | address |  |
### successGrantComp

```solidity
event successGrantComp(
    address compGrantee,
    uint256 compAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `compGrantee` | address |  |
| `compAmount` | uint256 |  |
### successSetCompSupplySpeed

```solidity
event successSetCompSupplySpeed(
)
```

### successSetCompBorrowSpeed

```solidity
event successSetCompBorrowSpeed(
)
```

### successSetCompContributorSpeed

```solidity
event successSetCompContributorSpeed(
)
```

### successAddMarket

```solidity
event successAddMarket(
)
```

