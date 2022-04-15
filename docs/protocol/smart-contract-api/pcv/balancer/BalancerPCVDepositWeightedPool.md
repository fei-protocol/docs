# BalancerPCVDepositWeightedPool

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _vault,
    address _rewards,
    bytes32 _poolId,
    uint256 _maximumSlippageBasisPoints,
    address _token,
    contract IOracle[] _tokenOracles
) public
```

Balancer PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_vault` | address | Balancer vault |
| `_rewards` | address | Balancer rewards (the MerkleOrchard) |
| `_poolId` | bytes32 | Balancer poolId to deposit in |
| `_maximumSlippageBasisPoints` | uint256 | Maximum slippage basis points when depositing |
| `_token` | address | Address of the ERC20 to manage / do accounting with |
| `_tokenOracles` | contract IOracle[] | oracle for price feeds of the tokens in pool |

### setOracle

```solidity
function setOracle(
    address _token,
    address _newOracle
) external
```

sets the oracle for a token in this deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |
| `_newOracle` | address |  |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit, expressed in "token"

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256 _resistantBalance, uint256 _resistantFei)
```

gets the resistant token balance and protocol owned fei of this deposit

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### deposit

```solidity
function deposit() external
```

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amount
) external
```

withdraw tokens from the PCV allocation

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send PCV to |
| `amount` | uint256 | of tokens withdrawn
Note: except for ERC20/FEI pool2s, this function will not withdraw tokens
in the right proportions for the pool, so only use this to withdraw small
amounts comparatively to the pool size. For large withdrawals, it is
preferrable to use exitPool() and then withdrawERC20(). |

### _readOracles

```solidity
function _readOracles() internal returns (uint256[] underlyingPrices)
```

read token oracles and revert if one of them is invalid

### _getBPTPrice

```solidity
function _getBPTPrice(
    uint256[] underlyingPrices
) internal returns (uint256 bptPrice)
```

Calculates the value of Balancer pool tokens using the logic described here:
https://docs.gyro.finance/learn/oracles/bpt-oracle
This is robust to price manipulations within the Balancer pool.
Courtesy of Gyroscope protocol, used with permission. See the original file here :
https://github.com/gyrostable/core/blob/master/contracts/GyroPriceOracle.sol#L109-L167

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlyingPrices` | uint256[] | = array of prices for underlying assets in the pool,
  given in USD, on a base of 18 decimals. |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `bptPrice` | uint256 | = the price of balancer pool tokens, in USD, on a base
  of 18 decimals. |

## Events

### OracleUpdate

```solidity
event OracleUpdate(
    address _sender,
    address _token,
    address _oldOracle,
    address _newOracle
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_sender` | address |  |
| `_token` | address |  |
| `_oldOracle` | address |  |
| `_newOracle` | address |  |

