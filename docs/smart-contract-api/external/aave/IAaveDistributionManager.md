# IAaveDistributionManager

## Functions

### setDistributionEnd

```solidity
function setDistributionEnd(
    uint256 distributionEnd
) external
```

Sets the end date for the distribution

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `distributionEnd` | uint256 | The end date timestamp |

### getDistributionEnd

```solidity
function getDistributionEnd() external returns (uint256)
```

Gets the end date for the distribution

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The end of the distribution |

### DISTRIBUTION_END

```solidity
function DISTRIBUTION_END() external returns (uint256)
```

for backwards compatibility with the previous DistributionManager used

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The end of the distribution |

### getUserAssetData

```solidity
function getUserAssetData(
    address user,
    address asset
) external returns (uint256)
```

Returns the data of an user on a distribution

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address | Address of the user |
| `asset` | address | The address of the reference asset of the distribution |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The new index |

### getAssetData

```solidity
function getAssetData(
    address asset
) external returns (uint256, uint256, uint256)
```

Returns the configuration of the distribution for a certain asset

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address | The address of the reference asset of the distribution |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | The asset index, the emission per second and the last updated timestamp |
| `[1]` | uint256 |  |
| `[2]` | uint256 |  |

## Events

### AssetConfigUpdated

```solidity
event AssetConfigUpdated(
    address asset,
    uint256 emission
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |
| `emission` | uint256 |  |
### AssetIndexUpdated

```solidity
event AssetIndexUpdated(
    address asset,
    uint256 index
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `asset` | address |  |
| `index` | uint256 |  |
### UserIndexUpdated

```solidity
event UserIndexUpdated(
    address user,
    address asset,
    uint256 index
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `user` | address |  |
| `asset` | address |  |
| `index` | uint256 |  |
### DistributionEndUpdated

```solidity
event DistributionEndUpdated(
    uint256 newDistributionEnd
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newDistributionEnd` | uint256 |  |

