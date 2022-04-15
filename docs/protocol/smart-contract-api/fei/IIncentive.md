# IIncentive

Called by FEI token contract when transferring with an incentivized address

should be appointed as a Minter or Burner as needed

## Functions

### incentivize

```solidity
function incentivize(
    address sender,
    address receiver,
    address operator,
    uint256 amount
) external
```

apply incentives on transfer

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address | the sender address of the FEI |
| `receiver` | address | the receiver address of the FEI |
| `operator` | address | the operator (msg.sender) of the transfer |
| `amount` | uint256 | the amount of FEI transferred |

