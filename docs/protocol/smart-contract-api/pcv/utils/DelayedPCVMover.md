# DelayedPCVMover

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _deadline,
    contract RatioPCVControllerV2 _controller,
    contract IPCVDeposit _deposit,
    address _target,
    uint256 _basisPoints
) public
```

DelayedPCVMover constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_deadline` | uint256 | to wait before PCV movement |
| `_controller` | contract RatioPCVControllerV2 | used for moving funds |
| `_deposit` | contract IPCVDeposit | used to withdraw funds from |
| `_target` | address | to send funds to |
| `_basisPoints` | uint256 | used to know what ratio of funds to move |

### withdrawRatio

```solidity
function withdrawRatio() public
```

PCV movement by calling withdrawRatio on the PCVController.
This will enforce the deadline check, and renounce to the
PCV_CONTROLLER_ROLE role after a successful call.

