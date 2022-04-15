# REPTbRedeemer

## Functions

### constructor

```solidity
function constructor(
    contract IERC20 _reptB,
    contract IERC20 _fei
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_reptB` | contract IERC20 |  |
| `_fei` | contract IERC20 |  |

### exchange

```solidity
function exchange(
    address to,
    uint256 amount
) public
```

call to exchange REPT-b for FEI

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the destination address |
| `amount` | uint256 | the amount to exchange |

## Events

### Exchange

```solidity
event Exchange(
    address from,
    address to,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `to` | address |  |
| `amount` | uint256 |  |

