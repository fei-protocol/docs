# MockMerkleOrchard

## Functions

### constructor

```solidity
function constructor(
    address _balToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_balToken` | address |  |

### claimDistributions

```solidity
function claimDistributions(
    address claimer,
    struct IMerkleOrchard.Claim[] claims,
    contract IERC20[] tokens
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `claimer` | address |  |
| `claims` | struct IMerkleOrchard.Claim[] |  |
| `tokens` | contract IERC20[] |  |

