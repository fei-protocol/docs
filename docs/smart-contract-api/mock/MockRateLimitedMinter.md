# MockRateLimitedMinter

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _feiLimitPerSecond,
    uint256 _mintingBufferCap,
    bool _doPartialMint
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_feiLimitPerSecond` | uint256 |  |
| `_mintingBufferCap` | uint256 |  |
| `_doPartialMint` | bool |  |

### setDoPartialMint

```solidity
function setDoPartialMint(
    bool _doPartialMint
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_doPartialMint` | bool |  |

### mint

```solidity
function mint(
    address to,
    uint256 amount
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

