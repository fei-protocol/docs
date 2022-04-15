# IExecutorWithTimelock

# IAaveGovernanceV2

## Functions

### create

```solidity
function create(
    contract IExecutorWithTimelock executor,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    bool[] withDelegatecalls,
    bytes32 ipfsHash
) external returns (uint256)
```

Creates a Proposal (needs Proposition Power of creator > Threshold)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executor` | contract IExecutorWithTimelock | The ExecutorWithTimelock contract that will execute the proposal |
| `targets` | address[] | list of contracts called by proposal's associated transactions |
| `values` | uint256[] | list of value in wei for each propoposal's associated transaction |
| `signatures` | string[] | list of function signatures (can be empty) to be used when created the callData |
| `calldatas` | bytes[] | list of calldatas: if associated signature empty, calldata ready, else calldata is arguments |
| `withDelegatecalls` | bool[] | if true, transaction delegatecalls the taget, else calls the target |
| `ipfsHash` | bytes32 | IPFS hash of the proposal |

### cancel

```solidity
function cancel(
    uint256 proposalId
) external
```

Cancels a Proposal,
either at anytime by guardian
or when proposal is Pending/Active and threshold no longer reached

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal |

### queue

```solidity
function queue(
    uint256 proposalId
) external
```

Queue the proposal (If Proposal Succeeded)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal to queue |

### execute

```solidity
function execute(
    uint256 proposalId
) external
```

Execute the proposal (If Proposal Queued)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal to execute |

### submitVote

```solidity
function submitVote(
    uint256 proposalId,
    bool support
) external
```

Function allowing msg.sender to vote for/against a proposal

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal |
| `support` | bool | boolean, true = vote for, false = vote against |

### submitVoteBySignature

```solidity
function submitVoteBySignature(
    uint256 proposalId,
    bool support,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

Function to register the vote of user that has voted offchain via signature

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal |
| `support` | bool | boolean, true = vote for, false = vote against |
| `v` | uint8 | v part of the voter signature |
| `r` | bytes32 | r part of the voter signature |
| `s` | bytes32 | s part of the voter signature |

### setGovernanceStrategy

```solidity
function setGovernanceStrategy(
    address governanceStrategy
) external
```

Set new GovernanceStrategy
Note: owner should be a timelocked executor, so needs to make a proposal

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governanceStrategy` | address | new Address of the GovernanceStrategy contract |

### setVotingDelay

```solidity
function setVotingDelay(
    uint256 votingDelay
) external
```

Set new Voting Delay (delay before a newly created proposal can be voted on)
Note: owner should be a timelocked executor, so needs to make a proposal

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `votingDelay` | uint256 | new voting delay in seconds |

### authorizeExecutors

```solidity
function authorizeExecutors(
    address[] executors
) external
```

Add new addresses to the list of authorized executors

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executors` | address[] | list of new addresses to be authorized executors |

### unauthorizeExecutors

```solidity
function unauthorizeExecutors(
    address[] executors
) external
```

Remove addresses to the list of authorized executors

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executors` | address[] | list of addresses to be removed as authorized executors |

### __abdicate

```solidity
function __abdicate() external
```

Let the guardian abdicate from its priviledged rights

### getGovernanceStrategy

```solidity
function getGovernanceStrategy() external returns (address)
```

Getter of the current GovernanceStrategy address

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | address | The address of the current GovernanceStrategy contracts |

### getVotingDelay

```solidity
function getVotingDelay() external returns (uint256)
```

Getter of the current Voting Delay (delay before a created proposal can be voted on)
Different from the voting duration

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The voting delay in seconds |

### isExecutorAuthorized

```solidity
function isExecutorAuthorized(
    address executor
) external returns (bool)
```

Returns whether an address is an authorized executor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executor` | address | address to evaluate as authorized executor |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | true if authorized |

### getGuardian

```solidity
function getGuardian() external returns (address)
```

Getter the address of the guardian, that can mainly cancel proposals

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | address | The address of the guardian |

### getProposalsCount

```solidity
function getProposalsCount() external returns (uint256)
```

Getter of the proposal count (the current number of proposals ever created)

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | the proposal count |

### getProposalById

```solidity
function getProposalById(
    uint256 proposalId
) external returns (struct IAaveGovernanceV2.ProposalWithoutVotes)
```

Getter of a proposal by id

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal to get |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct IAaveGovernanceV2.ProposalWithoutVotes | the proposal as ProposalWithoutVotes memory object |

### getVoteOnProposal

```solidity
function getVoteOnProposal(
    uint256 proposalId,
    address voter
) external returns (struct IAaveGovernanceV2.Vote)
```

Getter of the Vote of a voter about a proposal
Note: Vote is a struct: ({bool support, uint248 votingPower})

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal |
| `voter` | address | address of the voter |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | struct IAaveGovernanceV2.Vote | The associated Vote memory object |

### getProposalState

```solidity
function getProposalState(
    uint256 proposalId
) external returns (enum IAaveGovernanceV2.ProposalState)
```

Get the current state of a proposal

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 | id of the proposal |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | enum IAaveGovernanceV2.ProposalState | The current state if the proposal |

## Events

### ProposalCreated

```solidity
event ProposalCreated(
    uint256 id,
    address creator,
    contract IExecutorWithTimelock executor,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    bool[] withDelegatecalls,
    uint256 startBlock,
    uint256 endBlock,
    address strategy,
    bytes32 ipfsHash
)
```

emitted when a new proposal is created

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 | Id of the proposal |
| `creator` | address | address of the creator |
| `executor` | contract IExecutorWithTimelock | The ExecutorWithTimelock contract that will execute the proposal |
| `targets` | address[] | list of contracts called by proposal's associated transactions |
| `values` | uint256[] | list of value in wei for each propoposal's associated transaction |
| `signatures` | string[] | list of function signatures (can be empty) to be used when created the callData |
| `calldatas` | bytes[] | list of calldatas: if associated signature empty, calldata ready, else calldata is arguments |
| `withDelegatecalls` | bool[] | boolean, true = transaction delegatecalls the taget, else calls the target |
| `startBlock` | uint256 | block number when vote starts |
| `endBlock` | uint256 | block number when vote ends |
| `strategy` | address | address of the governanceStrategy contract |
| `ipfsHash` | bytes32 | IPFS hash of the proposal |
### ProposalCanceled

```solidity
event ProposalCanceled(
    uint256 id
)
```

emitted when a proposal is canceled

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 | Id of the proposal |
### ProposalQueued

```solidity
event ProposalQueued(
    uint256 id,
    uint256 executionTime,
    address initiatorQueueing
)
```

emitted when a proposal is queued

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 | Id of the proposal |
| `executionTime` | uint256 | time when proposal underlying transactions can be executed |
| `initiatorQueueing` | address | address of the initiator of the queuing transaction |
### ProposalExecuted

```solidity
event ProposalExecuted(
    uint256 id,
    address initiatorExecution
)
```

emitted when a proposal is executed

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 | Id of the proposal |
| `initiatorExecution` | address | address of the initiator of the execution transaction |
### VoteEmitted

```solidity
event VoteEmitted(
    uint256 id,
    address voter,
    bool support,
    uint256 votingPower
)
```

emitted when a vote is registered

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | uint256 | Id of the proposal |
| `voter` | address | address of the voter |
| `support` | bool | boolean, true = vote for, false = vote against |
| `votingPower` | uint256 | Power of the voter/vote |
### GovernanceStrategyChanged

```solidity
event GovernanceStrategyChanged(
    address newStrategy,
    address initiatorChange
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newStrategy` | address |  |
| `initiatorChange` | address |  |
### VotingDelayChanged

```solidity
event VotingDelayChanged(
    uint256 newVotingDelay,
    address initiatorChange
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newVotingDelay` | uint256 |  |
| `initiatorChange` | address |  |
### ExecutorAuthorized

```solidity
event ExecutorAuthorized(
    address executor
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executor` | address |  |
### ExecutorUnauthorized

```solidity
event ExecutorUnauthorized(
    address executor
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `executor` | address |  |

