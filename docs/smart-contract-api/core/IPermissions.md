# IPermissions

## Functions

### createRole

```solidity
function createRole(
    bytes32 role,
    bytes32 adminRole
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `role` | bytes32 |  |
| `adminRole` | bytes32 |  |

### grantMinter

```solidity
function grantMinter(
    address minter
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter` | address |  |

### grantBurner

```solidity
function grantBurner(
    address burner
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `burner` | address |  |

### grantPCVController

```solidity
function grantPCVController(
    address pcvController
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvController` | address |  |

### grantGovernor

```solidity
function grantGovernor(
    address governor
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | address |  |

### grantGuardian

```solidity
function grantGuardian(
    address guardian
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guardian` | address |  |

### revokeMinter

```solidity
function revokeMinter(
    address minter
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `minter` | address |  |

### revokeBurner

```solidity
function revokeBurner(
    address burner
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `burner` | address |  |

### revokePCVController

```solidity
function revokePCVController(
    address pcvController
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `pcvController` | address |  |

### revokeGovernor

```solidity
function revokeGovernor(
    address governor
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `governor` | address |  |

### revokeGuardian

```solidity
function revokeGuardian(
    address guardian
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `guardian` | address |  |

### revokeOverride

```solidity
function revokeOverride(
    bytes32 role,
    address account
) external
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `role` | bytes32 |  |
| `account` | address |  |

### GUARDIAN_ROLE

```solidity
function GUARDIAN_ROLE() external returns (bytes32)
```

### GOVERN_ROLE

```solidity
function GOVERN_ROLE() external returns (bytes32)
```

### BURNER_ROLE

```solidity
function BURNER_ROLE() external returns (bytes32)
```

### MINTER_ROLE

```solidity
function MINTER_ROLE() external returns (bytes32)
```

### PCV_CONTROLLER_ROLE

```solidity
function PCV_CONTROLLER_ROLE() external returns (bytes32)
```

