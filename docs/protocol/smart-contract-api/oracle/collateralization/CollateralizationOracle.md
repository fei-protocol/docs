# IPausable

## Functions

### paused

```solidity
function paused() external returns (bool)
```

# CollateralizationOracle

Reads a list of PCVDeposit that report their amount of collateral
        and the amount of protocol-owned FEI they manage, to deduce the
        protocol-wide collateralization ratio.

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address[] _deposits,
    address[] _tokens,
    address[] _oracles
) public
```

CollateralizationOracle constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core for reference |
| `_deposits` | address[] | the initial list of PCV deposits |
| `_tokens` | address[] | the initial supported tokens for oracle |
| `_oracles` | address[] | the matching set of oracles for _tokens |

### isTokenInPcv

```solidity
function isTokenInPcv(
    address token
) external returns (bool)
```

returns true if a token is held in the pcv

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

### getTokensInPcv

```solidity
function getTokensInPcv() external returns (address[])
```

returns an array of the addresses of tokens held in the pcv.

### getTokenInPcv

```solidity
function getTokenInPcv(
    uint256 i
) external returns (address)
```

returns token at index i of the array of PCV tokens

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `i` | uint256 |  |

### getDepositsForToken

```solidity
function getDepositsForToken(
    address _token
) external returns (address[])
```

returns an array of the deposits holding a given token.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |

### getDepositForToken

```solidity
function getDepositForToken(
    address token,
    uint256 i
) external returns (address)
```

returns the address of deposit at index i of token _token

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |
| `i` | uint256 |  |

### addDeposit

```solidity
function addDeposit(
    address _deposit
) external
```

Add a PCVDeposit to the list of deposits inspected by the
        collateralization ratio oracle.
        note : this function reverts if the deposit is already in the list.
        note : this function reverts if the deposit's token has no oracle.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposit` | address | : the PCVDeposit to add to the list. |

### addDeposits

```solidity
function addDeposits(
    address[] _deposits
) external
```

adds a list of multiple PCV deposits. See addDeposit.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposits` | address[] |  |

### _addDeposits

```solidity
function _addDeposits(
    address[] _deposits
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposits` | address[] |  |

### _addDeposit

```solidity
function _addDeposit(
    address _deposit
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposit` | address |  |

### removeDeposit

```solidity
function removeDeposit(
    address _deposit
) external
```

Remove a PCVDeposit from the list of deposits inspected by
        the collateralization ratio oracle.
        note : this function reverts if the input deposit is not found.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposit` | address | : the PCVDeposit address to remove from the list. |

### removeDeposits

```solidity
function removeDeposits(
    address[] _deposits
) external
```

removes a list of multiple PCV deposits. See removeDeposit.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposits` | address[] |  |

### _removeDeposit

```solidity
function _removeDeposit(
    address _deposit
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_deposit` | address |  |

### swapDeposit

```solidity
function swapDeposit(
    address _oldDeposit,
    address _newDeposit
) external
```

Swap a PCVDeposit with a new one, for instance when a new version
        of a deposit (holding the same token) is deployed.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_oldDeposit` | address | : the PCVDeposit to remove from the list. |
| `_newDeposit` | address | : the PCVDeposit to add to the list. |

### setOracle

```solidity
function setOracle(
    address _token,
    address _newOracle
) external
```

Set the price feed oracle (in USD) for a given asset.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address | : the asset to add price oracle for |
| `_newOracle` | address | : price feed oracle for the given asset |

### setOracles

```solidity
function setOracles(
    address[] _tokens,
    address[] _oracles
) public
```

adds a list of token oracles. See setOracle.

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tokens` | address[] |  |
| `_oracles` | address[] |  |

### _setOracles

```solidity
function _setOracles(
    address[] _tokens,
    address[] _oracles
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_tokens` | address[] |  |
| `_oracles` | address[] |  |

### _setOracle

```solidity
function _setOracle(
    address _token,
    address _newOracle
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_token` | address |  |
| `_newOracle` | address |  |

### update

```solidity
function update() external
```

update all oracles required for this oracle to work that are not
        paused themselves.

### isOutdated

```solidity
function isOutdated() external returns (bool)
```

### read

```solidity
function read() public returns (struct Decimal.D256 collateralRatio, bool validityStatus)
```

Get the current collateralization ratio of the protocol.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `collateralRatio` | struct Decimal.D256 | the current collateral ratio of the protocol. |
| `validityStatus` | bool | the current oracle validity status (false if any
        of the oracles for tokens held in the PCV are invalid, or if
        this contract is paused). |

### pcvStats

```solidity
function pcvStats() public returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)
```

returns the Protocol-Controlled Value, User-circulating FEI, and
        Protocol Equity.

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolControlledValue` | uint256 | : the total USD value of all assets held
        by the protocol. |
| `userCirculatingFei` | uint256 | : the number of FEI not owned by the protocol. |
| `protocolEquity` | int256 | : the signed difference between PCV and user circulating FEI. |
| `validityStatus` | bool | : the current oracle validity status (false if any
        of the oracles for tokens held in the PCV are invalid, or if
        this contract is paused). |

### isOvercollateralized

```solidity
function isOvercollateralized() external returns (bool)
```

returns true if the protocol is overcollateralized. Overcollateralization
        is defined as the protocol having more assets in its PCV (Protocol
        Controlled Value) than the circulating (user-owned) FEI, i.e.
        a positive Protocol Equity.

## Events

### DepositAdd

```solidity
event DepositAdd(
    address from,
    address deposit,
    address token
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `deposit` | address |  |
| `token` | address |  |
### DepositRemove

```solidity
event DepositRemove(
    address from,
    address deposit
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `deposit` | address |  |
### OracleUpdate

```solidity
event OracleUpdate(
    address from,
    address token,
    address oldOracle,
    address newOracle
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `token` | address |  |
| `oldOracle` | address |  |
| `newOracle` | address |  |

