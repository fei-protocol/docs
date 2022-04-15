# IPCVSentinel

an interface for defining how the PCVSentinel functions

any implementation of this contract should be granted the Guardian role

## Functions

### isGuard

```solidity
function isGuard(
    address guard
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |

### allGuards

```solidity
function allGuards() external returns (address[] all)
```

### knight

```solidity
function knight(
    address guard
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |

### slay

```solidity
function slay(
    address traitor
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `traitor` | address |  |

### protec

```solidity
function protec(
    address guard
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |

## Events

### Protected

```solidity
event Protected(
    address guard
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |
### GuardAdded

```solidity
event GuardAdded(
    address guard
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |
### GuardRemoved

```solidity
event GuardRemoved(
    address guard
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guard` | address |  |

