# VotiumBriber

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IERC20 _token,
    contract IVotiumBribe _votiumBribe
) public
```

VotiumBriber constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_token` | contract IERC20 | The token spent for bribes |
| `_votiumBribe` | contract IVotiumBribe | The Votium bribe contract |

### bribe

```solidity
function bribe(
    bytes32 _proposal,
    uint256 _choiceIndex
) public
```

Spend tokens on Votium to bribe for a given pool.

the call will revert if Votium has not called initiateProposal with
the _proposal ID, if _choiceIndex is out of range, or of block.timestamp
is after the deadline for bribing (usually 6 hours before Convex snapshot
vote ends).

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_proposal` | bytes32 | id of the proposal on snapshot |
| `_choiceIndex` | uint256 | index of the pool in the snapshot vote to vote for |

### withdrawERC20

```solidity
function withdrawERC20(
    address token,
    address to,
    uint256 amount
) external
```

withdraw ERC20 from the contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | address of the ERC20 to send |
| `to` | address | address destination of the ERC20 |
| `amount` | uint256 | quantity of ERC20 to send |

