# IOZGovernor

## Functions

### propose

```solidity
function propose(
    address[] targets,
    uint256[] values,
    bytes[] calldatas,
    string description
) external returns (uint256 proposalId)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `calldatas` | bytes[] |  |
| `description` | string |  |

### castVote

```solidity
function castVote(
    uint256 proposalId,
    uint8 support
) external returns (uint256 weight)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |
| `support` | uint8 |  |

### state

```solidity
function state(
    uint256 proposalId
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `proposalId` | uint256 |  |

# OZGovernorVoter

## Functions

### propose

```solidity
function propose(
    contract IOZGovernor governor,
    address[] targets,
    uint256[] values,
    bytes[] calldatas,
    string description
) external returns (uint256)
```

propose a new proposal on the target governor.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | contract IOZGovernor |  |
| `targets` | address[] |  |
| `values` | uint256[] |  |
| `calldatas` | bytes[] |  |
| `description` | string |  |

### castVote

```solidity
function castVote(
    contract IOZGovernor governor,
    uint256 proposalId,
    uint8 support
) external returns (uint256)
```

cast a vote on a given proposal on the target governor.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | contract IOZGovernor |  |
| `proposalId` | uint256 |  |
| `support` | uint8 |  |

## Events

### Proposed

```solidity
event Proposed(
    contract IOZGovernor governor,
    uint256 proposalId
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | contract IOZGovernor |  |
| `proposalId` | uint256 |  |
### Voted

```solidity
event Voted(
    contract IOZGovernor governor,
    uint256 proposalId,
    uint256 weight,
    uint8 support
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | contract IOZGovernor |  |
| `proposalId` | uint256 |  |
| `weight` | uint256 |  |
| `support` | uint8 |  |

