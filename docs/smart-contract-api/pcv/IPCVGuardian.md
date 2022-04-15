# IPCVGuardian

an interface for defining how the PCVGuardian functions

any implementation of this contract should be granted the roles of Guardian and PCVController in order to work correctly

## Functions

### isSafeAddress

```solidity
function isSafeAddress(
    address pcvDeposit
) external returns (bool)
```

returns true if the the provided address is a valid destination to withdraw funds to

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address | the address to check |

### getSafeAddresses

```solidity
function getSafeAddresses() external returns (address[])
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
    address[] safeAddresses
) external
```

batch version of setSafeAddress

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `safeAddresses` | address[] | the addresses to set as safe, as calldata |

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
    address[] safeAddresses
) external
```

batch version of unsetSafeAddresses

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `safeAddresses` | address[] | the addresses to un-set as safe |

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
| `token` | address | the token to withdraw |
| `amount` | uint256 | the amount of funds to withdraw |
| `pauseAfter` | bool | whether to pause the pcv after withdrawing |
| `depositAfter` | bool | if true, attempts to deposit to the target PCV deposit |

## Events

### SafeAddressAdded

```solidity
event SafeAddressAdded(
    address safeAddress
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `safeAddress` | address |  |
### SafeAddressRemoved

```solidity
event SafeAddressRemoved(
    address safeAddress
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `safeAddress` | address |  |
### PCVGuardianWithdrawal

```solidity
event PCVGuardianWithdrawal(
    address pcvDeposit,
    address destination,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address |  |
| `destination` | address |  |
| `amount` | uint256 |  |
### PCVGuardianETHWithdrawal

```solidity
event PCVGuardianETHWithdrawal(
    address pcvDeposit,
    address destination,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address |  |
| `destination` | address |  |
| `amount` | uint256 |  |
### PCVGuardianERC20Withdrawal

```solidity
event PCVGuardianERC20Withdrawal(
    address pcvDeposit,
    address destination,
    address token,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvDeposit` | address |  |
| `destination` | address |  |
| `token` | address |  |
| `amount` | uint256 |  |

