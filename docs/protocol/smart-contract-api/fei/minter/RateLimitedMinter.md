# RateLimitedMinter

## Functions

### constructor

```solidity
function constructor(
    uint256 _feiLimitPerSecond,
    uint256 _mintingBufferCap,
    bool _doPartialMint
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_feiLimitPerSecond` | uint256 |  |
| `_mintingBufferCap` | uint256 |  |
| `_doPartialMint` | bool |  |

### _mintFei

```solidity
function _mintFei(
    address to,
    uint256 amount
) internal
```

override the FEI minting behavior to enforce a rate limit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

