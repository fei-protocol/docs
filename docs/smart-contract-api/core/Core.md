# Core

maintains roles, access control, fei, tribe, genesisGroup, and the TRIBE treasury

## Functions

### init

```solidity
function init() external
```

### setFei

```solidity
function setFei(
    address token
) external
```

sets Fei address to a new address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | new fei address |

### setTribe

```solidity
function setTribe(
    address token
) external
```

sets Tribe address to a new address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address | new tribe address |

### allocateTribe

```solidity
function allocateTribe(
    address to,
    uint256 amount
) external
```

sends TRIBE tokens from treasury to an address

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `to` | address | the address to send TRIBE to |
| `amount` | uint256 | the amount of TRIBE to send |

### _setFei

```solidity
function _setFei(
    address token
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

### _setTribe

```solidity
function _setTribe(
    address token
) internal
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `token` | address |  |

