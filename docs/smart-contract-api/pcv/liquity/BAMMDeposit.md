# BAMMDeposit

a contract to read manipulation resistant LUSD from BAMM

## Functions

### constructor

```solidity
function constructor(
    address core
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `core` | address |  |

### receive

```solidity
function receive() external
```

### deposit

```solidity
function deposit() external
```

deposit into B Protocol BAMM

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amount
) external
```

withdraw LUSD from B Protocol BAMM

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### balance

```solidity
function balance() public returns (uint256)
```

report LUSD balance of BAMM

### claimRewards

```solidity
function claimRewards() public
```

