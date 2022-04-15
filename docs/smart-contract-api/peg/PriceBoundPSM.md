# PriceBoundPSM

contract to create a price bound DAI PSM
This contract will allow swaps when the price of DAI is between 98 cents and 1.02 by default
These defaults are changeable by the admin and governance by calling floor and ceiling setters
setOracleFloor and setOracleCeiling

## Functions

### constructor

```solidity
function constructor(
    uint256 _floor,
    uint256 _ceiling,
    struct PegStabilityModule.OracleParams _params,
    uint256 _mintFeeBasisPoints,
    uint256 _redeemFeeBasisPoints,
    uint256 _reservesThreshold,
    uint256 _feiLimitPerSecond,
    uint256 _mintingBufferCap,
    contract IERC20 _underlyingToken,
    contract IPCVDeposit _surplusTarget
) public
```

constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_floor` | uint256 | minimum acceptable oracle price |
| `_ceiling` | uint256 | maximum  acceptable oracle price |
| `_params` | struct PegStabilityModule.OracleParams | PSM construction params |
| `_mintFeeBasisPoints` | uint256 |  |
| `_redeemFeeBasisPoints` | uint256 |  |
| `_reservesThreshold` | uint256 |  |
| `_feiLimitPerSecond` | uint256 |  |
| `_mintingBufferCap` | uint256 |  |
| `_underlyingToken` | contract IERC20 |  |
| `_surplusTarget` | contract IPCVDeposit |  |

### setOracleFloorBasisPoints

```solidity
function setOracleFloorBasisPoints(
    uint256 newFloorBasisPoints
) external
```

sets the floor price in BP

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFloorBasisPoints` | uint256 |  |

### setOracleCeilingBasisPoints

```solidity
function setOracleCeilingBasisPoints(
    uint256 newCeilingBasisPoints
) external
```

sets the ceiling price in BP

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCeilingBasisPoints` | uint256 |  |

### isPriceValid

```solidity
function isPriceValid() external returns (bool)
```

return wether the current oracle price is valid or not

### _setCeilingBasisPoints

```solidity
function _setCeilingBasisPoints(
    uint256 newCeilingBasisPoints
) internal
```

helper function to set the ceiling in basis points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCeilingBasisPoints` | uint256 |  |

### _setFloorBasisPoints

```solidity
function _setFloorBasisPoints(
    uint256 newFloorBasisPoints
) internal
```

helper function to set the floor in basis points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFloorBasisPoints` | uint256 |  |

### _validPrice

```solidity
function _validPrice(
    struct Decimal.D256 price
) internal returns (bool valid)
```

helper function to determine if price is within a valid range

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | struct Decimal.D256 |  |

### _validatePriceRange

```solidity
function _validatePriceRange(
    struct Decimal.D256 price
) internal
```

reverts if the price is greater than or equal to the ceiling or less than or equal to the floor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `price` | struct Decimal.D256 |  |

