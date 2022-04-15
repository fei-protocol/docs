# UniRef

defines some utilities around interacting with Uniswap

the uniswap pair should be FEI and another asset

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _pair,
    address _oracle,
    address _backupOracle
) internal
```

UniRef constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core to reference |
| `_pair` | address | Uniswap pair to reference |
| `_oracle` | address | oracle to reference |
| `_backupOracle` | address | backup oracle to reference |

### setPair

```solidity
function setPair(
    address newPair
) external
```

set the new pair contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPair` | address | the new pair |

### getReserves

```solidity
function getReserves() public returns (uint256 feiReserves, uint256 tokenReserves)
```

pair reserves with fei listed first

### _setupPair

```solidity
function _setupPair(
    address newPair
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newPair` | address |  |

### _token

```solidity
function _token() internal returns (address)
```

