# BalancerLBPSwapper

an auction contract which cyclically sells one token for another using Balancer LBP

## Functions

### constructor

```solidity
function constructor(
    address _core,
    struct BalancerLBPSwapper.OracleData oracleData,
    uint256 _frequency,
    uint256 _weightSmall,
    uint256 _weightLarge,
    address _tokenSpent,
    address _tokenReceived,
    address _tokenReceivingAddress,
    uint256 _minTokenSpentBalance
) public
```

constructor for BalancerLBPSwapper
    @param _core Core contract to reference
    @param oracleData The parameters needed to initialize the OracleRef
    @param _frequency minimum time between auctions and duration of auction
    @param _weightSmall the small weight of weight changes (e.g. 5%)
    @param _weightLarge the large weight of weight changes (e.g. 95%)
    @param _tokenSpent the token to be auctioned
    @param _tokenReceived the token to buy
    @param _tokenReceivingAddress the address to send `tokenReceived`
    @param _minTokenSpentBalance the minimum amount of tokenSpent to kick off a new auction on swap()

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `oracleData` | struct BalancerLBPSwapper.OracleData |  |
| `_frequency` | uint256 |  |
| `_weightSmall` | uint256 |  |
| `_weightLarge` | uint256 |  |
| `_tokenSpent` | address |  |
| `_tokenReceived` | address |  |
| `_tokenReceivingAddress` | address |  |
| `_minTokenSpentBalance` | uint256 |  |

### init

```solidity
function init(
    contract IWeightedPool _pool
) external
```

initialize Balancer LBP
    Needs to be a separate method because this contract needs to be deployed and supplied
    as the owner of the pool on construction.
    Includes various checks to ensure the pool contract is correct and initialization can only be done once
    @param _pool the Balancer LBP used for swapping

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pool` | contract IWeightedPool |  |

### swap

```solidity
function swap() external
```

Swap algorithm
        1. Withdraw existing LP tokens
        2. Reset weights
        3. Provide new liquidity
        4. Trigger gradual weight change
        5. Transfer remaining tokenReceived to tokenReceivingAddress
        @dev assumes tokenSpent balance of contract exceeds minTokenSpentBalance to kick off a new auction

### forceSwap

```solidity
function forceSwap() external
```

Force a swap() call, without waiting afterTime.
        This should only be callable after init() call, when no
        other swap is happening (call reverts if weight change
        is in progress).

### exitPool

```solidity
function exitPool(
    address to
) external
```

redeeem all assets from LP pool

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | destination for withdrawn tokens |

### withdrawERC20

```solidity
function withdrawERC20(
    address token,
    address to,
    uint256 amount
) public
```

withdraw ERC20 from the contract

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | address of the ERC20 to send |
| `to` | address | address destination of the ERC20 |
| `amount` | uint256 | quantity of ERC20 to send |

### swapEndTime

```solidity
function swapEndTime() public returns (uint256 endTime)
```

returns when the next auction ends

### setSwapFrequency

```solidity
function setSwapFrequency(
    uint256 _frequency
) external
```

sets the minimum time between swaps

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_frequency` | uint256 | minimum time between swaps in seconds |

### setMinTokenSpent

```solidity
function setMinTokenSpent(
    uint256 newMinTokenSpentBalance
) external
```

sets the minimum token spent balance

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMinTokenSpentBalance` | uint256 | minimum amount of FEI to trigger a new auction |

### setReceivingAddress

```solidity
function setReceivingAddress(
    address newTokenReceivingAddress
) external
```

Sets the address receiving swap's inbound tokens

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTokenReceivingAddress` | address | the address that will receive tokens |

### getTokensIn

```solidity
function getTokensIn(
    uint256 spentTokenBalance
) external returns (address[] tokens, uint256[] amountsIn)
```

return the amount of tokens needed to seed the next auction

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spentTokenBalance` | uint256 |  |

### _swap

```solidity
function _swap() internal
```

Swap algorithm
        1. Withdraw existing LP tokens
        2. Reset weights
        3. Provide new liquidity
        4. Trigger gradual weight change
        5. Transfer remaining tokenReceived to tokenReceivingAddress
        @dev assumes tokenSpent balance of contract exceeds minTokenSpentBalance to kick off a new auction

### _exitPool

```solidity
function _exitPool() internal
```

### _transferAll

```solidity
function _transferAll(
    address token,
    address to
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `to` | address |  |

### _setReceivingAddress

```solidity
function _setReceivingAddress(
    address newTokenReceivingAddress
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newTokenReceivingAddress` | address |  |

### _initializePool

```solidity
function _initializePool() internal
```

### _getTokensIn

```solidity
function _getTokensIn(
    uint256 spentTokenBalance
) internal returns (uint256[] amountsIn)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `spentTokenBalance` | uint256 |  |

### _setMinTokenSpent

```solidity
function _setMinTokenSpent(
    uint256 newMinTokenSpentBalance
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newMinTokenSpentBalance` | uint256 |  |

## Events

### WithdrawERC20

```solidity
event WithdrawERC20(
    address _caller,
    address _token,
    address _to,
    uint256 _amount
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_token` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |
### ExitPool

```solidity
event ExitPool(
)
```

### MinTokenSpentUpdate

```solidity
event MinTokenSpentUpdate(
    uint256 oldMinTokenSpentBalance,
    uint256 newMinTokenSpentBalance
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `oldMinTokenSpentBalance` | uint256 |  |
| `newMinTokenSpentBalance` | uint256 |  |

