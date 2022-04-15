# GovernorAlpha

## Functions

### quorumVotes

```solidity
function quorumVotes() public returns (uint256)
```

The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed

### proposalThreshold

```solidity
function proposalThreshold() public returns (uint256)
```

The number of votes required in order for a voter to become a proposer

### proposalMaxOperations

```solidity
function proposalMaxOperations() public returns (uint256)
```

The maximum number of actions that can be included in a proposal

### votingDelay

```solidity
function votingDelay() public returns (uint256)
```

The delay before voting on a proposal may take place, once proposed

### votingPeriod

```solidity
function votingPeriod() public returns (uint256)
```

The duration of voting on a proposal, in blocks

### constructor

```solidity
function constructor(
    address timelock_,
    address tribe_,
    address guardian_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `timelock_` | address |  |
| `tribe_` | address |  |
| `guardian_` | address |  |

### propose

```solidity
function propose(
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    string description
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `signatures` | string[] |  |
| `calldatas` | bytes[] |  |
| `description` | string |  |

### queue

```solidity
function queue(
    uint256 proposalId
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### _queueOrRevert

```solidity
function _queueOrRevert(
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

### execute

```solidity
function execute(
    uint256 proposalId
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### cancel

```solidity
function cancel(
    uint256 proposalId
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### getActions

```solidity
function getActions(
    uint256 proposalId
) public returns (address[] targets, uint256[] values, string[] signatures, bytes[] calldatas)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### getReceipt

```solidity
function getReceipt(
    uint256 proposalId,
    address voter
) public returns (struct GovernorAlpha.Receipt)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |
| `voter` | address |  |

### state

```solidity
function state(
    uint256 proposalId
) public returns (enum GovernorAlpha.ProposalState)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### castVote

```solidity
function castVote(
    uint256 proposalId,
    bool support
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |
| `support` | bool |  |

### castVoteBySig

```solidity
function castVoteBySig(
    uint256 proposalId,
    bool support,
    uint8 v,
    bytes32 r,
    bytes32 s
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |
| `support` | bool |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

### _castVote

```solidity
function _castVote(
    address voter,
    uint256 proposalId,
    bool support
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `voter` | address |  |
| `proposalId` | uint256 |  |
| `support` | bool |  |

### __acceptAdmin

```solidity
function __acceptAdmin() public
```

### __abdicate

```solidity
function __abdicate() public
```

### __transferGuardian

```solidity
function __transferGuardian(
    address newGuardian
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newGuardian` | address |  |

### __queueSetTimelockPendingAdmin

```solidity
function __queueSetTimelockPendingAdmin(
    address newPendingAdmin,
    uint256 eta
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address |  |
| `eta` | uint256 |  |

### __executeSetTimelockPendingAdmin

```solidity
function __executeSetTimelockPendingAdmin(
    address newPendingAdmin,
    uint256 eta
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address |  |
| `eta` | uint256 |  |

### add256

```solidity
function add256(
    uint256 a,
    uint256 b
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### sub256

```solidity
function sub256(
    uint256 a,
    uint256 b
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint256 |  |
| `b` | uint256 |  |

### getChainId

```solidity
function getChainId() internal returns (uint256)
```

## Events

### ProposalCreated

```solidity
event ProposalCreated(
    uint256 id,
    address proposer,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    uint256 startBlock,
    uint256 endBlock,
    string description
)
```

An event emitted when a new proposal is created

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 |  |
| `proposer` | address |  |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `signatures` | string[] |  |
| `calldatas` | bytes[] |  |
| `startBlock` | uint256 |  |
| `endBlock` | uint256 |  |
| `description` | string |  |
### VoteCast

```solidity
event VoteCast(
    address voter,
    uint256 proposalId,
    bool support,
    uint256 votes
)
```

An event emitted when a vote has been cast on a proposal

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `voter` | address |  |
| `proposalId` | uint256 |  |
| `support` | bool |  |
| `votes` | uint256 |  |
### ProposalCanceled

```solidity
event ProposalCanceled(
    uint256 id
)
```

An event emitted when a proposal has been canceled

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 |  |
### ProposalQueued

```solidity
event ProposalQueued(
    uint256 id,
    uint256 eta
)
```

An event emitted when a proposal has been queued in the Timelock

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 |  |
| `eta` | uint256 |  |
### ProposalExecuted

```solidity
event ProposalExecuted(
    uint256 id
)
```

An event emitted when a proposal has been executed in the Timelock

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 |  |

# TimelockInterface

## Functions

### delay

```solidity
function delay() external returns (uint256)
```

### GRACE_PERIOD

```solidity
function GRACE_PERIOD() external returns (uint256)
```

### acceptAdmin

```solidity
function acceptAdmin() external
```

### queuedTransactions

```solidity
function queuedTransactions(
    bytes32 hash
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `hash` | bytes32 |  |

### queueTransaction

```solidity
function queueTransaction(
    address target,
    uint256 value,
    string signature,
    bytes data,
    uint256 eta
) external returns (bytes32)
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
) external
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
) external returns (bytes)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `target` | address |  |
| `value` | uint256 |  |
| `signature` | string |  |
| `data` | bytes |  |
| `eta` | uint256 |  |

# TribeInterface

## Functions

### getPriorVotes

```solidity
function getPriorVotes(
    address account,
    uint256 blockNumber
) external returns (uint96)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `blockNumber` | uint256 |  |

