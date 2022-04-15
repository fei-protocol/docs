# TRIBERagequit

## Functions

### constructor

```solidity
function constructor(
    bytes32 root,
    uint256 _rageQuitStart,
    uint256 _rageQuitEnd,
    address tribeRariDAO
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `root` | bytes32 |  |
| `_rageQuitStart` | uint256 |  |
| `_rageQuitEnd` | uint256 |  |
| `tribeRariDAO` | address |  |

### ngmi

```solidity
function ngmi(
    uint256 amount,
    uint256 totalMerkleAmount,
    bytes32[] merkleProof
) external
```

ragequit held TRIBE with FEI

not gonna make it

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `amount` | uint256 | the amount to redeem in TRIBE |
| `totalMerkleAmount` | uint256 | the amount of TRIBE allocated to the caller in the merkle drop |
| `merkleProof` | bytes32[] | a proof proving that the caller may redeem up to `totalMerkleAmount` amount of tribe |

### getCirculatingTribe

```solidity
function getCirculatingTribe() public returns (uint256)
```

### exchangeRate

```solidity
function exchangeRate(
    uint256 protocolEquity
) public returns (uint256)
```

recalculate the exchange amount using the protocolEquity

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolEquity` | uint256 | the protocol equity |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | the new intrinsicValueExchangeRateBase |

### setExchangeRate

```solidity
function setExchangeRate(
    uint256 protocolEquity
) external returns (uint256)
```

Update the exchange rate based on protocol equity

only callable once by guardian

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `protocolEquity` | uint256 | the protocol equity |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | uint256 | the new exchange rate |

### verifyClaim

```solidity
function verifyClaim(
    address claimer,
    uint256 totalMerkleAmount,
    bytes32[] merkleProof
) private returns (bool)
```

validate the proof of a merkle drop claim

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `claimer` | address | the address attempting to claim |
| `totalMerkleAmount` | uint256 | the amount of scaled TRIBE allocated the claimer claims that they have credit over |
| `merkleProof` | bytes32[] | a proof proving that claimer may redeem up to `totalMerkleAmount` amount of tribe |

#### Return Values

| Name | Type | Description |
| :--- | :--- | :---------- |
| `[0]` | bool | boolean true if the proof is valid, false if the proof is invalid |

## Events

### Exchange

```solidity
event Exchange(
    address from,
    uint256 amountIn,
    uint256 amountOut
)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `from` | address |  |
| `amountIn` | uint256 |  |
| `amountOut` | uint256 |  |

