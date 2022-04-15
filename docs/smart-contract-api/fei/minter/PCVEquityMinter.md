# PCVEquityMinter

A FeiTimedMinter that mints based on a percentage of PCV equity

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _target,
    uint256 _incentive,
    uint256 _frequency,
    contract ICollateralizationOracle _collateralizationOracle,
    uint256 _aprBasisPoints,
    uint256 _maxAPRBasisPoints,
    uint256 _feiMintingLimitPerSecond
) public
```

constructor for PCVEquityMinter
        @param _core the Core address to reference
        @param _target the target to receive minted FEI
        @param _incentive the incentive amount for calling buy paid in FEI
        @param _frequency the frequency buybacks happen
        @param _collateralizationOracle the collateralization oracle used for PCV equity calculations
        @param _aprBasisPoints the APR paid out from pcv equity per year expressed in basis points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_target` | address |  |
| `_incentive` | uint256 |  |
| `_frequency` | uint256 |  |
| `_collateralizationOracle` | contract ICollateralizationOracle |  |
| `_aprBasisPoints` | uint256 |  |
| `_maxAPRBasisPoints` | uint256 |  |
| `_feiMintingLimitPerSecond` | uint256 |  |

### mint

```solidity
function mint() public
```

triggers a minting of FEI based on the PCV equity

### mintAmount

```solidity
function mintAmount() public returns (uint256)
```

### setCollateralizationOracle

```solidity
function setCollateralizationOracle(
    contract ICollateralizationOracle newCollateralizationOracle
) external
```

set the collateralization oracle

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationOracle` | contract ICollateralizationOracle |  |

### setAPRBasisPoints

```solidity
function setAPRBasisPoints(
    uint256 newAprBasisPoints
) external
```

sets the new APR for determining buyback size from PCV equity

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAprBasisPoints` | uint256 |  |

### _setAPRBasisPoints

```solidity
function _setAPRBasisPoints(
    uint256 newAprBasisPoints
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAprBasisPoints` | uint256 |  |

### _setCollateralizationOracle

```solidity
function _setCollateralizationOracle(
    contract ICollateralizationOracle newCollateralizationOracle
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newCollateralizationOracle` | contract ICollateralizationOracle |  |

### _afterMint

```solidity
function _afterMint() internal
```

