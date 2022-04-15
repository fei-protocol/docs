# NamedStaticPCVDepositWrapper

a contract to report static PCV data to cover PCV not held with a reliable oracle or on-chain reading 
  @author Fei Protocol

  Returns PCV in USD terms

## Functions

### constructor

```solidity
function constructor(
    address _core,
    struct NamedStaticPCVDepositWrapper.DepositInfo[] newPCVDeposits
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `newPCVDeposits` | struct NamedStaticPCVDepositWrapper.DepositInfo[] |  |

### _addDeposit

```solidity
function _addDeposit(
    struct NamedStaticPCVDepositWrapper.DepositInfo newPCVDeposit
) internal
```

helper method to add a PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPCVDeposit` | struct NamedStaticPCVDepositWrapper.DepositInfo |  |

### _editDeposit

```solidity
function _editDeposit(
    uint256 index,
    string depositName,
    uint256 usdAmount,
    uint256 feiAmount,
    uint256 underlyingTokenAmount,
    address underlyingToken
) internal
```

helper method to edit a PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |
| `depositName` | string |  |
| `usdAmount` | uint256 |  |
| `feiAmount` | uint256 |  |
| `underlyingTokenAmount` | uint256 |  |
| `underlyingToken` | address |  |

### _removeDeposit

```solidity
function _removeDeposit(
    uint256 index
) internal
```

helper method to delete a PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |

### addDeposit

```solidity
function addDeposit(
    struct NamedStaticPCVDepositWrapper.DepositInfo newPCVDeposit
) external
```

function to add a deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPCVDeposit` | struct NamedStaticPCVDepositWrapper.DepositInfo |  |

### bulkAddDeposits

```solidity
function bulkAddDeposits(
    struct NamedStaticPCVDepositWrapper.DepositInfo[] newPCVDeposits
) external
```

function to bulk add deposits

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPCVDeposits` | struct NamedStaticPCVDepositWrapper.DepositInfo[] |  |

### removeDeposit

```solidity
function removeDeposit(
    uint256 index
) external
```

function to remove a PCV Deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |

### editDeposit

```solidity
function editDeposit(
    uint256 index,
    uint256 usdAmount,
    uint256 feiAmount,
    uint256 underlyingTokenAmount,
    string depositName,
    address underlying
) external
```

function to edit an existing deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |
| `usdAmount` | uint256 |  |
| `feiAmount` | uint256 |  |
| `underlyingTokenAmount` | uint256 |  |
| `depositName` | string |  |
| `underlying` | address |  |

### numDeposits

```solidity
function numDeposits() public returns (uint256)
```

returns the current number of PCV deposits

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

returns the resistant balance and FEI in the deposit

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### getAllUnderlying

```solidity
function getAllUnderlying() public returns (address[])
```

function to return all of the different tokens deposited into this contract

## Events

### BalanceUpdate

```solidity
event BalanceUpdate(
    uint256 oldBalance,
    uint256 newBalance,
    uint256 oldFEIBalance,
    uint256 newFEIBalance
)
```

event to update fei and usd balance

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldBalance` | uint256 |  |
| `newBalance` | uint256 |  |
| `oldFEIBalance` | uint256 |  |
| `newFEIBalance` | uint256 |  |
### DepositRemoved

```solidity
event DepositRemoved(
    uint256 index
)
```

event to remove a deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |
### DepositAdded

```solidity
event DepositAdded(
    uint256 index,
    string depositName
)
```

event to add a new deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |
| `depositName` | string |  |
### DepositChanged

```solidity
event DepositChanged(
    uint256 index,
    string depositName
)
```

event emitted when a deposit is edited

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |
| `depositName` | string |  |

