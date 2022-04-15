# CoreRefPauseableLib

PauseableLib is a library that can be used to pause and unpause contracts, amont other utilities.

This library should only be used on contracts that implement CoreRef.

## Functions

### _requireUnpaused

```solidity
function _requireUnpaused(
    address _pausableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pausableCoreRefAddress` | address |  |

### _requirePaused

```solidity
function _requirePaused(
    address _pausableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pausableCoreRefAddress` | address |  |

### _ensureUnpaused

```solidity
function _ensureUnpaused(
    address _pausableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pausableCoreRefAddress` | address |  |

### _ensurePaused

```solidity
function _ensurePaused(
    address _pausableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pausableCoreRefAddress` | address |  |

### _pause

```solidity
function _pause(
    address _pauseableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pauseableCoreRefAddress` | address |  |

### _unpause

```solidity
function _unpause(
    address _pauseableCoreRefAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pauseableCoreRefAddress` | address |  |

