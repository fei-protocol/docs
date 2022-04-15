# FeiDAO

## Functions

### constructor

```solidity
function constructor(
    contract ERC20VotesComp tribe,
    contract ICompoundTimelock timelock,
    address guardian
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tribe` | contract ERC20VotesComp |  |
| `timelock` | contract ICompoundTimelock |  |
| `guardian` | address |  |

### votingDelay

```solidity
function votingDelay() public returns (uint256)
```

module:user-config

Delay, in number of block, between the proposal is created and the vote starts. This can be increassed to
leave time for users to buy voting power, of delegate it, before the voting of a proposal starts.

### votingPeriod

```solidity
function votingPeriod() public returns (uint256)
```

module:user-config

Delay, in number of blocks, between the vote start and vote ends.

NOTE: The {votingDelay} can delay the start of the vote. This must be considered when setting the voting
duration compared to the voting delay.

### quorum

```solidity
function quorum(
    uint256 
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### proposalThreshold

```solidity
function proposalThreshold() public returns (uint256)
```

Part of the Governor Bravo's interface: _"The number of votes required in order for a voter to become a proposer"_.

### setVotingDelay

```solidity
function setVotingDelay(
    uint256 newVotingDelay
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newVotingDelay` | uint256 |  |

### setVotingPeriod

```solidity
function setVotingPeriod(
    uint256 newVotingPeriod
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newVotingPeriod` | uint256 |  |

### setQuorum

```solidity
function setQuorum(
    uint256 newQuorum
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newQuorum` | uint256 |  |

### setProposalThreshold

```solidity
function setProposalThreshold(
    uint256 newProposalThreshold
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newProposalThreshold` | uint256 |  |

### __rollback

```solidity
function __rollback(
    uint256 eta
) external
```

one-time option to roll back the DAO to old GovernorAlpha

guardian-only, and expires after the deadline. This function is here as a fallback in case something goes wrong.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `eta` | uint256 |  |

### __executeRollback

```solidity
function __executeRollback() external
```

complete the rollback

### getVotes

```solidity
function getVotes(
    address account,
    uint256 blockNumber
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `blockNumber` | uint256 |  |

### state

```solidity
function state(
    uint256 proposalId
) public returns (enum IGovernor.ProposalState)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

### propose

```solidity
function propose(
    address[] targets,
    uint256[] values,
    bytes[] calldatas,
    string description
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `calldatas` | bytes[] |  |
| `description` | string |  |

### _execute

```solidity
function _execute(
    uint256 proposalId,
    address[] targets,
    uint256[] values,
    bytes[] calldatas,
    bytes32 descriptionHash
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `calldatas` | bytes[] |  |
| `descriptionHash` | bytes32 |  |

### _cancel

```solidity
function _cancel(
    address[] targets,
    uint256[] values,
    bytes[] calldatas,
    bytes32 descriptionHash
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `calldatas` | bytes[] |  |
| `descriptionHash` | bytes32 |  |

### _executor

```solidity
function _executor() internal returns (address)
```

### supportsInterface

```solidity
function supportsInterface(
    bytes4 interfaceId
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `interfaceId` | bytes4 |  |

## Events

### QuorumUpdated

```solidity
event QuorumUpdated(
    uint256 oldQuorum,
    uint256 newQuorum
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldQuorum` | uint256 |  |
| `newQuorum` | uint256 |  |
### VotingDelayUpdated

```solidity
event VotingDelayUpdated(
    uint256 oldVotingDelay,
    uint256 newVotingDelay
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldVotingDelay` | uint256 |  |
| `newVotingDelay` | uint256 |  |
### VotingPeriodUpdated

```solidity
event VotingPeriodUpdated(
    uint256 oldVotingPeriod,
    uint256 newVotingPeriod
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldVotingPeriod` | uint256 |  |
| `newVotingPeriod` | uint256 |  |
### ProposalThresholdUpdated

```solidity
event ProposalThresholdUpdated(
    uint256 oldProposalThreshold,
    uint256 newProposalThreshold
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldProposalThreshold` | uint256 |  |
| `newProposalThreshold` | uint256 |  |
### RollbackQueued

```solidity
event RollbackQueued(
    uint256 eta
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `eta` | uint256 |  |
### Rollback

```solidity
event Rollback(
)
```

