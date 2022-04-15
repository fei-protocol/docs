# IBAMM

## Functions

### fetchPrice

```solidity
function fetchPrice() external returns (uint256)
```

returns ETH price scaled by 1e18

### getSwapEthAmount

```solidity
function getSwapEthAmount(
    uint256 lusdQty
) external returns (uint256 ethAmount, uint256 feeEthAmount)
```

returns amount of ETH received for an LUSD swap

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `lusdQty` | uint256 |  |

### LUSD

```solidity
function LUSD() external returns (contract IERC20)
```

LUSD token address

### SP

```solidity
function SP() external returns (contract IStabilityPool)
```

Liquity Stability Pool Address

### balanceOf

```solidity
function balanceOf(
    address account
) external returns (uint256)
```

BAMM shares held by user

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `account` | address |  |

### totalSupply

```solidity
function totalSupply() external returns (uint256)
```

total BAMM shares

### bonus

```solidity
function bonus() external returns (address)
```

Reward token

### deposit

```solidity
function deposit(
    uint256 lusdAmount
) external
```

deposit LUSD for shares in BAMM

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `lusdAmount` | uint256 |  |

### withdraw

```solidity
function withdraw(
    uint256 numShares
) external
```

withdraw shares  in BAMM for LUSD + ETH

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `numShares` | uint256 |  |

### transfer

```solidity
function transfer(
    address to,
    uint256 amount
) external
```

transfer shares

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address |  |
| `amount` | uint256 |  |

### swap

```solidity
function swap(
    uint256 lusdAmount,
    uint256 minEthReturn,
    address dest
) external returns (uint256)
```

swap LUSD to ETH in BAMM

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `lusdAmount` | uint256 |  |
| `minEthReturn` | uint256 |  |
| `dest` | address |  |

