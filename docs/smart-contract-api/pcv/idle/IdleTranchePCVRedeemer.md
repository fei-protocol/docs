# IIdleTrancheMinter

## Functions

### withdrawAA

```solidity
function withdrawAA(
    uint256 _amount
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_amount` | uint256 |  |

### token

```solidity
function token() external returns (contract IERC20)
```

# IdleTranchePCVRedeemer

## Functions

### constructor

```solidity
function constructor(
    address _target,
    contract IIdleTrancheMinter _idleToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_target` | address |  |
| `_idleToken` | contract IIdleTrancheMinter |  |

### redeem

```solidity
function redeem(
    uint256 amount
) external
```

redeem Idle Token shares

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | asset amount to redeem |

### sweep

```solidity
function sweep(
    contract IERC20 token,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | contract IERC20 |  |
| `amount` | uint256 |  |

