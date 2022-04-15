# ITribe

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

# ITimelockedDelegator

## Functions

### delegate

```solidity
function delegate(
    address delegatee,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |
| `amount` | uint256 |  |

### undelegate

```solidity
function undelegate(
    address delegatee
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |

### delegateContract

```solidity
function delegateContract(
    address delegatee
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |

### delegateAmount

```solidity
function delegateAmount(
    address delegatee
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `delegatee` | address |  |

### totalDelegated

```solidity
function totalDelegated() external returns (uint256)
```

### tribe

```solidity
function tribe() external returns (contract ITribe)
```

## Events

### Delegate

```solidity
event Delegate(
    address _delegatee,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_delegatee` | address |  |
| `_amount` | uint256 |  |
### Undelegate

```solidity
event Undelegate(
    address _delegatee,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_delegatee` | address |  |
| `_amount` | uint256 |  |

