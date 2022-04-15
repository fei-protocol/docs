# IVeToken

## Functions

### balanceOf

```solidity
function balanceOf(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### locked

```solidity
function locked(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### create_lock

```solidity
function create_lock(
    uint256 value,
    uint256 unlock_time
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | uint256 |  |
| `unlock_time` | uint256 |  |

### increase_amount

```solidity
function increase_amount(
    uint256 value
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `value` | uint256 |  |

### increase_unlock_time

```solidity
function increase_unlock_time(
    uint256 unlock_time
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `unlock_time` | uint256 |  |

### withdraw

```solidity
function withdraw() external
```

### locked__end

```solidity
function locked__end(
    address 
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### checkpoint

```solidity
function checkpoint() external
```

# VoteEscrowTokenManager

## Functions

### constructor

```solidity
function constructor(
    contract IERC20 _liquidToken,
    contract IVeToken _veToken,
    uint256 _lockDuration
) internal
```

VoteEscrowTokenManager token Snapshot Delegator PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_liquidToken` | contract IERC20 | the token to lock for vote-escrow |
| `_veToken` | contract IVeToken | the vote-escrowed token used in governance |
| `_lockDuration` | uint256 | amount of time (in seconds) tokens will  be vote-escrowed for |

### setLockDuration

```solidity
function setLockDuration(
    uint256 newLockDuration
) external
```

Set the amount of time tokens will be vote-escrowed for in lock() calls

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newLockDuration` | uint256 |  |

### lock

```solidity
function lock() external
```

Deposit tokens to get veTokens. Set lock duration to lockDuration.
The only way to withdraw tokens will be to pause this contract
for lockDuration and then call exitLock().

### exitLock

```solidity
function exitLock() external
```

Exit the veToken lock. For this function to be called and not
revert, tokens had to be locked previously, and the contract must have
been paused for lockDuration in order to prevent lock extensions
by calling lock(). This function will recover tokens on the contract,
which can then be moved by calling withdraw() as a PCVController if the
contract is also a PCVDeposit, for instance.

### _totalTokensManaged

```solidity
function _totalTokensManaged() internal returns (uint256)
```

returns total balance of tokens, vote-escrowed or liquid.

## Events

### Lock

```solidity
event Lock(
    uint256 cummulativeTokensLocked,
    uint256 lockHorizon
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cummulativeTokensLocked` | uint256 |  |
| `lockHorizon` | uint256 |  |
### Unlock

```solidity
event Unlock(
    uint256 tokensUnlocked
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokensUnlocked` | uint256 |  |

