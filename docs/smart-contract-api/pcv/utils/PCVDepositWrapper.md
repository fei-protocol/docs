# PCVDepositWrapper

a lightweight contract to wrap old PCV deposits to use the new interface 
  @author Fei Protocol
  When upgrading the PCVDeposit interface, there are many old contracts which do not support it.
  The main use case for the new interface is to add read methods for the Collateralization Oracle.
  Most PCVDeposits resistant balance method is simply returning the balance as a pass-through
  If the PCVDeposit holds FEI it may be considered as protocol FEI

  This wrapper can be used in the CR oracle which reduces the number of contract upgrades and reduces the complexity and risk of the upgrade

## Functions

### constructor

```solidity
function constructor(
    contract IPCVDepositBalances _pcvDeposit
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_pcvDeposit` | contract IPCVDepositBalances |  |

### balance

```solidity
function balance() public returns (uint256)
```

returns total balance of PCV in the Deposit

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

returns the resistant balance and FEI in the deposit

### balanceReportedIn

```solidity
function balanceReportedIn() public returns (address)
```

display the related token of the balance reported

