---
sidebar_position: 4
---

# Buybacks

When the Collateralization ratio is above 100%, Fei protocol can buy back TRIBE with newly minted FEI. This TRIBE is sent to the treasury to fund development, partnerships, and liquidity mining.

The way a buyback occurs is:
1. Calculate PCV Equity (PCV - user FEI)
2. Calculate mint amount APR * Equity / period FEI. [PCVEquityMinter](../smart-contract-api/fei/minter/PCVEquityMinter.md)
3. Begin a Balancer auction to buy TRIBE for the FEI from step 2. [BalancerLBPSwapper](../smart-contract-api/pcv/balancer/BalancerLBPSwapper.md)