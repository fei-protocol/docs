# UniswapPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _pair,
    address _router,
    address _oracle,
    address _backupOracle,
    uint256 _maxBasisPointsFromPegLP
) public
```

Uniswap PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_pair` | address | Uniswap Pair to deposit to |
| `_router` | address | Uniswap Router |
| `_oracle` | address | oracle for reference |
| `_backupOracle` | address | the backup oracle to reference |
| `_maxBasisPointsFromPegLP` | uint256 | the max basis points of slippage from peg allowed on LP deposit |

### receive

```solidity
function receive() external
```

### deposit

```solidity
function deposit() external
```

deposit tokens into the PCV allocation

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountUnderlying
) external
```

withdraw tokens from the PCV allocation

has rounding errors on amount to withdraw, can differ from the input "amountUnderlying"

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send PCV to |
| `amountUnderlying` | uint256 | of tokens withdrawn |

### setMaxBasisPointsFromPegLP

```solidity
function setMaxBasisPointsFromPegLP(
    uint256 _maxBasisPointsFromPegLP
) public
```

sets the new slippage parameter for depositing liquidity

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_maxBasisPointsFromPegLP` | uint256 | the new distance in basis points (1/10000) from peg beyond which a liquidity provision will fail |

### setPair

```solidity
function setPair(
    address _pair
) public
```

set the new pair contract

also approves the router for the new pair token and underlying token

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pair` | address | the new pair |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit excluding the FEI

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

get the manipulation resistant Other(example ETH) and FEI in the Uniswap pool
        @return number of other token in pool
        @return number of FEI in pool

        Derivation rETH, rFEI = resistant (ideal) ETH and FEI reserves, P = price of ETH in FEI:
        1. rETH * rFEI = k
        2. rETH = k / rFEI
        3. rETH = (k * rETH) / (rFEI * rETH)
        4. rETH ^ 2 = k / P
        5. rETH = sqrt(k / P)

        and rFEI = k / rETH by 1.

        Finally scale the resistant reserves by the ratio owned by the contract

### liquidityOwned

```solidity
function liquidityOwned() public returns (uint256)
```

amount of pair liquidity owned by this contract

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | amount of LP tokens |

### _removeLiquidity

```solidity
function _removeLiquidity(
    uint256 liquidity
) internal returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `liquidity` | uint256 |  |

### _addLiquidity

```solidity
function _addLiquidity(
    uint256 tokenAmount,
    uint256 feiAmount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokenAmount` | uint256 |  |
| `feiAmount` | uint256 |  |

### _getMinLiquidity

```solidity
function _getMinLiquidity(
    uint256 amount
) internal returns (uint256)
```

used as slippage protection when adding liquidity to the pool

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### _ratioOwned

```solidity
function _ratioOwned() internal returns (struct Decimal.D256)
```

ratio of all pair liquidity owned by this contract

### _approveToken

```solidity
function _approveToken(
    address _token
) internal
```

approves a token for the router

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |

### _wrap

```solidity
function _wrap() internal
```

