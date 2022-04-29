---
sidebar_position: 1
---
# Overview

Fei Protocol's goal is to scalably issue a $1 pegged decentralized stablecoin, FEI.

At a high level the FEI peg mechanism is straightforward. Fei Protocol algorithmically manages a reserve of tokens (Protocol controlled value) which supports direct redeption of FEI at $1.

## Direct Redeemability
FEI can be minted and redeemed for $1 of collateral. Arbitrageurs ensure a tight peg on secondary markets.

The assets which can be minted or redeemed change among DAI, ETH and LUSD depending on market conditions.

## Protocol Controlled Value
The protocol reserves are known as *Protocol Controlled Value* or PCV. The PCV is deployed into a combination of liquid and illiquid strategies with the following goals:
1. Defending the peg
2. Providing utility/liquidity to FEI and Tribe DAO products
3. Growing through yield farming

## Tribe
Tribe serves as both a governance mechanism and beneficiary of protocol productivity.

Tribe insures reserve shortfalls, if PCV ever dips below 100% collateralization, an on-chain recovery mechanism would issue new TRIBE to buy back FEI debt.

When a surplus exists, the protocol buys back TRIBE off of the market with FEI at a percentage of the surplus.