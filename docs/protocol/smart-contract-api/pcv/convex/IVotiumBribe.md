# IVotiumBribe

## Functions

### depositBribe

```solidity
function depositBribe(
    address _token,
    uint256 _amount,
    bytes32 _proposal,
    uint256 _choiceIndex
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |
| `_amount` | uint256 |  |
| `_proposal` | bytes32 |  |
| `_choiceIndex` | uint256 |  |

### initiateProposal

```solidity
function initiateProposal(
    bytes32 _proposal,
    uint256 _deadline,
    uint256 _maxIndex
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_proposal` | bytes32 |  |
| `_deadline` | uint256 |  |
| `_maxIndex` | uint256 |  |

