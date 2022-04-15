# Unitroller

## Functions

### enterMarkets

```solidity
function enterMarkets(
    address[] cTokens
) public returns (uint256[])
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | address[] |  |

### _setPendingAdmin

```solidity
function _setPendingAdmin(
    address newPendingAdmin
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPendingAdmin` | address |  |

### _setBorrowCapGuardian

```solidity
function _setBorrowCapGuardian(
    address newBorrowCapGuardian
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBorrowCapGuardian` | address |  |

### _setMarketSupplyCaps

```solidity
function _setMarketSupplyCaps(
    contract CToken[] cTokens,
    uint256[] newSupplyCaps
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] |  |
| `newSupplyCaps` | uint256[] |  |

### _setMarketBorrowCaps

```solidity
function _setMarketBorrowCaps(
    contract CToken[] cTokens,
    uint256[] newBorrowCaps
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cTokens` | contract CToken[] |  |
| `newBorrowCaps` | uint256[] |  |

### _setPauseGuardian

```solidity
function _setPauseGuardian(
    address newPauseGuardian
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPauseGuardian` | address |  |

### _setMintPaused

```solidity
function _setMintPaused(
    contract CToken cToken,
    bool state
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `state` | bool |  |

### _setBorrowPaused

```solidity
function _setBorrowPaused(
    contract CToken cToken,
    bool borrowPaused
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `borrowPaused` | bool |  |

### _setTransferPaused

```solidity
function _setTransferPaused(
    bool state
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `state` | bool |  |

### _setSeizePaused

```solidity
function _setSeizePaused(
    bool state
) public returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `state` | bool |  |

### _setPriceOracle

```solidity
function _setPriceOracle(
    address newOracle
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newOracle` | address |  |

### _setCloseFactor

```solidity
function _setCloseFactor(
    uint256 newCloseFactorMantissa
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCloseFactorMantissa` | uint256 |  |

### _setLiquidationIncentive

```solidity
function _setLiquidationIncentive(
    uint256 newLiquidationIncentiveMantissa
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newLiquidationIncentiveMantissa` | uint256 |  |

### _setCollateralFactor

```solidity
function _setCollateralFactor(
    contract CToken cToken,
    uint256 newCollateralFactorMantissa
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |
| `newCollateralFactorMantissa` | uint256 |  |

### _acceptAdmin

```solidity
function _acceptAdmin() external returns (uint256)
```

### _deployMarket

```solidity
function _deployMarket(
    bool isCEther,
    bytes constructionData,
    uint256 collateralFactorMantissa
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `isCEther` | bool |  |
| `constructionData` | bytes |  |
| `collateralFactorMantissa` | uint256 |  |

### borrowGuardianPaused

```solidity
function borrowGuardianPaused(
    address cToken
) external returns (bool)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | address |  |

### comptrollerImplementation

```solidity
function comptrollerImplementation() external returns (address)
```

### rewardsDistributors

```solidity
function rewardsDistributors(
    uint256 index
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `index` | uint256 |  |

### _addRewardsDistributor

```solidity
function _addRewardsDistributor(
    address distributor
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `distributor` | address |  |

### _setWhitelistEnforcement

```solidity
function _setWhitelistEnforcement(
    bool enforce
) external returns (uint256)
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
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `suppliers` | address[] |  |
| `statuses` | bool[] |  |

### _unsupportMarket

```solidity
function _unsupportMarket(
    contract CToken cToken
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cToken` | contract CToken |  |

### _toggleAutoImplementations

```solidity
function _toggleAutoImplementations(
    bool enabled
) public returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `enabled` | bool |  |

