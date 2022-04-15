# IBaseBalancerPoolManager

## Functions

### setSwapFee

```solidity
function setSwapFee(
    contract IBasePool pool,
    uint256 swapFee
) external
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
) external
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
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pool` | contract IBasePool |  |
| `token` | contract IERC20 |  |
| `poolConfig` | struct IAssetManager.PoolConfig |  |

