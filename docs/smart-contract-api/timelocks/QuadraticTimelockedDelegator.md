# IVotingToken

## Functions

### delegate

```solidity
function delegate(
    address delegatee
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |

# QuadraticTimelockedDelegator

allows the timelocked tokens to be delegated by the beneficiary while locked

## Functions

### constructor

```solidity
function constructor(
    address _token,
    address _beneficiary,
    uint256 _duration,
    uint256 _cliff,
    address _clawbackAdmin,
    uint256 _startTime
) public
```

QuadraticTimelockedDelegator constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address | the token address |
| `_beneficiary` | address | admin, and timelock beneficiary |
| `_duration` | uint256 | duration of the token timelock window |
| `_cliff` | uint256 | the seconds before first claim is allowed |
| `_clawbackAdmin` | address | the address which can trigger a clawback |
| `_startTime` | uint256 | the unix epoch for starting timelock. Use 0 to start at deployment |

### acceptBeneficiary

```solidity
function acceptBeneficiary() public
```

accept beneficiary role over timelocked TRIBE

### delegate

```solidity
function delegate(
    address to
) public
```

delegate all held TRIBE to the `to` address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |

