# ISmartYield

## Functions

### sellTokens

```solidity
function sellTokens(
    uint256 tokenAmount_,
    uint256 minUnderlying_,
    uint256 deadline_
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAmount_` | uint256 |  |
| `minUnderlying_` | uint256 |  |
| `deadline_` | uint256 |  |

### transfer

```solidity
function transfer(
    address account,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |
| `amount` | uint256 |  |

# SmartYieldRedeemer

## Functions

### constructor

```solidity
function constructor(
    address _target,
    contract IERC20 _underlying
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_target` | address |  |
| `_underlying` | contract IERC20 |  |

### redeem

```solidity
function redeem(
    contract ISmartYield bbJunior,
    uint256 amount
) external
```

redeem BarnBridge SmartYield juniors

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `bbJunior` | contract ISmartYield | smart yield token to redeem from |
| `amount` | uint256 | tokens to redeem |

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

