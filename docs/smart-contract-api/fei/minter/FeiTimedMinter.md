# FeiTimedMinter

a contract which mints FEI to a target address on a timed cadence

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _target,
    uint256 _incentive,
    uint256 _frequency,
    uint256 _initialMintAmount
) public
```

constructor for FeiTimedMinter
        @param _core the Core address to reference
        @param _target the target for minted FEI
        @param _incentive the incentive amount for calling mint paid in FEI
        @param _frequency the frequency minting happens
        @param _initialMintAmount the initial FEI amount to mint

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_target` | address |  |
| `_incentive` | uint256 |  |
| `_frequency` | uint256 |  |
| `_initialMintAmount` | uint256 |  |

### mint

```solidity
function mint() public
```

triggers a minting of FEI

timed and incentivized

### mintAmount

```solidity
function mintAmount() public returns (uint256)
```

### setTarget

```solidity
function setTarget(
    address newTarget
) external
```

set the new FEI target

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTarget` | address |  |

### setFrequency

```solidity
function setFrequency(
    uint256 newFrequency
) external
```

set the mint frequency

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newFrequency` | uint256 |  |

### setMintAmount

```solidity
function setMintAmount(
    uint256 newMintAmount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMintAmount` | uint256 |  |

### _setTarget

```solidity
function _setTarget(
    address newTarget
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTarget` | address |  |

### _setMintAmount

```solidity
function _setMintAmount(
    uint256 newMintAmount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMintAmount` | uint256 |  |

### _mintFei

```solidity
function _mintFei(
    address to,
    uint256 amountIn
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amountIn` | uint256 |  |

### _afterMint

```solidity
function _afterMint() internal
```

