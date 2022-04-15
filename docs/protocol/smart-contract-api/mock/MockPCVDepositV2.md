# MockPCVDepositV2

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _token,
    uint256 _resistantBalance,
    uint256 _resistantProtocolOwnedFei
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_token` | address |  |
| `_resistantBalance` | uint256 |  |
| `_resistantProtocolOwnedFei` | uint256 |  |

### receive

```solidity
function receive() external
```

### set

```solidity
function set(
    uint256 _resistantBalance,
    uint256 _resistantProtocolOwnedFei
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_resistantBalance` | uint256 |  |
| `_resistantProtocolOwnedFei` | uint256 |  |

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() external returns (uint256, uint256)
```

gets the resistant token balance and protocol owned fei of this deposit

### deposit

```solidity
function deposit() external
```

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### withdrawERC20

```solidity
function withdrawERC20(
    address token,
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

### withdrawETH

```solidity
function withdrawETH(
    address payable to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address payable |  |
| `amount` | uint256 |  |

### balance

```solidity
function balance() external returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

