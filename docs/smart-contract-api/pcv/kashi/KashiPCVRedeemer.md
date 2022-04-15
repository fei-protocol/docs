# IKashi

## Functions

### removeAsset

```solidity
function removeAsset(
    address to,
    uint256 fraction
) external returns (uint256 share)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `fraction` | uint256 |  |

# KashiPCVRedeemer

## Functions

### constructor

```solidity
function constructor(
    address _target
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_target` | address |  |

### redeem

```solidity
function redeem(
    contract IKashi pair,
    uint256 fraction
) external
```

redeem Kashi shares

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pair` | contract IKashi | kashi pair to redeem from |
| `fraction` | uint256 | asset fraction to redeem |

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

