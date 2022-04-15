# TokenTimelock

## Functions

### constructor

```solidity
function constructor(
    address _beneficiary,
    uint256 _duration,
    uint256 _cliffSeconds,
    address _lockedToken,
    address _clawbackAdmin
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_beneficiary` | address |  |
| `_duration` | uint256 |  |
| `_cliffSeconds` | uint256 |  |
| `_lockedToken` | address |  |
| `_clawbackAdmin` | address |  |

### release

```solidity
function release(
    address to,
    uint256 amount
) external
```

releases `amount` unlocked tokens to address `to`

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

releases maximum unlocked tokens to address `to`

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |

### totalToken

```solidity
function totalToken() public returns (uint256)
```

the total amount of tokens held by timelock

### alreadyReleasedAmount

```solidity
function alreadyReleasedAmount() public returns (uint256)
```

amount of tokens released to beneficiary

### availableForRelease

```solidity
function availableForRelease() public returns (uint256)
```

amount of held tokens unlocked and available for release

### setPendingBeneficiary

```solidity
function setPendingBeneficiary(
    address _pendingBeneficiary
) public
```

current beneficiary can appoint new beneficiary, which must be accepted

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pendingBeneficiary` | address |  |

### acceptBeneficiary

```solidity
function acceptBeneficiary() public
```

pending beneficiary accepts new beneficiary

### clawback

```solidity
function clawback() public
```

### passedCliff

```solidity
function passedCliff() public returns (bool)
```

### _proportionAvailable

```solidity
function _proportionAvailable(
    uint256 initialBalance,
    uint256 elapsed,
    uint256 duration
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `initialBalance` | uint256 |  |
| `elapsed` | uint256 |  |
| `duration` | uint256 |  |

### _setBeneficiary

```solidity
function _setBeneficiary(
    address newBeneficiary
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBeneficiary` | address |  |

### _setLockedToken

```solidity
function _setLockedToken(
    address tokenAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAddress` | address |  |

### _release

```solidity
function _release(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

