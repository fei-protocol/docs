# ITokenTimelock

## Functions

### release

```solidity
function release(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### releaseMax

```solidity
function releaseMax(
    address to
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |

### setPendingBeneficiary

```solidity
function setPendingBeneficiary(
    address _pendingBeneficiary
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pendingBeneficiary` | address |  |

### acceptBeneficiary

```solidity
function acceptBeneficiary() external
```

### lockedToken

```solidity
function lockedToken() external returns (contract IERC20)
```

### beneficiary

```solidity
function beneficiary() external returns (address)
```

### pendingBeneficiary

```solidity
function pendingBeneficiary() external returns (address)
```

### initialBalance

```solidity
function initialBalance() external returns (uint256)
```

### availableForRelease

```solidity
function availableForRelease() external returns (uint256)
```

### totalToken

```solidity
function totalToken() external returns (uint256)
```

### alreadyReleasedAmount

```solidity
function alreadyReleasedAmount() external returns (uint256)
```

## Events

### Release

```solidity
event Release(
    address _beneficiary,
    address _recipient,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_beneficiary` | address |  |
| `_recipient` | address |  |
| `_amount` | uint256 |  |
### BeneficiaryUpdate

```solidity
event BeneficiaryUpdate(
    address _beneficiary
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_beneficiary` | address |  |
### PendingBeneficiaryUpdate

```solidity
event PendingBeneficiaryUpdate(
    address _pendingBeneficiary
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pendingBeneficiary` | address |  |

