# ITokemakPool

## Functions

### underlyer

```solidity
function underlyer() external returns (address)
```

### balanceOf

```solidity
function balanceOf(
    address holder
) external returns (uint256)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `holder` | address |  |

### requestWithdrawal

```solidity
function requestWithdrawal(
    uint256 amount
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 |  |

# ITokemakRewards

## Functions

### claim

```solidity
function claim(
    struct ITokemakRewards.Recipient recipient,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `recipient` | struct ITokemakRewards.Recipient |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

# TokemakPCVDepositBase

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _pool,
    address _rewards
) internal
```

Tokemak PCV Deposit constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_pool` | address | Tokemak pool to deposit in |
| `_rewards` | address | Tokemak rewards contract to claim TOKE incentives |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit excluding the FEI

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### requestWithdrawal

```solidity
function requestWithdrawal(
    uint256 amountUnderlying
) external
```

request to withdraw a given amount of tokens to Tokemak. These
tokens will be available for withdraw in the next cycles.
This function can be called by the contract admin, e.g. the OA multisig,
in anticipation of the execution of a DAO proposal that will call withdraw().

note that withdraw() calls will revert if this function has not been
called before.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountUnderlying` | uint256 | of tokens to withdraw in a subsequent withdraw() call. |

### claimRewards

```solidity
function claimRewards(
    uint256 cycle,
    uint256 amount,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

For an example of IPFS json file, see :

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `cycle` | uint256 |  |
| `amount` | uint256 |  |
| `v` | uint8 |  |
| `r` | bytes32 |  |
| `s` | bytes32 |  |

## Events

### ClaimRewards

```solidity
event ClaimRewards(
    address _caller,
    address _token,
    address _to,
    uint256 _amount
)
```

event generated when rewards are claimed

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_token` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |
### RequestWithdrawal

```solidity
event RequestWithdrawal(
    address _caller,
    address _to,
    uint256 _amount
)
```

event generated when a withdrawal is requested

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_caller` | address |  |
| `_to` | address |  |
| `_amount` | uint256 |  |

