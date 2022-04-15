# ERC20Dripper

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _target,
    uint256 _frequency,
    uint256 _amountToDrip,
    address _token
) public
```

ERC20 PCV Dripper constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_target` | address | address to drip to |
| `_frequency` | uint256 | frequency of dripping |
| `_amountToDrip` | uint256 | amount to drip on each drip |
| `_token` | address | amount to drip on each drip |

### drip

```solidity
function drip() external
```

drip ERC20 tokens to target

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountUnderlying
) external
```

withdraw tokens from the PCV allocation

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send PCV to |
| `amountUnderlying` | uint256 | of tokens withdrawn |

### deposit

```solidity
function deposit() external
```

no-op

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

## Events

### Dripped

```solidity
event Dripped(
    uint256 amount
)
```

event emitted when tokens are dripped

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

