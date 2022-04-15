# AngleDelegatorPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _initialDelegate
) public
```

ANGLE token manager

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_initialDelegate` | address | initial delegate for snapshot votes |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit

