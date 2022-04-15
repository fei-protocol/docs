# OptimisticTimelock

## Functions

### constructor

```solidity
function constructor(
    address core_,
    uint256 minDelay,
    address[] proposers,
    address[] executors
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `core_` | address |  |
| `minDelay` | uint256 |  |
| `proposers` | address[] |  |
| `executors` | address[] |  |

### becomeAdmin

```solidity
function becomeAdmin() public
```

allow guardian or governor to assume timelock admin roles
        This more elegantly achieves optimistic timelock as follows:
        - veto: grant self PROPOSER_ROLE and cancel
        - pause proposals: revoke PROPOSER_ROLE from target
        - pause execution: revoke EXECUTOR_ROLE from target
        - set new proposer: revoke old proposer and add new one

        In addition it allows for much more granular and flexible access for multisig operators

