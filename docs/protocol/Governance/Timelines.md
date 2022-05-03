---
sidebar_position: 1
---

The various governance processes in Fei have different timelines and delays involved. These are decided based on factors including the extent of the powers of the governance actor and the level of decentralised governance and oversight governing that actor. 

## DAO
The DAO has the ultimate authority over the protocol and is governed by the Tribe community. It's timelines are:
- Time from proposal to execution: 3 days
- Voting period: 2 days
- Timelock: 1 days

## Optimistic governance
There are two implementations of optimistic governance in Fei. Both are implemented as a Gnosis Safe connected to a Timelock. 

The first is referred to as OA, and is a general purpose method of approving proposals in an optimistic fashion. It has various powers over the protocol, including the Tribal Chief admin role, PCV Guardian role and Oracle Admin Role. Given these roles, OA has a long timelock.
- Time from proposal to execution: 4 days
- Timelock: 4 days

The second is focused on minor operational tasks and is referred to as the ops timelock. It has four roles: `ORACLE_ADMIN_ROLE`, `VOTIUM_ADMIN_ROLE`, `METAGOVERNANCE_VOTE_ADMIN`, `METAGOVERNANCE_TOKEN_STAKING`. 
- Time from proposal to execution: 1 days
- Timelock: 1 days

## Security guardian
The security guardian is able to act immediately.
