# RariGovernanceTokenUniswapDistributor

RariGovernanceTokenUniswapDistributor distributes RGT (Rari Governance Token) to Uniswap LP token holders.

## Functions

### distributionEndBlock

```solidity
function distributionEndBlock() external returns (uint256)
```

### getRgtDistributed

```solidity
function getRgtDistributed(
    uint256 blockNumber
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `blockNumber` | uint256 |  |

### setDisabled

```solidity
function setDisabled(
    bool _disabled
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_disabled` | bool |  |

### upgrade

```solidity
function upgrade(
    address newContract,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newContract` | address |  |
| `amount` | uint256 |  |

