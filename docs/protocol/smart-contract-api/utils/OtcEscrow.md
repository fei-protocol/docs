# OtcEscrow

## Functions

### constructor

```solidity
function constructor(
    address beneficiary_,
    address recipient_,
    address receivedToken_,
    address sentToken_,
    uint256 receivedAmount_,
    uint256 sentAmount_
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `beneficiary_` | address |  |
| `recipient_` | address |  |
| `receivedToken_` | address |  |
| `sentToken_` | address |  |
| `receivedAmount_` | uint256 |  |
| `sentAmount_` | uint256 |  |

### swap

```solidity
function swap() public
```

Atomically trade specified amount of receivedToken for control over sentToken in vesting contract
Either counterparty may execute swap if sufficient token approval is given by recipient

### revoke

```solidity
function revoke() external
```

Return sentToken to Fei Protocol to revoke escrow deal

### revokeReceivedToken

```solidity
function revokeReceivedToken() external
```

