# BPTLens

a contract to read manipulation resistant balances from BPTs

## Functions

### constructor

```solidity
function constructor(
    address _token,
    contract IWeightedPool _pool,
    contract IOracle _reportedOracle,
    contract IOracle _otherOracle,
    bool _feiIsReportedIn,
    bool _feiIsOther
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |
| `_pool` | contract IWeightedPool |  |
| `_reportedOracle` | contract IOracle |  |
| `_otherOracle` | contract IOracle |  |
| `_feiIsReportedIn` | bool |  |
| `_feiIsOther` | bool |  |

### balance

```solidity
function balance() public returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

Calculates the manipulation resistant balances of Balancer pool tokens using the logic described here:
https://docs.gyro.finance/learn/oracles/bpt-oracle
This is robust to price manipulations within the Balancer pool.

### _getIdealReserves

```solidity
function _getIdealReserves(
    uint256[] balances,
    uint256[] prices,
    uint256[] weights,
    uint256 i
) internal returns (uint256 reserves)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `balances` | uint256[] |  |
| `prices` | uint256[] |  |
| `weights` | uint256[] |  |
| `i` | uint256 |  |

