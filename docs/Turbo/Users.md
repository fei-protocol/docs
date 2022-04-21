---
sidebar_position: 2
---
# Turbo User Guide

From a user perspective, Turbo is basically a wrapper (Safe) around a collaeralized Fuse lending position. The borrowed asset is FEI at 0% APR, and that FEI is then resupplied to earn yield into ERC-4626 strategies.

Definitions:
* [Fuse](https://v2.rari.capital/fuse) - a lending market platform where users can supply collateral and borrow any supported asset with liquidity.
* Turbo Safe - an ERC-4626 Vault which can boost FEI and share revenue. Safe's have a single collateral but can support many yield strategies.
* [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626) - a new standard for Tokenized Vaults. It represents a strategy which is itself also tokenized.

Supported collateral types and yield strategies need to be added by Tribe Governance.

Initial Collaterals:
* TRIBE
* BAL
* gOHM

Initial yield strategies
* Fuse FEI from approved pools

Users of Turbo become joint issuers of FEI with the Tribe DAO, deciding which markets to supply newly minted FEI to and splitting the revenue. They generally want one or both of:
1. additional yield on tokens
2. Liquidity on FEI in a specific market

Revenue splits are calculated as follows:
1. If the Safe has a custom revenue split set by governance, use that.
2. If the Collateral associated with the Safe has a custom revenue split, use that
3. Use the default revenue split.

Safes are created with a default access control which allows the creator (user), router, and savior to access the safe. The router allows the user to perform multiple actions at once. The Savior allows any EOA to delever the vault when it exceeds a safe collateralization threshold.

See advanced operations for how to override this access control.

## Basic Operations

Turbo users can perform the following basic actions on their Safes:

### Deposit/Withdraw
Add and remove collateral which can be used to boost or improve borrowing health factor. This is always denominated in a single token per Safe e.g. TRIBE or BAL.

These follow the ERC-4626 interface and include mint/redeem as well.

### Boost/Less
```
    /// @notice Borrow Fei from the Turbo Fuse Pool and deposit it into an authorized Vault.
    /// @param vault The Vault to deposit the borrowed Fei into.
    /// @param feiAmount The amount of Fei to borrow and supply into the Vault.
    function boost(ERC4626 vault, uint256 feiAmount) external
```
Boosting is borrowing FEI and depositing it into a yield strategy.

```
    /// @notice Withdraw Fei from a deposited Vault and use it to repay debt in the Turbo Fuse Pool.
    /// @param vault The Vault to withdraw the Fei from.
    /// @param feiAmount The amount of Fei to withdraw from the Vault and repay in the Turbo Fuse Pool.
    function less(ERC4626 vault, uint256 feiAmount) external;
```
Lessing is the inverse of boosting.

Note that Tribe governance can less any Safe at any time to contract the FEI supply. This would be a matter of monetary policy to protect the FEI peg in the event of a demand shock.

### Slurp/Sweep
```
/// @notice Accrue any interest earned by the Safe in the Vault.
/// @param vault The Vault to accrue interest from, if any.
/// @dev Sends a portion of the interest to the Master, as determined by the Clerk.
function slurp(ERC4626 vault) external;
```

Slurp - accrues fees earned on the FEI yield strategies on the safe. This operation is done per safe. The Tribe governance share of the revenue split FEI is sent there. The Safe owner's share is withdrawn to the Safe where it can then be swept.

NOTE Tribe Governance can slurp on a Safe at any time to claim its fees.

```
/// @notice Claim tokens sitting idly in the Safe.
/// @param to The recipient of the sweeped tokens.
/// @param token The token to sweep and send.
/// @param amount The amount of the token to sweep.
function sweep(
    address to,
    ERC20 token,
    uint256 amount
) external;
```
Sweep - withdraw fei accrued as interest or other tokens laying idle in a safe. To get FEI interest into the Safe, first less the entire balance. ([TODO](https://linear.app/fei/issue/DEV-2678/add-skim-to-turbo) consider adding a skim method to free up surplus FEI).

## Risks
The risks of using Turbo are similar to a normal lending market, with some risks reduced and other unique Turbo-specific risks.

There are two different types of risks to the Safe holder, collateral risk and yield strategy risk.

### Collateral Risk
A collateral can be liquidated like a normal Fuse position. If this happens, all FEI debt would be repayed by the safe. This means the boosted amount becomes equity which the Safe holder can sweep.

In other words, liquidation effectively means the user's collateral was force sold into the FEI yield strategies the Safe is holding. The revenue split will continue to apply to all interest. 

### Yield Strategy Risk
The yield strategy where FEI is deployed may become insolvent due to bad debt or some kind of vulnerability. Because the vault can no longer "less", the Turbo Safe begins to incur the risk of this bad debt. If the vault holder cannot repay, Tribe Governance can repay and sieze the collateral using the `gib` operation.

## Advanced Operations

Safe holders can expose the basic operations to smart contracts or other users according to arbitrary logic by replacing the Safe's [Authority](https://github.com/Rari-Capital/solmate/blob/main/src/auth/Auth.sol)

This would remove the Router and Savior's access unless it is re-granted in the new authority.

Only replace the Authority if you are sure you know what you are doing, this operation can risk the user's collateral if done incorrectly.