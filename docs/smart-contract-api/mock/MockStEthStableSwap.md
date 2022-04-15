# MockStEthStableSwap

## Functions

### constructor

```solidity
function constructor(
    address _token1
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token1` | address |  |

### setSlippage

```solidity
function setSlippage(
    uint256 _slippage,
    bool _anti
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_slippage` | uint256 |  |
| `_anti` | bool |  |

### coins

```solidity
function coins(
    uint256 i
) public returns (address)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### exchange

```solidity
function exchange(
    int128 i,
    int128 j,
    uint256 input,
    uint256 min_out
) public returns (uint256 output)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `input` | uint256 |  |
| `min_out` | uint256 |  |

### get_dy

```solidity
function get_dy(
    int128 i,
    int128 j,
    uint256 input
) public returns (uint256 output)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | int128 |  |
| `j` | int128 |  |
| `input` | uint256 |  |

### receive

```solidity
function receive() external
```

