# IFei

## Functions

### burn

```solidity
function burn(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
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

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `owner` | address |  |
| `spender` | address |  |
| `value` | uint256 |  |
| `deadline` | uint256 |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

### burnFrom

```solidity
function burnFrom(
    address account,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

### mint

```solidity
function mint(
    address account,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

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
| `account` | address |  |
| `incentive` | address |  |

### incentiveContract

```solidity
function incentiveContract(
    address account
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

## Events

### Minting

```solidity
event Minting(
    address _to,
    address _minter,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_minter` | address |  |
| `_amount` | uint256 |  |
### Burning

```solidity
event Burning(
    address _to,
    address _burner,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_to` | address |  |
| `_burner` | address |  |
| `_amount` | uint256 |  |
### IncentiveContractUpdate

```solidity
event IncentiveContractUpdate(
    address _incentivized,
    address _incentiveContract
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_incentivized` | address |  |
| `_incentiveContract` | address |  |

