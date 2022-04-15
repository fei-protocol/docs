# TribeReserveStabilizer

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _tribeOracle,
    address _backupOracle,
    uint256 _usdPerFeiBasisPoints,
    contract ICollateralizationOracle _collateralizationOracle,
    uint256 _collateralizationThresholdBasisPoints,
    contract ITribeMinter _tribeMinter,
    uint256 _osmDuration
) public
```

Tribe Reserve Stabilizer constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core to reference |
| `_tribeOracle` | address | the TRIBE price oracle to reference |
| `_backupOracle` | address | the backup oracle to reference |
| `_usdPerFeiBasisPoints` | uint256 | the USD price per FEI to sell TRIBE at |
| `_collateralizationOracle` | contract ICollateralizationOracle | the collateralization oracle to reference |
| `_collateralizationThresholdBasisPoints` | uint256 | the collateralization ratio below which the stabilizer becomes active. Reported in basis points (1/10000) |
| `_tribeMinter` | contract ITribeMinter | the tribe minter contract |
| `_osmDuration` | uint256 | the amount of delay time before the TribeReserveStabilizer begins minting TRIBE |

### exchangeFei

```solidity
function exchangeFei(
    uint256 feiAmount
) public returns (uint256)
```

exchange FEI for minted TRIBE

the timer counts down from first time below threshold and opens after window

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `feiAmount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    address ,
    uint256 
) external
```

reverts. Held TRIBE should only be released by exchangeFei or mint

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | uint256 |  |

### isCollateralizationBelowThreshold

```solidity
function isCollateralizationBelowThreshold() public returns (bool)
```

check whether collateralization ratio is below the threshold set

returns false if the oracle is invalid

### startOracleDelayCountdown

```solidity
function startOracleDelayCountdown() external
```

delay the opening of the TribeReserveStabilizer until oracle delay duration is met

### resetOracleDelayCountdown

```solidity
function resetOracleDelayCountdown() external
```

reset the opening of the TribeReserveStabilizer oracle delay as soon as above CR target

### setCollateralizationOracle

```solidity
function setCollateralizationOracle(
    contract ICollateralizationOracle newCollateralizationOracle
) external
```

set the Collateralization oracle

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationOracle` | contract ICollateralizationOracle |  |

### setCollateralizationThreshold

```solidity
function setCollateralizationThreshold(
    uint256 newCollateralizationThresholdBasisPoints
) external
```

set the collateralization threshold below which exchanging becomes active

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationThresholdBasisPoints` | uint256 |  |

### collateralizationThreshold

```solidity
function collateralizationThreshold() external returns (struct Decimal.D256)
```

the collateralization threshold below which exchanging becomes active

### _transfer

```solidity
function _transfer(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _pauseTimer

```solidity
function _pauseTimer() internal
```

