# IPCVSwapper

## Functions

### swap

```solidity
function swap() external
```

### setReceivingAddress

```solidity
function setReceivingAddress(
    address _tokenReceivingAddress
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tokenReceivingAddress` | address |  |

### tokenSpent

```solidity
function tokenSpent() external returns (address)
```

### tokenReceived

```solidity
function tokenReceived() external returns (address)
```

### tokenReceivingAddress

```solidity
function tokenReceivingAddress() external returns (address)
```

## Events

### UpdateReceivingAddress

```solidity
event UpdateReceivingAddress(
    address oldTokenReceivingAddress,
    address newTokenReceivingAddress
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTokenReceivingAddress` | address |  |
| `newTokenReceivingAddress` | address |  |
### Swap

```solidity
event Swap(
    address _caller,
    address _tokenSpent,
    address _tokenReceived,
    uint256 _amountSpent,
    uint256 _amountReceived
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_tokenSpent` | address |  |
| `_tokenReceived` | address |  |
| `_amountSpent` | uint256 |  |
| `_amountReceived` | uint256 |  |

