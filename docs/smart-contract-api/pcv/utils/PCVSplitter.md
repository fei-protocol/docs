# PCVSplitter

## Functions

### constructor

```solidity
function constructor(
    address[] _pcvDeposits,
    uint256[] _ratios
) internal
```

PCVSplitter constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pcvDeposits` | address[] | list of PCV Deposits to split to |
| `_ratios` | uint256[] | ratios for splitting PCV Deposit allocations |

### checkAllocation

```solidity
function checkAllocation(
    address[] _pcvDeposits,
    uint256[] _ratios
) public
```

make sure an allocation has matching lengths and totals the ALLOCATION_GRANULARITY

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pcvDeposits` | address[] | new list of pcv deposits to send to |
| `_ratios` | uint256[] | new ratios corresponding to the PCV deposits |

### getAllocation

```solidity
function getAllocation() public returns (address[], uint256[])
```

gets the pcvDeposits and ratios of the splitter

### setAllocation

```solidity
function setAllocation(
    address[] _allocations,
    uint256[] _ratios
) external
```

sets the allocation of held PCV

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_allocations` | address[] |  |
| `_ratios` | uint256[] |  |

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

### _setAllocation

```solidity
function _setAllocation(
    address[] _pcvDeposits,
    uint256[] _ratios
) internal
```

sets a new allocation for the splitter

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pcvDeposits` | address[] | new list of pcv deposits to send to |
| `_ratios` | uint256[] | new ratios corresponding to the PCV deposits. Must total ALLOCATION_GRANULARITY |

### _allocate

```solidity
function _allocate(
    uint256 total
) internal
```

distribute funds to all pcv deposits at specified allocation ratios

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `total` | uint256 | amount of funds to send |

## Events

### AllocationUpdate

```solidity
event AllocationUpdate(
    address[] oldPCVDeposits,
    uint256[] oldRatios,
    address[] newPCVDeposits,
    uint256[] newRatios
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldPCVDeposits` | address[] |  |
| `oldRatios` | uint256[] |  |
| `newPCVDeposits` | address[] |  |
| `newRatios` | uint256[] |  |
### Allocate

```solidity
event Allocate(
    address caller,
    uint256 amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `caller` | address |  |
| `amount` | uint256 |  |

