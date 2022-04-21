---
sidebar_position: 4
---
# Tribe DAO Operators

## Adding new collaterals
1. `TurboAdmin.addCollateral()`
2. `TurboBooster.setBoostCapForCollateral()`
3. (Optional) `TurboClerk.setCustomFeePercentageForCollateral()`

## Adding new strategies
1. `TurboBooster.setBoostCapForVault()`

## Setting custom Safe revenue split
1. `TurboClerk.setCustomFeePercentageForSafe()`

## Executing Gibber
1. `TurboAdmin.schedule(gibber, abi.encodeWithSignature("impoundAll(address,address)",safe,to))`. Use https://ethtx.info/ to read tx data and save the salt.
2. Wait 15 day timelock
3. `TurboAdmin.execute(gibber,abi.encodeWithSignature("impoundAll(address,address)",safe,to), salt)` (get salt from tx data of 1.)

## Access Control Summary
These are the roles which are in Tribe Turbo, their powers, and their default owners.

### GIBBER_ROLE
HIGH CLEARANCE. capable of calling `gib` to impound collateral. 

Powers:
* `TurboSafe.gib`

Owners:
* gibber
    
### ROUTER_ROLE
HIGH CLEARANCE. Optional module which can interact with any user's vault by default.

The router itself replicates access control so that other users can't interact

Powers:
* `TurboSafe.boost`
* `TurboSafe.less`
* `TurboSafe.slurp`
* `TurboSafe.sweep`
* `TurboSafe.deposit`
* `TurboSafe.mint`
* `TurboSafe.withdraw`
* `TurboSafe.redeem`

Owners:
* router

### SAVIOR_ROLE 
Capable of lessing any vault. Exposed on optional TurboSavior module.

Powers:
* `TurboSafe.less`

Owners:
* savior

### TURBO_ADMIN_ROLE
Operational admin of Turbo, can whitelist collaterals, strategies, and configure most parameters.

Powers:
* `TurboSafe.slurp`
* `TurboSafe.less`
* `TurboMaster.createSafe`
* `TurboMaster.setBooster`
* `TurboMaster.setDefaultSafeAuthority`
* `TurboMaster.sweep`
* `TurboClerk.setDefaultFeePercentage`
* `TurboClerk.setCustomFeePercentageForCollateral`
* `TurboClerk.setCustomFeePercentageForSafe`
* `TurboBooster.setFreezeStatus`
* `TurboBooster.setBoostCapForVault`
* `TurboBooster.setBoostCapForCollateral`
* `TurboSavior.setMinDebtPercentageForSaving`
* `TurboAdmin._setMarketSupplyCaps`
* `TurboAdmin._setMarketSupplyCapsByUnderlying`
* `TurboAdmin._setMarketBorrowCaps`
* `TurboAdmin._setMarketBorrowCapsByUnderlying`
* `TurboAdmin._setMintPausedByUnderlying`
* `TurboAdmin._setMintPaused`
* `TurboAdmin._setBorrowPaused`
* `TurboAdmin._setBorrowPausedByUnderlying`
* `TurboAdmin.oracleAdd`
* `TurboAdmin.addCollateral`
* `TurboAdmin._deployMarket`
* `TurboAdmin._addRewardsDistributor`
* `TurboAdmin._setCloseFactor`
* `TurboAdmin._setCollateralFactor`
* `TurboAdmin._setLiquidationIncentive`
* `TurboAdmin.schedule`
       
Owners:
* fei dao timelock
* turbo pod if [FIP-82](https://tribe.fei.money/t/fip-82-governance-enhancements/3945/23) passes
* master
* admin

### GUARDIAN_ROLE
Pause and security Guardian role.
   
Powers:
* `TurboSafe.less`
* `TurboBooster.setFreezeStatus`
* `TurboAdmin._setMarketSupplyCaps`
* `TurboAdmin._setMarketSupplyCapsByUnderlying`
* `TurboAdmin._setMarketBorrowCaps`
* `TurboAdmin._setMarketBorrowCapsByUnderlying`
* `TurboAdmin._setMintPausedByUnderlying`
* `TurboAdmin._setMintPaused`
* `TurboAdmin._setBorrowPaused`
* `TurboAdmin._setBorrowPausedByUnderlying`
* `TurboAdmin._setTransferPaused`
* `TurboAdmin._setSeizePaused`
       
Owners:
* Tribe Security Guardian

### GOVERN_ROLE
HIGH CLEARANCE. Capable of critical governance functionality on TurboAdmin such as oracle upgrades. 

Powers:
* `TurboAdmin._setBorrowCapGuardian`
* `TurboAdmin._setPauseGuardian`
* `TurboAdmin.oracleChangeAdmin`
* `TurboAdmin._setWhitelistEnforcement`
* `TurboAdmin._setPriceOracle`
* `TurboAdmin._setMintPaused`
* `TurboAdmin._unsupportMarket`
* `TurboAdmin._toggleAutoImplementations`
* `TurboAdmin.scheduleSetPendingAdmin`
* `TurboAdmin.schedule`
* `TurboAdmin.cancel`
       
Owners:
* Fei DAO Timelock

### TURBO_STRATEGIST_ROLE
Limited version of TURBO_ADMIN_ROLE which can manage collateral and vault parameters.

Powers:
* `TurboBooster.setBoostCapForVault`
* `TurboBooster.setBoostCapForCollateral`
* `TurboAdmin._setMarketSupplyCaps`
* `TurboAdmin._setMarketSupplyCapsByUnderlying`
* `TurboAdmin.addCollateral`
       
Owners:
* None initially