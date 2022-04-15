# FuseGuardian

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract Unitroller _comptroller
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | address of core contract |
| `_comptroller` | contract Unitroller | the fuse comptroller |

### _setMarketSupplyCaps

```solidity
function _setMarketSupplyCaps(
    contract CToken[] cTokens,
    uint256[] newSupplyCaps
) external
```

Set the given supply caps for the given cToken markets. Supplying that brings total underlying supply to or above supply cap will revert.

Admin or borrowCapGuardian function to set the supply caps. A supply cap of 0 corresponds to unlimited supplying.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] | The addresses of the markets (tokens) to change the supply caps for |
| `newSupplyCaps` | uint256[] | The new supply cap values in underlying to be set. A value of 0 corresponds to unlimited supplying. |

### _setMarketSupplyCapsByUnderlying

```solidity
function _setMarketSupplyCapsByUnderlying(
    address[] underlyings,
    uint256[] newSupplyCaps
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlyings` | address[] |  |
| `newSupplyCaps` | uint256[] |  |

### _setMarketSupplyCapsInternal

```solidity
function _setMarketSupplyCapsInternal(
    contract CToken[] cTokens,
    uint256[] newSupplyCaps
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] |  |
| `newSupplyCaps` | uint256[] |  |

### _underlyingToCTokens

```solidity
function _underlyingToCTokens(
    address[] underlyings
) internal returns (contract CToken[])
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlyings` | address[] |  |

### _setMarketBorrowCaps

```solidity
function _setMarketBorrowCaps(
    contract CToken[] cTokens,
    uint256[] newBorrowCaps
) external
```

Set the given borrow caps for the given cToken markets. Borrowing that brings total borrows to or above borrow cap will revert.

Admin or borrowCapGuardian function to set the borrow caps. A borrow cap of 0 corresponds to unlimited borrowing.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] | The addresses of the markets (tokens) to change the borrow caps for |
| `newBorrowCaps` | uint256[] | The new borrow cap values in underlying to be set. A value of 0 corresponds to unlimited borrowing. |

### _setMarketBorrowCapsInternal

```solidity
function _setMarketBorrowCapsInternal(
    contract CToken[] cTokens,
    uint256[] newBorrowCaps
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] |  |
| `newBorrowCaps` | uint256[] |  |

### _setMarketBorrowCapsByUnderlying

```solidity
function _setMarketBorrowCapsByUnderlying(
    address[] underlyings,
    uint256[] newBorrowCaps
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlyings` | address[] |  |
| `newBorrowCaps` | uint256[] |  |

### _setBorrowCapGuardian

```solidity
function _setBorrowCapGuardian(
    address newBorrowCapGuardian
) external
```

Admin function to change the Borrow Cap Guardian

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBorrowCapGuardian` | address | The address of the new Borrow Cap Guardian |

### _setPauseGuardian

```solidity
function _setPauseGuardian(
    address newPauseGuardian
) external returns (uint256)
```

Admin function to change the Pause Guardian

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPauseGuardian` | address | The address of the new Pause Guardian |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | uint 0=success, otherwise a failure. (See enum Error for details) |

### _setMintPausedByUnderlying

```solidity
function _setMintPausedByUnderlying(
    address underlying,
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlying` | address |  |
| `state` | bool |  |

### _setMintPaused

```solidity
function _setMintPaused(
    contract CToken cToken,
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `state` | bool |  |

### _setMintPausedInternal

```solidity
function _setMintPausedInternal(
    contract CToken cToken,
    bool state
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `state` | bool |  |

### _setBorrowPausedByUnderlying

```solidity
function _setBorrowPausedByUnderlying(
    address underlying,
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlying` | address |  |
| `state` | bool |  |

### _setBorrowPausedInternal

```solidity
function _setBorrowPausedInternal(
    contract CToken cToken,
    bool state
) internal returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `state` | bool |  |

### _setBorrowPaused

```solidity
function _setBorrowPaused(
    contract CToken cToken,
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `state` | bool |  |

### _setTransferPaused

```solidity
function _setTransferPaused(
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `state` | bool |  |

### _setSeizePaused

```solidity
function _setSeizePaused(
    bool state
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `state` | bool |  |

