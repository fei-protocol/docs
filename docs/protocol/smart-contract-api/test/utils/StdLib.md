# StdLib

## Functions

### skip

```solidity
function skip(
    uint256 time
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `time` | uint256 |  |

### rewind

```solidity
function rewind(
    uint256 time
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `time` | uint256 |  |

### hoax

```solidity
function hoax(
    address who
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |

### hoax

```solidity
function hoax(
    address who,
    uint256 give
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `give` | uint256 |  |

### hoax

```solidity
function hoax(
    address who,
    address origin
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `origin` | address |  |

### hoax

```solidity
function hoax(
    address who,
    address origin,
    uint256 give
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `origin` | address |  |
| `give` | uint256 |  |

### startHoax

```solidity
function startHoax(
    address who
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |

### startHoax

```solidity
function startHoax(
    address who,
    uint256 give
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `give` | uint256 |  |

### startHoax

```solidity
function startHoax(
    address who,
    address origin
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `origin` | address |  |

### startHoax

```solidity
function startHoax(
    address who,
    address origin,
    uint256 give
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `origin` | address |  |
| `give` | uint256 |  |

### deployCode

```solidity
function deployCode(
    string what,
    bytes args
) public returns (address addr)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `what` | string |  |
| `args` | bytes |  |

### deployCode

```solidity
function deployCode(
    string what
) public returns (address addr)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `what` | string |  |

# stdError

# StdStorage

```solidity
struct StdStorage {
  mapping(address &#x3D;&gt; mapping(bytes4 &#x3D;&gt; mapping(bytes32 &#x3D;&gt; uint256))) slots;
  mapping(address &#x3D;&gt; mapping(bytes4 &#x3D;&gt; mapping(bytes32 &#x3D;&gt; bool))) finds;
  bytes32[] _keys;
  bytes4 _sig;
  uint256 _depth;
  address _target;
  bytes32 _set;
}
```

# stdStorage

## Functions

### sigs

```solidity
function sigs(
    string sigStr
) internal returns (bytes4)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `sigStr` | string |  |

### find

```solidity
function find(
    struct StdStorage self
) internal returns (uint256)
```

find an arbitrary storage slot given a function sig, input data, address of the contract and a value to check against

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |

### target

```solidity
function target(
    struct StdStorage self,
    address _target
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `_target` | address |  |

### sig

```solidity
function sig(
    struct StdStorage self,
    bytes4 _sig
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `_sig` | bytes4 |  |

### sig

```solidity
function sig(
    struct StdStorage self,
    string _sig
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `_sig` | string |  |

### with_key

```solidity
function with_key(
    struct StdStorage self,
    address who
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `who` | address |  |

### with_key

```solidity
function with_key(
    struct StdStorage self,
    uint256 amt
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `amt` | uint256 |  |

### with_key

```solidity
function with_key(
    struct StdStorage self,
    bytes32 key
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `key` | bytes32 |  |

### depth

```solidity
function depth(
    struct StdStorage self,
    uint256 _depth
) internal returns (struct StdStorage)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `_depth` | uint256 |  |

### checked_write

```solidity
function checked_write(
    struct StdStorage self,
    address who
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `who` | address |  |

### checked_write

```solidity
function checked_write(
    struct StdStorage self,
    uint256 amt
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `amt` | uint256 |  |

### checked_write

```solidity
function checked_write(
    struct StdStorage self,
    bytes32 set
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `self` | struct StdStorage |  |
| `set` | bytes32 |  |

### bytesToBytes32

```solidity
function bytesToBytes32(
    bytes b,
    uint256 offset
) public returns (bytes32)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `b` | bytes |  |
| `offset` | uint256 |  |

### flatten

```solidity
function flatten(
    bytes32[] b
) private returns (bytes)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `b` | bytes32[] |  |

## Events

### SlotFound

```solidity
event SlotFound(
    address who,
    bytes4 fsig,
    bytes32 keysHash,
    uint256 slot
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `fsig` | bytes4 |  |
| `keysHash` | bytes32 |  |
| `slot` | uint256 |  |
### WARNING_UninitedSlot

```solidity
event WARNING_UninitedSlot(
    address who,
    uint256 slot
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `who` | address |  |
| `slot` | uint256 |  |

## Custom Errors

### NotFound

```solidity
error NotFound(bytes4)
```

### NotStorage

```solidity
error NotStorage(bytes4)
```

### PackedSlot

```solidity
error PackedSlot(bytes32)
```

