# Delegatee

## Functions

### constructor

```solidity
function constructor(
    address _delegatee,
    address _tribe
) public
```

Delegatee constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_delegatee` | address | the address to delegate TRIBE to |
| `_tribe` | address | the TRIBE token address |

### withdraw

```solidity
function withdraw() public
```

send TRIBE back to timelock and selfdestruct

# TimelockedDelegator

allows the timelocked TRIBE to be delegated by the beneficiary while locked

## Functions

### constructor

```solidity
function constructor(
    address _tribe,
    address _beneficiary,
    uint256 _duration
) public
```

Delegatee constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribe` | address | the TRIBE token address |
| `_beneficiary` | address | default delegate, admin, and timelock beneficiary |
| `_duration` | uint256 | duration of the token timelock window |

### delegate

```solidity
function delegate(
    address delegatee,
    uint256 amount
) public
```

delegate locked TRIBE to a delegatee

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address | the target address to delegate to |
| `amount` | uint256 | the amount of TRIBE to delegate. Will increment existing delegated TRIBE |

### undelegate

```solidity
function undelegate(
    address delegatee
) public returns (uint256)
```

return delegated TRIBE to the timelock

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address | the target address to undelegate from |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | the amount of TRIBE returned |

### totalToken

```solidity
function totalToken() public returns (uint256)
```

calculate total TRIBE held plus delegated

used by LinearTokenTimelock to determine the released amount

### acceptBeneficiary

```solidity
function acceptBeneficiary() public
```

accept beneficiary role over timelocked TRIBE. Delegates all held (non-subdelegated) tribe to beneficiary

### _tribeBalance

```solidity
function _tribeBalance() internal returns (uint256)
```

