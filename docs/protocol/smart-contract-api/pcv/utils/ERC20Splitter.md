# ERC20Splitter

a contract to split token held to multiple locations

## Functions

### constructor

```solidity
function constructor(
    address _core,
    contract IERC20 _token,
    address[] _pcvDeposits,
    uint256[] _ratios
) public
```

constructor for ERC20Splitter
        @param _core the Core address to reference
        @param _token the ERC20 token instance to split
        @param _pcvDeposits the locations to send tokens
        @param _ratios the relative ratios of how much tokens to send each location, in basis points

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_token` | contract IERC20 |  |
| `_pcvDeposits` | address[] |  |
| `_ratios` | uint256[] |  |

### allocate

```solidity
function allocate() external
```

distribute held TRIBE

### _allocateSingle

```solidity
function _allocateSingle(
    uint256 amount,
    address pcvDeposit
) internal
```

distribute funds to single PCV deposit

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | amount of funds to send |
| `pcvDeposit` | address | the pcv deposit to send funds |

