---
sidebar_position: 3
---
# Liquidations and Debt
Turbo uses liquidations to overcollateralize boosted FEI, which is a debt.

The FEI strategy doesn't count as collateral, instead it is a second recovery mechanism during failure.

In addition to normal liquidations, Safes can fail when a boosted strategy becomes unwithdrawable (due to a downstream issue such as bad debt/oracle manipulation).

Here is a table to describe how liquidations and unwithdrawable strategies are handled.

| Failure Mode                  | Collateral Destination | Boosted FEI Destination    |
| ----------------------------- | ---------------------- | --------------------------- |
| Successful Liquidation        | Sold to repay debt     | Withdrawable by Safe owner    |
| Failed Liquidation (Bad Debt) | Withdrawable by Safe owner | Force "less" by Tribe DAO (immediate) |
| Strategy unwithdrawable + liquidation | Sold to repay debt  | Unwithdrawable |
| Strategy unwithdrawable + overcollateralized | Seized by Tribe DAO (15 day delay) | Unwithdrawable |

Note, if a strategy is unwithdrawable, a team can repay their FEI debt manually during the sieze window and recover their collateral.

## The Savior
The [Turbo Savior](https://github.com/fei-protocol/tribe-turbo/blob/main/src/modules/TurboSavior.sol) is a deleveraging mechanism which allows any safe to be permissionlessly "lessed" by any address if nearing liquidation (intially configured at 80% of credit line).

**There is no incentive for calling the savior.** Owners are responsible for running their own bot or providing incentives to save their safes.

To save a vault, call 
```
/// @notice Save a Safe (call less on owner's behalf to prevent liquidation).
/// @param safe The Safe to be saved.
/// @param vault The Vault to less from.
/// @param feiAmount The amount of Fei to less from the Safe.
function save(
    TurboSafe safe,
    ERC4626 vault,
    uint256 feiAmount
) external
```

and input the desired safe, vault, and fei amount. If the vault is over the 80%, it will be lessed by the input amount.
