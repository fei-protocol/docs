---
sidebar_position: 5
---

Fei Protocol needs to protect against malicious actors and attacks that come in multiple categories. Fei follows modern security practices to firewall assets from each other as best as possible, so that exploits in one area don't affect others. We also use a variety of features to pre-emptively and retractively secure assets, such as the PCV Guardian and PCV Sentinel.

## Audits and Bug Bounties
Fei Protocol code has been reviewed by top tier security researchers from 
- ConsenSys Diligence
- OpenZeppelin
- Code4rena
- Spearbit

The Tribe DAO ImmuneFi bug bounty offers huge rewards to whitehats for finding exploits and safely reporting them.

## Modular Access Control Architecture
Rather than using proxies for upgradeability, which is a pattern that is easy to misconfigure, the Tribe opts for heavily access controlled, modular architecture.

This keeps components simple, and separates roles so issues in the system remain local and do not expand to all of the PCV.

## Guardian

The Guardian can:
* pause protocol functionality such as FEI minting and PCV movements
* veto malicious governance proposals
* revoke (but not add) roles in the system
* Move PCV to "safe" approved addresses through the [PCV Guardian](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/PCVGuardian.sol) deployed [here](https://etherscan.io/address/0x2D1b1b509B6432A73e3d798572f0648f6453a5D9#code).

### PCV Guardian
The PCV Guardian can move assets from any pcv deposit to any of the "safe" addresses it has registered. It has the PCV Controller role, exposed only to these approved addresses through the Guardian role and PCV_SAFE_MOVER role. The Governor role and PCV_GUARDIAN_ADMIN can add additional safe addresses, and the guardian role can remove them.

## PCV Sentinel

[The PCV Sentinel](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/sentinel/PCVSentinel.sol), [deployed here](https://etherscan.io/address/0xC297705Acf50134d256187c754B92FA37826C019#code) is a smart contract with the "guardian" role. Governance can add "guards" to the PCV Sentinel. Each guard is a smart contract that conforms to the [IGuard](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/sentinel/IGuard.sol) interface.

Guards know how to check for issues, and what calldata to provide the Sentinel to resolve the issue (or protect the asset in question, or pause functionality, etc). Guards are useless on their own as they have no role in the Fei/Tribe system.

The PCV Sentinel acts as automated extennsion of the Multisig Guardian by exposing guard calls to *any* address in the ecosystem.

Planned guards include:
- fuse oracle liquidity monitoring
- psm liquidity monitoring (unpause eth psm when others are low)
- pcv deposit monitoring (pull assets to safety if underlying deposit compromised)