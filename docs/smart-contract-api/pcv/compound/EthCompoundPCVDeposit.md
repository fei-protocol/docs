# CEther

## Functions

### mint

```solidity
function mint() external
```

# EthCompoundPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _cToken
) public
```

Compound ETH PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_cToken` | address | Compound cToken to deposit |

### receive

```solidity
function receive() external
```

### deposit

```solidity
function deposit() external
```

deposit ETH to Compound

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

