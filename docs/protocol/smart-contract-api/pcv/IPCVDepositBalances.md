# IPCVDepositBalances

## Functions

### balance

```solidity
function balance() external returns (uint256)
```

gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn

### balanceReportedIn

```solidity
function balanceReportedIn() external returns (address)
```

gets the token address in which this deposit returns its balance

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() external returns (uint256, uint256)
```

gets the resistant token balance and protocol owned fei of this deposit

