# FeiDAOTimelock

## Functions

### constructor

```solidity
function constructor(
    address core_,
    address admin_,
    uint256 delay_,
    uint256 minDelay_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `core_` | address |  |
| `admin_` | address |  |
| `delay_` | uint256 |  |
| `minDelay_` | uint256 |  |

### queueTransaction

```solidity
function queueTransaction(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) public returns (bytes32)
```

queue a transaction, with pausability

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### vetoTransactions

```solidity
function vetoTransactions(
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] datas,
    uint256[] etas
) public
```

veto a group of transactions

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `signatures` | string[] |  |
| `datas` | bytes[] |  |
| `etas` | uint256[] |  |

### executeTransaction

```solidity
function executeTransaction(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) public returns (bytes)
```

execute a transaction, with pausability

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### governorSetPendingAdmin

```solidity
function governorSetPendingAdmin(
    address newAdmin
) public
```

allow a governor to set a new pending timelock admin

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAdmin` | address |  |

### rollback

```solidity
function rollback() external
```

one-time option to roll back the Timelock to old timelock

guardian-only, and expires after the deadline. This function is here as a fallback in case something goes wrong.

# IFeiDAO

## Functions

### updateTimelock

```solidity
function updateTimelock(
    address newTimelock
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTimelock` | address |  |

