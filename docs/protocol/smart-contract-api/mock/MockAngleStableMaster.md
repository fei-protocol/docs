# MockAngleStableMaster

## Functions

### constructor

```solidity
function constructor(
    contract MockERC20 _agToken,
    uint256 _usdPerAgToken
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_agToken` | contract MockERC20 |  |
| `_usdPerAgToken` | uint256 |  |

### setFee

```solidity
function setFee(
    uint256 _fee
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_fee` | uint256 |  |

### mint

```solidity
function mint(
    uint256 amount,
    address user,
    address poolManager,
    uint256 minStableAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `user` | address |  |
| `poolManager` | address |  |
| `minStableAmount` | uint256 |  |

### burn

```solidity
function burn(
    uint256 amount,
    address burner,
    address dest,
    address poolManager,
    uint256 minCollatAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `burner` | address |  |
| `dest` | address |  |
| `poolManager` | address |  |
| `minCollatAmount` | uint256 |  |

