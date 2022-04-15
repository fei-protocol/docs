# IBasePool

## Functions

### getSwapFeePercentage

```solidity
function getSwapFeePercentage() external returns (uint256)
```

### setSwapFeePercentage

```solidity
function setSwapFeePercentage(
    uint256 swapFeePercentage
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `swapFeePercentage` | uint256 |  |

### setAssetManagerPoolConfig

```solidity
function setAssetManagerPoolConfig(
    contract IERC20 token,
    struct IAssetManager.PoolConfig poolConfig
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | contract IERC20 |  |
| `poolConfig` | struct IAssetManager.PoolConfig |  |

### setPaused

```solidity
function setPaused(
    bool paused
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `paused` | bool |  |

### getVault

```solidity
function getVault() external returns (contract IVault)
```

### getPoolId

```solidity
function getPoolId() external returns (bytes32)
```

### getOwner

```solidity
function getOwner() external returns (address)
```

