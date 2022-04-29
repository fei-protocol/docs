---
sidebar_position: 2
---

# PCV Management
The PCV (Protocol Controlled Value) is the aggregate amount of all the funds held by the protocol on its various PCV Deposits. It is managed collectively by all the Tribe DAO token holders, through the protocol Governance.

Through governance proposals, anyone can suggest new "yield strategies" or PCV deployments, changes of sizes or affectations, and if approved, new PCV Deposits will be deployed to implement them.

There are a few different types of PCV movements:
* manual
* automated
* guardian

## Manual PCV Movements
The movement of PCV between deposits can be performed by any smart-contract with the `PCV_CONTROLLER` role, including the DAO Governor (see Access Control).

Through governance, Tribe holders can vote to move PCV from one location to another, for example [moving ETH from Aave into Lido](https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494/proposal/95350699291559233969894926874586064836554064299212547920320505748177226392479).

If a desired PCV deployment doesn't have a PCV deposit, it can be escrowed in the [DAO's Timelock](https://etherscan.io/address/0xd51dba7a94e1adea403553a8235c302cebf41a3c).

## Automated PCV Movements
In certain cases PCV needs to be automatically moved between deposits when one deposit runs low on reserves, such as the [Peg Stability Module](./PegStabilityModule.md)

Protocol infrastructure can trigger these moves through contracts like the [PCVDripController](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/utils/PCVDripController.sol) which can incentivize conditional movements, or directly move them as a `PCV_CONTROLLER`.

## Guardian PCV Movements
The [PCV Guardian](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/PCVGuardian.sol) can move PCV instantly between "safe" PCV deposits which are pre-approved by the DAO. For instance, to save funds held on a compromised PCV deposit, or move yield farming rewards to a suitable deposit where they can be delegated to vote in other DAOs.