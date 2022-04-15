# CErc20

## Functions

### mint

```solidity
function mint(
    uint256 amount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### underlying

```solidity
function underlying() external returns (address)
```

# ERC20CompoundPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _cToken
) public
```

Compound ERC20 PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_cToken` | address | Compound cToken to deposit |

### deposit

```solidity
function deposit() external
```

deposit ERC-20 tokens to Compound

### _transferUnderlying

```solidity
function _transferUnderlying(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

