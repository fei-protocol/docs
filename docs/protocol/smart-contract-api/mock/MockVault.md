# MockVault

## Functions

### constructor

```solidity
function constructor(
    contract IERC20[] tokens,
    address owner
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `tokens` | contract IERC20[] |  |
| `owner` | address |  |

### setMockDoTransfers

```solidity
function setMockDoTransfers(
    bool flag
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `flag` | bool |  |

### getPool

```solidity
function getPool(
    bytes32 poolId
) external returns (address poolAddress, enum MockVault.PoolSpecialization poolSpec)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `poolId` | bytes32 |  |

### getPoolTokens

```solidity
function getPoolTokens(
    bytes32 poolId
) external returns (contract IERC20[] tokens, uint256[] balances, uint256 lastChangeBlock)
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `poolId` | bytes32 |  |

### setBalances

```solidity
function setBalances(
    uint256[] balances
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `balances` | uint256[] |  |

### joinPool

```solidity
function joinPool(
    bytes32 poolId,
    address sender,
    address recipient,
    struct MockVault.JoinPoolRequest request
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `poolId` | bytes32 |  |
| `sender` | address |  |
| `recipient` | address |  |
| `request` | struct MockVault.JoinPoolRequest |  |

### exitPool

```solidity
function exitPool(
    bytes32 poolId,
    address sender,
    address payable recipient,
    struct MockVault.ExitPoolRequest request
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `poolId` | bytes32 |  |
| `sender` | address |  |
| `recipient` | address payable |  |
| `request` | struct MockVault.ExitPoolRequest |  |

