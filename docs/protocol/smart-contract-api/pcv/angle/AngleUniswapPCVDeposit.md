# IPoolManager

## Functions

### token

```solidity
function token() external returns (address)
```

# IStableMaster

## Functions

### agToken

```solidity
function agToken() external returns (address)
```

### mint

```solidity
function mint(
    uint256 amount,
    address user,
    contract IPoolManager poolManager,
    uint256 minStableAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `user` | address |  |
| `poolManager` | contract IPoolManager |  |
| `minStableAmount` | uint256 |  |

### burn

```solidity
function burn(
    uint256 amount,
    address burner,
    address dest,
    contract IPoolManager poolManager,
    uint256 minCollatAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |
| `burner` | address |  |
| `dest` | address |  |
| `poolManager` | contract IPoolManager |  |
| `minCollatAmount` | uint256 |  |

### unpause

```solidity
function unpause(
    bytes32 agent,
    contract IPoolManager poolManager
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `agent` | bytes32 |  |
| `poolManager` | contract IPoolManager |  |

# IStakingRewards

## Functions

### stakingToken

```solidity
function stakingToken() external returns (address)
```

### balanceOf

```solidity
function balanceOf(
    address account
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### stake

```solidity
function stake(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### getReward

```solidity
function getReward() external
```

# AngleUniswapPCVDeposit

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _pair,
    address _router,
    address _oracle,
    address _backupOracle,
    uint256 _maxBasisPointsFromPegLP,
    contract IStableMaster _stableMaster,
    contract IPoolManager _poolManager,
    contract IStakingRewards _stakingRewards
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
| `_stableMaster` | contract IStableMaster |  |
| `_poolManager` | contract IPoolManager |  |
| `_stakingRewards` | contract IStakingRewards |  |

### claimRewards

```solidity
function claimRewards() external
```

claim staking rewards

### mintAgToken

```solidity
function mintAgToken(
    uint256 amountFei
) public
```

mint agToken from FEI

the call will revert if slippage is too high compared to oracle.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountFei` | uint256 |  |

### burnAgToken

```solidity
function burnAgToken(
    uint256 amountAgToken
) public
```

burn agToken for FEI

the call will revert if slippage is too high compared to oracle

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountAgToken` | uint256 |  |

### burnAgTokenAll

```solidity
function burnAgTokenAll() external
```

burn ALL agToken held for FEI

see burnAgToken(uint256 amount).

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

### setStakingRewards

```solidity
function setStakingRewards(
    contract IStakingRewards _stakingRewards
) public
```

set a new stakingRewards address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_stakingRewards` | contract IStakingRewards | the new stakingRewards |

### setPoolManager

```solidity
function setPoolManager(
    contract IPoolManager _poolManager
) public
```

set a new poolManager address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_poolManager` | contract IPoolManager | the new poolManager |

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

