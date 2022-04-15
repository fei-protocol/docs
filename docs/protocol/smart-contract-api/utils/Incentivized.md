# Incentivized

## Functions

### constructor

```solidity
function constructor(
    uint256 _incentiveAmount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_incentiveAmount` | uint256 |  |

### setIncentiveAmount

```solidity
function setIncentiveAmount(
    uint256 newIncentiveAmount
) public
```

set the incentiveAmount

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newIncentiveAmount` | uint256 |  |

### _incentivize

```solidity
function _incentivize() internal
```

incentivize a call with incentiveAmount FEI rewards

no-op if the contract does not have Minter role

## Events

### IncentiveUpdate

```solidity
event IncentiveUpdate(
    uint256 oldIncentiveAmount,
    uint256 newIncentiveAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldIncentiveAmount` | uint256 |  |
| `newIncentiveAmount` | uint256 |  |

