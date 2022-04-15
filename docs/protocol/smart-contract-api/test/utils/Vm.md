# Vm

## Functions

### warp

```solidity
function warp(
    uint256 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### roll

```solidity
function roll(
    uint256 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### fee

```solidity
function fee(
    uint256 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### load

```solidity
function load(
    address ,
    bytes32 
) external returns (bytes32)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | bytes32 |  |

### store

```solidity
function store(
    address ,
    bytes32 ,
    bytes32 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | bytes32 |  |
| `` | bytes32 |  |

### sign

```solidity
function sign(
    uint256 ,
    bytes32 
) external returns (uint8, bytes32, bytes32)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |
| `` | bytes32 |  |

### addr

```solidity
function addr(
    uint256 
) external returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | uint256 |  |

### ffi

```solidity
function ffi(
    string[] 
) external returns (bytes)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | string[] |  |

### prank

```solidity
function prank(
    address 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### startPrank

```solidity
function startPrank(
    address 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### prank

```solidity
function prank(
    address ,
    address 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | address |  |

### startPrank

```solidity
function startPrank(
    address ,
    address 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | address |  |

### stopPrank

```solidity
function stopPrank() external
```

### deal

```solidity
function deal(
    address ,
    uint256 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | uint256 |  |

### etch

```solidity
function etch(
    address ,
    bytes 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | bytes |  |

### expectRevert

```solidity
function expectRevert(
    bytes 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | bytes |  |

### expectRevert

```solidity
function expectRevert(
    bytes4 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | bytes4 |  |

### record

```solidity
function record() external
```

### accesses

```solidity
function accesses(
    address 
) external returns (bytes32[] reads, bytes32[] writes)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |

### expectEmit

```solidity
function expectEmit(
    bool ,
    bool ,
    bool ,
    bool 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | bool |  |
| `` | bool |  |
| `` | bool |  |
| `` | bool |  |

### mockCall

```solidity
function mockCall(
    address ,
    bytes ,
    bytes 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | bytes |  |
| `` | bytes |  |

### clearMockedCalls

```solidity
function clearMockedCalls() external
```

### expectCall

```solidity
function expectCall(
    address ,
    bytes 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | bytes |  |

### getCode

```solidity
function getCode(
    string 
) external returns (bytes)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | string |  |

### label

```solidity
function label(
    address ,
    string 
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `` | address |  |
| `` | string |  |

