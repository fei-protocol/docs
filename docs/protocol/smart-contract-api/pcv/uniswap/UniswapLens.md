# UniswapLens

a contract to read tokens & fei out of a contract that reports balance in Uniswap LP tokens.

## Functions

### constructor

```solidity
function constructor(
    address _depositAddress,
    address _core,
    address _oracle,
    address _backupOracle
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_depositAddress` | address |  |
| `_core` | address |  |
| `_oracle` | address |  |
| `_backupOracle` | address |  |

### balance

```solidity
function balance() public returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

gets the resistant token balance and protocol owned fei of this deposit

### _ratioOwned

```solidity
function _ratioOwned() internal returns (struct Decimal.D256)
```

ratio of all pair liquidity owned by the deposit contract

### liquidityOwned

```solidity
function liquidityOwned() public returns (uint256)
```

amount of pair liquidity owned by the deposit contract

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | amount of LP tokens |

