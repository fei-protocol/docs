# Tribe

## Functions

### constructor

```solidity
function constructor(
    address account,
    address minter_
) public
```

Construct a new Tribe token

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | The initial account to grant all the tokens |
| `minter_` | address | The account with minting ability |

### setMinter

```solidity
function setMinter(
    address minter_
) external
```

Change the minter address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter_` | address | The address of the new minter |

### mint

```solidity
function mint(
    address dst,
    uint256 rawAmount
) external
```

Mint new tokens

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `dst` | address | The address of the destination account |
| `rawAmount` | uint256 | The number of tokens to be minted |

### allowance

```solidity
function allowance(
    address account,
    address spender
) external returns (uint256)
```

Get the number of tokens `spender` is approved to spend on behalf of `account`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | The address of the account holding the funds |
| `spender` | address | The address of the account spending the funds |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The number of tokens approved |

### approve

```solidity
function approve(
    address spender,
    uint256 rawAmount
) external returns (bool)
```

Approve `spender` to transfer up to `amount` from `src`

This will overwrite the approval amount for `spender`
 and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spender` | address | The address of the account which may transfer tokens |
| `rawAmount` | uint256 | The number of tokens that are approved (2^256-1 means infinite) |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | Whether or not the approval succeeded |

### permit

```solidity
function permit(
    address owner,
    address spender,
    uint256 rawAmount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

Triggers an approval from owner to spends

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address | The address to approve from |
| `spender` | address | The address to be approved |
| `rawAmount` | uint256 | The number of tokens that are approved (2^256-1 means infinite) |
| `deadline` | uint256 | The time at which to expire the signature |
| `v` | uint8 | The recovery byte of the signature |
| `r` | bytes32 | Half of the ECDSA signature pair |
| `s` | bytes32 | Half of the ECDSA signature pair |

### balanceOf

```solidity
function balanceOf(
    address account
) external returns (uint256)
```

Get the number of tokens held by the `account`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | The address of the account to get the balance of |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The number of tokens held |

### transfer

```solidity
function transfer(
    address dst,
    uint256 rawAmount
) external returns (bool)
```

Transfer `amount` tokens from `msg.sender` to `dst`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `dst` | address | The address of the destination account |
| `rawAmount` | uint256 | The number of tokens to transfer |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | Whether or not the transfer succeeded |

### transferFrom

```solidity
function transferFrom(
    address src,
    address dst,
    uint256 rawAmount
) external returns (bool)
```

Transfer `amount` tokens from `src` to `dst`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `src` | address | The address of the source account |
| `dst` | address | The address of the destination account |
| `rawAmount` | uint256 | The number of tokens to transfer |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | Whether or not the transfer succeeded |

### delegate

```solidity
function delegate(
    address delegatee
) public
```

Delegate votes from `msg.sender` to `delegatee`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address | The address to delegate votes to |

### delegateBySig

```solidity
function delegateBySig(
    address delegatee,
    uint256 nonce,
    uint256 expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
) public
```

Delegates votes from signatory to `delegatee`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address | The address to delegate votes to |
| `nonce` | uint256 | The contract state required to match the signature |
| `expiry` | uint256 | The time at which to expire the signature |
| `v` | uint8 | The recovery byte of the signature |
| `r` | bytes32 | Half of the ECDSA signature pair |
| `s` | bytes32 | Half of the ECDSA signature pair |

### getCurrentVotes

```solidity
function getCurrentVotes(
    address account
) external returns (uint96)
```

Gets the current votes balance for `account`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | The address to get votes balance |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint96 | The number of current votes for `account` |

### getPriorVotes

```solidity
function getPriorVotes(
    address account,
    uint256 blockNumber
) public returns (uint96)
```

Determine the prior number of votes for an account as of a block number

Block number must be a finalized block or else this function will revert to prevent misinformation.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | The address of the account to check |
| `blockNumber` | uint256 | The block number to get the vote balance at |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint96 | The number of votes the account had as of the given block |

### _delegate

```solidity
function _delegate(
    address delegator,
    address delegatee
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegator` | address |  |
| `delegatee` | address |  |

### _transferTokens

```solidity
function _transferTokens(
    address src,
    address dst,
    uint96 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `src` | address |  |
| `dst` | address |  |
| `amount` | uint96 |  |

### _moveDelegates

```solidity
function _moveDelegates(
    address srcRep,
    address dstRep,
    uint96 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `srcRep` | address |  |
| `dstRep` | address |  |
| `amount` | uint96 |  |

### _writeCheckpoint

```solidity
function _writeCheckpoint(
    address delegatee,
    uint32 nCheckpoints,
    uint96 oldVotes,
    uint96 newVotes
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |
| `nCheckpoints` | uint32 |  |
| `oldVotes` | uint96 |  |
| `newVotes` | uint96 |  |

### safe32

```solidity
function safe32(
    uint256 n,
    string errorMessage
) internal returns (uint32)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `n` | uint256 |  |
| `errorMessage` | string |  |

### safe96

```solidity
function safe96(
    uint256 n,
    string errorMessage
) internal returns (uint96)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `n` | uint256 |  |
| `errorMessage` | string |  |

### add96

```solidity
function add96(
    uint96 a,
    uint96 b,
    string errorMessage
) internal returns (uint96)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint96 |  |
| `b` | uint96 |  |
| `errorMessage` | string |  |

### sub96

```solidity
function sub96(
    uint96 a,
    uint96 b,
    string errorMessage
) internal returns (uint96)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a` | uint96 |  |
| `b` | uint96 |  |
| `errorMessage` | string |  |

### getChainId

```solidity
function getChainId() internal returns (uint256)
```

## Events

### MinterChanged

```solidity
event MinterChanged(
    address minter,
    address newMinter
)
```

An event thats emitted when the minter address is changed

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter` | address |  |
| `newMinter` | address |  |
### DelegateChanged

```solidity
event DelegateChanged(
    address delegator,
    address fromDelegate,
    address toDelegate
)
```

An event thats emitted when an account changes its delegate

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegator` | address |  |
| `fromDelegate` | address |  |
| `toDelegate` | address |  |
### DelegateVotesChanged

```solidity
event DelegateVotesChanged(
    address delegate,
    uint256 previousBalance,
    uint256 newBalance
)
```

An event thats emitted when a delegate account's vote balance changes

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegate` | address |  |
| `previousBalance` | uint256 |  |
| `newBalance` | uint256 |  |
### Transfer

```solidity
event Transfer(
    address from,
    address to,
    uint256 amount
)
```

The standard EIP-20 transfer event

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |
### Approval

```solidity
event Approval(
    address owner,
    address spender,
    uint256 amount
)
```

The standard EIP-20 approval event

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |
| `spender` | address |  |
| `amount` | uint256 |  |

