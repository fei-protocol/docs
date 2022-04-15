# BaseBalancerPoolManager

an abstract utility class for a contract that manages a Balancer BasePool
exposes the governable methods to Fei Governors or admins

## Functions

### constructor

```solidity
function constructor() internal
```

### setSwapFee

```solidity
function setSwapFee(
    contract IBasePool pool,
    uint256 swapFee
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IBasePool |  |
| `swapFee` | uint256 |  |

### setPaused

```solidity
function setPaused(
    contract IBasePool pool,
    bool paused
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IBasePool |  |
| `paused` | bool |  |

### setAssetManagerPoolConfig

```solidity
function setAssetManagerPoolConfig(
    contract IBasePool pool,
    contract IERC20 token,
    struct IAssetManager.PoolConfig poolConfig
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IBasePool |  |
| `token` | contract IERC20 |  |
| `poolConfig` | struct IAssetManager.PoolConfig |  |

