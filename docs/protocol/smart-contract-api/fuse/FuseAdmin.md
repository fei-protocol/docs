# FuseAdmin

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract Unitroller _comptroller
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | address of core contract |
| `_comptroller` | contract Unitroller | the fuse comptroller |

### oracleAdd

```solidity
function oracleAdd(
    address[] underlyings,
    address[] _oracles
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlyings` | address[] |  |
| `_oracles` | address[] |  |

### oracleChangeAdmin

```solidity
function oracleChangeAdmin(
    address newAdmin
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAdmin` | address |  |

### _addRewardsDistributor

```solidity
function _addRewardsDistributor(
    address distributor
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `distributor` | address |  |

### _setWhitelistEnforcement

```solidity
function _setWhitelistEnforcement(
    bool enforce
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `enforce` | bool |  |

### _setWhitelistStatuses

```solidity
function _setWhitelistStatuses(
    address[] suppliers,
    bool[] statuses
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `suppliers` | address[] |  |
| `statuses` | bool[] |  |

### _setPriceOracle

```solidity
function _setPriceOracle(
    address newOracle
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOracle` | address |  |

### _setCloseFactor

```solidity
function _setCloseFactor(
    uint256 newCloseFactorMantissa
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCloseFactorMantissa` | uint256 |  |

### _setCollateralFactor

```solidity
function _setCollateralFactor(
    contract CToken cToken,
    uint256 newCollateralFactorMantissa
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `newCollateralFactorMantissa` | uint256 |  |

### _setLiquidationIncentive

```solidity
function _setLiquidationIncentive(
    uint256 newLiquidationIncentiveMantissa
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newLiquidationIncentiveMantissa` | uint256 |  |

### _deployMarket

```solidity
function _deployMarket(
    address underlying,
    address irm,
    string name,
    string symbol,
    address impl,
    bytes data,
    uint256 reserveFactor,
    uint256 adminFee,
    uint256 collateralFactorMantissa
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `underlying` | address |  |
| `irm` | address |  |
| `name` | string |  |
| `symbol` | string |  |
| `impl` | address |  |
| `data` | bytes |  |
| `reserveFactor` | uint256 |  |
| `adminFee` | uint256 |  |
| `collateralFactorMantissa` | uint256 |  |

### _unsupportMarket

```solidity
function _unsupportMarket(
    contract CToken cToken
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |

### _toggleAutoImplementations

```solidity
function _toggleAutoImplementations(
    bool enabled
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `enabled` | bool |  |

### _setPendingAdmin

```solidity
function _setPendingAdmin(
    address newPendingAdmin
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address |  |

### _acceptAdmin

```solidity
function _acceptAdmin() public
```

## Custom Errors

### ComptrollerError

```solidity
error ComptrollerError()
```

