# MockTribalChief

## Functions

### constructor

```solidity
function constructor(
    uint256 _tribalChiefTribePerBlock,
    uint256 _totalAllocPoint,
    uint120 _poolAllocPoints
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribalChiefTribePerBlock` | uint256 |  |
| `_totalAllocPoint` | uint256 |  |
| `_poolAllocPoints` | uint120 |  |

### poolInfo

```solidity
function poolInfo(
    uint256 _index
) external returns (uint256, uint256, uint128, uint120, bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_index` | uint256 |  |

### tribePerBlock

```solidity
function tribePerBlock() public returns (uint256)
```

Calculates and returns the `amount` of TRIBE per block.

### setTotalAllocPoint

```solidity
function setTotalAllocPoint(
    uint256 newTotalAllocPoint
) external
```

set the total alloc points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTotalAllocPoint` | uint256 |  |

### setPoolAllocPoints

```solidity
function setPoolAllocPoints(
    uint120 newPoolAllocPoint
) external
```

set the pool alloc points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPoolAllocPoint` | uint120 |  |

### setTribePerBlock

```solidity
function setTribePerBlock(
    uint256 newTribePerBlock
) external
```

set the tribe per block

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTribePerBlock` | uint256 |  |

