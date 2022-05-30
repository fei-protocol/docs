---
sidebar_position: 1
---


## Token governance via the DAO


## Optimistic governance via a Gnosis Safe and timelock
Most proposals do not require a full expensive DAO vote, and instead they can be approved in an optimistic fashion. A process referred to as OA (optimistic approval) exists to perform this - it is implemented as a Gnosis Safe multisig attached to a timelock contract. The timelock is present to give a user time to leave the Fei ecosystem if they disagree with a proposal.

The multisig is a 4 of 7 multisig, with a 4 day timelock. The owners are actors invested in the success of Fei - core team members and engaged community members. 

The timelock contract is a standard OZ `TimelockController.sol`. It can be thought of as the "executor" of OA proposals and is granted various roles through which it can operate on the protocol: `ORACLE_ADMIN_ROLE`, `SWAP_ADMIN_ROLE`, `TRIBAL_CHIEF_ADMIN_ROLE`.

It is important to note, that any proposal in the OA timelock can be vetoed by the DAO and the Security guardian. 


