# IPriceBound

## Functions

### setOracleFloorBasisPoints

```solidity
function setOracleFloorBasisPoints(
    uint256 newFloor
) external
```

sets the floor price in BP

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFloor` | uint256 |  |

### setOracleCeilingBasisPoints

```solidity
function setOracleCeilingBasisPoints(
    uint256 newCeiling
) external
```

sets the ceiling price in BP

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCeiling` | uint256 |  |

### floor

```solidity
function floor() external returns (uint256)
```

get the floor price in basis points

### ceiling

```solidity
function ceiling() external returns (uint256)
```

get the ceiling price in basis points

### isPriceValid

```solidity
function isPriceValid() external returns (bool)
```

return wether the current oracle price is valid or not

## Events

### OracleFloorUpdate

```solidity
event OracleFloorUpdate(
    uint256 oldFloor,
    uint256 newFloor
)
```

event emitted when minimum floor price is updated

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldFloor` | uint256 |  |
| `newFloor` | uint256 |  |
### OracleCeilingUpdate

```solidity
event OracleCeilingUpdate(
    uint256 oldCeiling,
    uint256 newCeiling
)
```

event emitted when maximum ceiling price is updated

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldCeiling` | uint256 |  |
| `newCeiling` | uint256 |  |

