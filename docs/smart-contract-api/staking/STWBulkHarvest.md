# STWBulkHarvest

contract to bulk harvest multiple Staking Token Wrappers in a single transaction
stateless contract with no storage and can only call harvest on the STW's

## Functions

### bulkHarvest

```solidity
function bulkHarvest(
    contract StakingTokenWrapper[] stw
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `stw` | contract StakingTokenWrapper[] |  |

