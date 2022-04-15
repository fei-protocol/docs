# IExchanger

## Functions

### exchange

```solidity
function exchange(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

# ExchangerTimelock

## Functions

### constructor

```solidity
function constructor(
    contract IExchanger _exchanger,
    address _timelock
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_exchanger` | contract IExchanger |  |
| `_timelock` | address |  |

### exchangeToTimelock

```solidity
function exchangeToTimelock() external
```

exchange RGT to TRIBE and send to timelock

### recoverRGT

```solidity
function recoverRGT() external
```

guardian sends back RGT

