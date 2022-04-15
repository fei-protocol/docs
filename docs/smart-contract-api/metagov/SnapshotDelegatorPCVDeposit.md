# DelegateRegistry

## Functions

### setDelegate

```solidity
function setDelegate(
    bytes32 id,
    address delegate
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | bytes32 |  |
| `delegate` | address |  |

### clearDelegate

```solidity
function clearDelegate(
    bytes32 id
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | bytes32 |  |

### delegation

```solidity
function delegation(
    address delegator,
    bytes32 id
) external returns (address delegatee)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegator` | address |  |
| `id` | bytes32 |  |

# SnapshotDelegatorPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IERC20 _token,
    bytes32 _spaceId,
    address _initialDelegate
) public
```

Snapshot Delegator PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_token` | contract IERC20 | snapshot token |
| `_spaceId` | bytes32 | the id (or ENS name) of the snapshot space |
| `_initialDelegate` | address |  |

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

### deposit

```solidity
function deposit() external
```

no-op

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### setSpaceId

```solidity
function setSpaceId(
    bytes32 _spaceId
) external
```

sets the snapshot space ID

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_spaceId` | bytes32 |  |

### setDelegate

```solidity
function setDelegate(
    address newDelegate
) external
```

sets the snapshot delegate

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDelegate` | address |  |

### clearDelegate

```solidity
function clearDelegate() external
```

clears the delegate from snapshot

### _delegate

```solidity
function _delegate(
    address newDelegate
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDelegate` | address |  |

## Events

### DelegateUpdate

```solidity
event DelegateUpdate(
    address oldDelegate,
    address newDelegate
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldDelegate` | address |  |
| `newDelegate` | address |  |

