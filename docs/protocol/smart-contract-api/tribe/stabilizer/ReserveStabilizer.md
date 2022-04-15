# ReserveStabilizer

## Functions

### constructor

```solidity
function constructor(
    address _core,
    address _oracle,
    address _backupOracle,
    contract IERC20 _token,
    uint256 _usdPerFeiBasisPoints
) public
```

ERC20 Reserve Stabilizer constructor

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address | Fei Core to reference |
| `_oracle` | address | the price oracle to reference |
| `_backupOracle` | address | the backup oracle to reference |
| `_token` | contract IERC20 | the ERC20 token for this stabilizer, 0x0 if TRIBE or ETH |
| `_usdPerFeiBasisPoints` | uint256 | the USD price per FEI to sell tokens at |

### exchangeFei

```solidity
function exchangeFei(
    uint256 feiAmount
) public returns (uint256 amountOut)
```

exchange FEI for tokens from the reserves

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `feiAmount` | uint256 | of FEI to sell |

### getAmountOut

```solidity
function getAmountOut(
    uint256 amountFeiIn
) public returns (uint256)
```

returns the amount out of tokens from the reserves for a given amount of FEI

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amountFeiIn` | uint256 | the amount of FEI in |

### withdraw

```solidity
function withdraw(
    address to,
    uint256 amountOut
) external
```

withdraw tokens from the reserves

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | address to send tokens |
| `amountOut` | uint256 | amount of tokens to send |

### deposit

```solidity
function deposit() external
```

new PCV deposited to the stabilizer

no-op because the token transfer already happened

### balance

```solidity
function balance() public returns (uint256)
```

returns the amount of the held ERC-20

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

### setUsdPerFeiRate

```solidity
function setUsdPerFeiRate(
    uint256 newUsdPerFeiBasisPoints
) external
```

sets the USD per FEI exchange rate rate

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `newUsdPerFeiBasisPoints` | uint256 | the USD per FEI exchange rate denominated in basis points (1/10000) |

### _transfer

```solidity
function _transfer(
    address to,
    uint256 amount
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

