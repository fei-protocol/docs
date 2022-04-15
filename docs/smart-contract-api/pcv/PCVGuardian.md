# PCVGuardian

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address[] _safeAddresses
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_safeAddresses` | address[] |  |

### isSafeAddress

```solidity
function isSafeAddress(
    address pcvDeposit
) public returns (bool)
```

returns true if the the provided address is a valid destination to withdraw funds to

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address to check |

### getSafeAddresses

```solidity
function getSafeAddresses() public returns (address[])
```

returns all safe addresses

### setSafeAddress

```solidity
function setSafeAddress(
    address pcvDeposit
) external
```

governor-only method to set an address as "safe" to withdraw funds to

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address to set as safe |

### setSafeAddresses

```solidity
function setSafeAddresses(
    address[] _safeAddresses
) external
```

batch version of setSafeAddress

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_safeAddresses` | address[] | the addresses to set as safe, as calldata |

### unsetSafeAddress

```solidity
function unsetSafeAddress(
    address pcvDeposit
) external
```

governor-or-guardian-only method to un-set an address as "safe" to withdraw funds to

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address to un-set as safe |

### unsetSafeAddresses

```solidity
function unsetSafeAddresses(
    address[] _safeAddresses
) external
```

batch version of unsetSafeAddresses

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_safeAddresses` | address[] | the addresses to un-set as safe |

### withdrawToSafeAddress

```solidity
function withdrawToSafeAddress(
    address pcvDeposit,
    address safeAddress,
    uint256 amount,
    bool pauseAfter,
    bool depositAfter
) external
```

governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address of the pcv deposit contract |
| `safeAddress` | address | the destination address to withdraw to |
| `amount` | uint256 | the amount to withdraw |
| `pauseAfter` | bool | if true, the pcv contract will be paused after the withdraw |
| `depositAfter` | bool | if true, attempts to deposit to the target PCV deposit |

### withdrawETHToSafeAddress

```solidity
function withdrawETHToSafeAddress(
    address pcvDeposit,
    address payable safeAddress,
    uint256 amount,
    bool pauseAfter,
    bool depositAfter
) external
```

governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address of the pcv deposit contract |
| `safeAddress` | address payable | the destination address to withdraw to |
| `amount` | uint256 | the amount of tokens to withdraw |
| `pauseAfter` | bool | if true, the pcv contract will be paused after the withdraw |
| `depositAfter` | bool | if true, attempts to deposit to the target PCV deposit |

### withdrawERC20ToSafeAddress

```solidity
function withdrawERC20ToSafeAddress(
    address pcvDeposit,
    address safeAddress,
    address token,
    uint256 amount,
    bool pauseAfter,
    bool depositAfter
) external
```

governor-or-guardian-only method to withdraw funds from a pcv deposit, by calling the withdraw() method on it

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the deposit to pull funds from |
| `safeAddress` | address | the destination address to withdraw to |
| `token` | address |  |
| `amount` | uint256 | the amount of funds to withdraw |
| `pauseAfter` | bool | whether to pause the pcv after withdrawing |
| `depositAfter` | bool | if true, attempts to deposit to the target PCV deposit |

### _setSafeAddress

```solidity
function _setSafeAddress(
    address anAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `anAddress` | address |  |

### _unsetSafeAddress

```solidity
function _unsetSafeAddress(
    address anAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `anAddress` | address |  |

