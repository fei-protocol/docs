# PCVSentinel

The PCV Sentinel is a automated extension of the Guardian.
The Guardian can add Guards to the PCV Sentinel. Guards run checks
and provide addresses and calldata for the Sentinel to run, if needed.

the PCV Sentinel should be granted the role Guardian

## Functions

### constructor

```solidity
function constructor(
    address _core
) public
```

Creates a PCV Sentinel with no guards

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | the Tribe core address |

### isGuard

```solidity
function isGuard(
    address guard
) external returns (bool)
```

returns whether or not the given address is a guard

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address | the address to check |

### allGuards

```solidity
function allGuards() external returns (address[] all)
```

returns a list of all guards

### knight

```solidity
function knight(
    address guard
) external
```

adds a guard contract to the PCV Sentinel

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address | the guard-contract to add |

### slay

```solidity
function slay(
    address traitor
) external
```

removes a guard

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `traitor` | address | the guard-contract to remove |

### protec

```solidity
function protec(
    address guard
) external
```

checks the guard and runs its protec actions if needed

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address | the guard to activate |

### receive

```solidity
function receive() external
```

receive() and fallback() have been added and made payable for cases where the contract
needs to be able to receive eth as part of an operation - such as receiving an incentivization
(in eth) from a contract as part of operation. For similar (and not unlikely) edge cases,
the contract also has the capability of sending eth inside when instructed by a guard to do so.

### fallback

```solidity
function fallback() external
```

