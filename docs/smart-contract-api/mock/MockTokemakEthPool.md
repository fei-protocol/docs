# MockTokemakEthPool

## Functions

### constructor

```solidity
function constructor(
    address _weth
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_weth` | address |  |

### receive

```solidity
function receive() external
```

### underlyer

```solidity
function underlyer() external returns (address)
```

### requestWithdrawal

```solidity
function requestWithdrawal(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### deposit

```solidity
function deposit(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 requestedAmount,
    bool asEth
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `requestedAmount` | uint256 |  |
| `asEth` | bool |  |

