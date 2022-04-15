# TribeMinter

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _annualMaxInflationBasisPoints,
    address _owner,
    address _tribeTreasury,
    address _tribeRewardsDripper
) public
```

Tribe Reserve Stabilizer constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core to reference |
| `_annualMaxInflationBasisPoints` | uint256 | the max inflation in TRIBE circulating supply per year in basis points (1/10000) |
| `_owner` | address | the owner, capable of changing the tribe minter address. |
| `_tribeTreasury` | address | the tribe treasury address used to exclude from circulating supply |
| `_tribeRewardsDripper` | address | the tribe rewards dripper address used to exclude from circulating supply |

### poke

```solidity
function poke() public
```

update the rate limit per second and buffer cap

### setRateLimitPerSecond

```solidity
function setRateLimitPerSecond(
    uint256 
) external
```

no-op, reverts. Prevent admin or governor from overwriting ideal rate limit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### setBufferCap

```solidity
function setBufferCap(
    uint256 
) external
```

no-op, reverts. Prevent admin or governor from overwriting ideal buffer cap

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### mint

```solidity
function mint(
    address to,
    uint256 amount
) external
```

mints TRIBE to the target address, subject to rate limit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send TRIBE to |
| `amount` | uint256 | the amount of TRIBE to send |

### setTribeTreasury

```solidity
function setTribeTreasury(
    address newTribeTreasury
) external
```

sets the new TRIBE treasury address

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

sets the new TRIBE treasury rewards dripper

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTribeRewardsDripper` | address |  |

### setMinter

```solidity
function setMinter(
    address newMinter
) external
```

changes the TRIBE minter address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMinter` | address | the new minter address |

### setAnnualMaxInflationBasisPoints

```solidity
function setAnnualMaxInflationBasisPoints(
    uint256 newAnnualMaxInflationBasisPoints
) external
```

sets the max annual inflation relative to current supply

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAnnualMaxInflationBasisPoints` | uint256 | the new max inflation % denominated in basis points (1/10000) |

### idealBufferCap

```solidity
function idealBufferCap() public returns (uint256)
```

return the ideal buffer cap based on TRIBE circulating supply

### tribeCirculatingSupply

```solidity
function tribeCirculatingSupply() public returns (uint256)
```

return the TRIBE supply, subtracting locked TRIBE

### totalSupply

```solidity
function totalSupply() public returns (uint256)
```

alias for tribeCirculatingSupply

for compatibility with ERC-20 standard for off-chain 3rd party sites

### isPokeNeeded

```solidity
function isPokeNeeded() external returns (bool)
```

return whether a poke is needed or not i.e. is buffer cap != ideal cap

### _mint

```solidity
function _mint(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### _setAnnualMaxInflationBasisPoints

```solidity
function _setAnnualMaxInflationBasisPoints(
    uint256 newAnnualMaxInflationBasisPoints
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newAnnualMaxInflationBasisPoints` | uint256 |  |

