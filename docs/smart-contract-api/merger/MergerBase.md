# MergerBase

## Functions

### constructor

```solidity
function constructor(
    address _tribeRariDAO
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tribeRariDAO` | address |  |

### rgtAccept

```solidity
function rgtAccept() external
```

function for the rari timelock to accept the deal

### tribeAccept

```solidity
function tribeAccept() external
```

function for the tribe timelock to accept the deal

### setBothPartiesAccepted

```solidity
function setBothPartiesAccepted() external
```

make sure Tribe rari timelock is active

## Events

### Accept

```solidity
event Accept(
    address dao
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `dao` | address |  |
### Enabled

```solidity
event Enabled(
    address caller
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |

