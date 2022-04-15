# CErc20Delegator

## Functions

### _setPendingAdmin

```solidity
function _setPendingAdmin(
    address payable newPendingAdmin
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address payable |  |

### _setInterestRateModel

```solidity
function _setInterestRateModel(
    contract InterestRateModel newInterestRateModel
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newInterestRateModel` | contract InterestRateModel |  |

### _setImplementationSafe

```solidity
function _setImplementationSafe(
    address implementation_,
    bool allowResign,
    bytes becomeImplementationData
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `implementation_` | address |  |
| `allowResign` | bool |  |
| `becomeImplementationData` | bytes |  |

### redeemUnderlying

```solidity
function redeemUnderlying(
    uint256 underlying
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlying` | uint256 |  |

### _acceptAdmin

```solidity
function _acceptAdmin() external returns (uint256)
```

### mint

```solidity
function mint(
    uint256 mintAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `mintAmount` | uint256 |  |

### balanceOf

```solidity
function balanceOf(
    address owner
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |

### borrow

```solidity
function borrow(
    uint256 mintAmount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `mintAmount` | uint256 |  |

### balanceOfUnderlying

```solidity
function balanceOfUnderlying(
    address owner
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |

