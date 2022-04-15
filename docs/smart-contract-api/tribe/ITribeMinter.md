# ITribe

## Functions

### mint

```solidity
function mint(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### setMinter

```solidity
function setMinter(
    address newMinter
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMinter` | address |  |

# ITribeMinter

## Functions

### poke

```solidity
function poke() external
```

### setMinter

```solidity
function setMinter(
    address newMinter
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMinter` | address |  |

### mint

```solidity
function mint(
    address to,
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### setTribeTreasury

```solidity
function setTribeTreasury(
    address newTribeTreasury
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTribeTreasury` | address |  |

### setTribeRewardsDripper

```solidity
function setTribeRewardsDripper(
    address newTribeRewardsDripper
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTribeRewardsDripper` | address |  |

### setAnnualMaxInflationBasisPoints

```solidity
function setAnnualMaxInflationBasisPoints(
    uint256 newAnnualMaxInflationBasisPoints
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAnnualMaxInflationBasisPoints` | uint256 |  |

### annualMaxInflationBasisPoints

```solidity
function annualMaxInflationBasisPoints() external returns (uint256)
```

### idealBufferCap

```solidity
function idealBufferCap() external returns (uint256)
```

### tribeCirculatingSupply

```solidity
function tribeCirculatingSupply() external returns (uint256)
```

### totalSupply

```solidity
function totalSupply() external returns (uint256)
```

### isPokeNeeded

```solidity
function isPokeNeeded() external returns (bool)
```

### tribeTreasury

```solidity
function tribeTreasury() external returns (address)
```

### tribeRewardsDripper

```solidity
function tribeRewardsDripper() external returns (address)
```

## Events

### AnnualMaxInflationUpdate

```solidity
event AnnualMaxInflationUpdate(
    uint256 oldAnnualMaxInflationBasisPoints,
    uint256 newAnnualMaxInflationBasisPoints
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldAnnualMaxInflationBasisPoints` | uint256 |  |
| `newAnnualMaxInflationBasisPoints` | uint256 |  |
### TribeTreasuryUpdate

```solidity
event TribeTreasuryUpdate(
    address oldTribeTreasury,
    address newTribeTreasury
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTribeTreasury` | address |  |
| `newTribeTreasury` | address |  |
### TribeRewardsDripperUpdate

```solidity
event TribeRewardsDripperUpdate(
    address oldTribeRewardsDripper,
    address newTribeRewardsDripper
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldTribeRewardsDripper` | address |  |
| `newTribeRewardsDripper` | address |  |

