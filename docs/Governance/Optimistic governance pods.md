---
sidebar_position: 3
---

The governance pods are the core of the optimistic governance process within the Tribe ecosystem. They are the primary way in which the protocol is managed on an operational day to day basis. Most proposals do not require a full expensive DAO vote, and instead they can be approved in an optimistic fashion via a pod.

## What is a governance pod
Pods can be thought of as working groups tasked with managing specific parts of the protocol and they are composed of experts in that domain. They are implemented as a Gnosis Safe multisig connected to a timelock. 

Each proposal a pod passes must go through the timelock - it is the timelock of the pod that has the relevant access control roles to interact with the protocol. 

There is an important counterbalance to the optimistic nature of pods. If the community determines that a proposal passed by a pod should not be actioned, they are able to veto the proposal via a sub-dao called the NopeDAO. The NopeDAO is able to veto and cancel any action a pod proposes, with a low threshold of 10M Tribe. 

## Tribal Council
Pods are hierarchical in nature. The most powerful pod is the Tribal Council and it is composed of community members and protocol experts who were elected in a Snapshot vote and instated by a subsequent DAO vote: https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494/proposal/98075113212382060992713108948893946030462273453147378810955243825368262837097. 

The Tribal Council is able govern the protocol on an operational day to day basis and has several significant roles to allow it to do that. These roles are documented in the `AccessControl.md` part of these docs. 

The Tribal Council is implemented as a 5 of 9 multisig with a 4 day timelock. The following 9 members were elected:

```
0xc8eefb8b3d50ca87Da7F99a661720148acf97EfA - Brianna Montgomery
0x72b7448f470D07222Dbf038407cD69CC380683F3 - Fishy 
0xA6D08774604d6Da7C96684ca6c4f61f89c4e5b96 - Bruno Rodrigues 
0xe0ac4559739bD36f0913FB0A3f5bFC19BCBaCD52 - Joey Santoro
0xC2138f77E97A9Ac0A4bC26F42D80D29D1a091866 - Jack Lipstone
0x9f5e6F58CC8823D3c022AeBE3942EeF689E9AcD9 - Jack Longarzo 
0xaB339ae6eab3C3CF4f5885E56F7B49391a01DDA6 - State
0xd90E9181B20D8D1B5034d9f5737804Da182039F6 - OneTrueKirk 
0x7671f0615B1764fb4bf4b8dF06B7338843f99678 - Freddie Farmer
```

A read-only UI for the Tribal Council is available at: https://tribecouncil.pod.xyz/ 

### Further pods
The Tribal Council is able to create additional pods and authorise those pods with the powers necessary to govern a specific part of the protocol. When doing so, it is able to determine the pod membership and timelock delay duration.

## NopeDAO
The NopeDAO is a sub-DAO that is able to veto any pod proposal. A community member would create a veto proposal and 10M Tribe would vote in favour in order to cancel the proposal. It is available at: https://www.tally.xyz/governance/eip155:1:0x6C7aF43Ce97686e0C8AcbBc03b2E4f313c0394C7 
