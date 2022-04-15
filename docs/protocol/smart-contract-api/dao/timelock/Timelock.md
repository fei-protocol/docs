# Timelock

## Functions

### constructor

```solidity
function constructor(
    address admin_,
    uint256 delay_,
    uint256 minDelay_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `admin_` | address |  |
| `delay_` | uint256 |  |
| `minDelay_` | uint256 |  |

### receive

```solidity
function receive() external
```

### setDelay

```solidity
function setDelay(
    uint256 delay_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delay_` | uint256 |  |

### acceptAdmin

```solidity
function acceptAdmin() public
```

### setPendingAdmin

```solidity
function setPendingAdmin(
    address pendingAdmin_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pendingAdmin_` | address |  |

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

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### cancelTransaction

```solidity
function cancelTransaction(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### _cancelTransaction

```solidity
function _cancelTransaction(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

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

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### getTxHash

```solidity
function getTxHash(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) public returns (bytes32)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

### getBlockTimestamp

```solidity
function getBlockTimestamp() internal returns (uint256)
```

## Events

### NewAdmin

```solidity
event NewAdmin(
    address newAdmin
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAdmin` | address |  |
### NewPendingAdmin

```solidity
event NewPendingAdmin(
    address newPendingAdmin
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address |  |
### NewDelay

```solidity
event NewDelay(
    uint256 newDelay
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDelay` | uint256 |  |
### CancelTransaction

```solidity
event CancelTransaction(
    bytes32 txHash,
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `txHash` | bytes32 |  |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |
### ExecuteTransaction

```solidity
event ExecuteTransaction(
    bytes32 txHash,
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `txHash` | bytes32 |  |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |
### QueueTransaction

```solidity
event QueueTransaction(
    bytes32 txHash,
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `txHash` | bytes32 |  |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

