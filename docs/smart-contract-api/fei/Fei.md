# Fei

## Functions

### constructor

```solidity
function constructor(
    address core
) public
```

Fei token constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `core` | address | Fei Core address to reference |

### setIncentiveContract

```solidity
function setIncentiveContract(
    address account,
    address incentive
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | the account to incentivize |
| `incentive` | address | the associated incentive contract |

### mint

```solidity
function mint(
    address account,
    uint256 amount
) external
```

mint FEI tokens

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | the account to mint to |
| `amount` | uint256 | the amount to mint |

### burn

```solidity
function burn(
    uint256 amount
) public
```

burn FEI tokens from caller

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | the amount to burn |

### burnFrom

```solidity
function burnFrom(
    address account,
    uint256 amount
) public
```

burn FEI tokens from specified account

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address | the account to burn from |
| `amount` | uint256 | the amount to burn |

### _transfer

```solidity
function _transfer(
    address sender,
    address recipient,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address |  |
| `recipient` | address |  |
| `amount` | uint256 |  |

### _checkAndApplyIncentives

```solidity
function _checkAndApplyIncentives(
    address sender,
    address recipient,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sender` | address |  |
| `recipient` | address |  |
| `amount` | uint256 |  |

### permit

```solidity
function permit(
    address owner,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

permit spending of FEI

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address | the FEI holder |
| `spender` | address | the approved operator |
| `value` | uint256 | the amount approved |
| `deadline` | uint256 | the deadline after which the approval is no longer valid |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

