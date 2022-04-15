# IMasterContractManager

## Functions

### setMasterContractApproval

```solidity
function setMasterContractApproval(
    address user,
    address masterContract,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `masterContract` | address |  |
| `approved` | bool |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

### withdraw

```solidity
function withdraw(
    address token,
    address from,
    address to,
    uint256 amount,
    uint256 shares
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |
| `shares` | uint256 |  |

### balanceOf

```solidity
function balanceOf(
    address token,
    address owner
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `owner` | address |  |

