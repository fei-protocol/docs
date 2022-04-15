# IFeiTimedMinter

## Functions

### mint

```solidity
function mint() external
```

### setTarget

```solidity
function setTarget(
    address newTarget
) external
```

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

### mintAmount

```solidity
function mintAmount() external returns (uint256)
```

### MIN_MINT_FREQUENCY

```solidity
function MIN_MINT_FREQUENCY() external returns (uint256)
```

### MAX_MINT_FREQUENCY

```solidity
function MAX_MINT_FREQUENCY() external returns (uint256)
```

### target

```solidity
function target() external returns (address)
```

## Events

### FeiMinting

```solidity
event FeiMinting(
    address caller,
    uint256 feiAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |
| `feiAmount` | uint256 |  |
### TargetUpdate

```solidity
event TargetUpdate(
    address oldTarget,
    address newTarget
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTarget` | address |  |
| `newTarget` | address |  |
### MintAmountUpdate

```solidity
event MintAmountUpdate(
    uint256 oldMintAmount,
    uint256 newMintAmount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldMintAmount` | uint256 |  |
| `newMintAmount` | uint256 |  |

