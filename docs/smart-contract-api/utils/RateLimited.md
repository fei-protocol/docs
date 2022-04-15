# RateLimited

## Functions

### constructor

```solidity
function constructor(
    uint256 _maxRateLimitPerSecond,
    uint256 _rateLimitPerSecond,
    uint256 _bufferCap,
    bool _doPartialAction
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_maxRateLimitPerSecond` | uint256 |  |
| `_rateLimitPerSecond` | uint256 |  |
| `_bufferCap` | uint256 |  |
| `_doPartialAction` | bool |  |

### setRateLimitPerSecond

```solidity
function setRateLimitPerSecond(
    uint256 newRateLimitPerSecond
) external
```

set the rate limit per second

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newRateLimitPerSecond` | uint256 |  |

### setBufferCap

```solidity
function setBufferCap(
    uint256 newBufferCap
) external
```

set the buffer cap

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBufferCap` | uint256 |  |

### buffer

```solidity
function buffer() public returns (uint256)
```

the amount of action used before hitting limit

replenishes at rateLimitPerSecond per second up to bufferCap

### _depleteBuffer

```solidity
function _depleteBuffer(
    uint256 amount
) internal returns (uint256)
```

the method that enforces the rate limit. Decreases buffer by "amount". 
        If buffer is <= amount either
        1. Does a partial mint by the amount remaining in the buffer or
        2. Reverts
        Depending on whether doPartialAction is true or false

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

### _setRateLimitPerSecond

```solidity
function _setRateLimitPerSecond(
    uint256 newRateLimitPerSecond
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newRateLimitPerSecond` | uint256 |  |

### _setBufferCap

```solidity
function _setBufferCap(
    uint256 newBufferCap
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newBufferCap` | uint256 |  |

### _resetBuffer

```solidity
function _resetBuffer() internal
```

### _updateBufferStored

```solidity
function _updateBufferStored() internal
```

## Events

### BufferUsed

```solidity
event BufferUsed(
    uint256 amountUsed,
    uint256 bufferRemaining
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountUsed` | uint256 |  |
| `bufferRemaining` | uint256 |  |
### BufferCapUpdate

```solidity
event BufferCapUpdate(
    uint256 oldBufferCap,
    uint256 newBufferCap
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldBufferCap` | uint256 |  |
| `newBufferCap` | uint256 |  |
### RateLimitPerSecondUpdate

```solidity
event RateLimitPerSecondUpdate(
    uint256 oldRateLimitPerSecond,
    uint256 newRateLimitPerSecond
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldRateLimitPerSecond` | uint256 |  |
| `newRateLimitPerSecond` | uint256 |  |

