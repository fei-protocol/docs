---
sidebar_position: 1
---

The governance pods are the core of the optimistic governance process within the Tribe ecosystem. They are the primary way in which the protocol is managed on an operational, day to day basis. Most proposals do not require a full expensive DAO vote, and instead they can be approved in an optimistic fashion via a pod.

## What is a governance pod
Pods can be thought of as working groups tasked with managing specific parts of the protocol and are composed of experts in that domain. Their powers are bounded - each is granted explicit permissions over just the relevant parts of the protocol. All pod proposals are optimistic and are assumed to be in alignment with the wishes of the DAO, unless the proposal is vetoed by the community.

Technically they are implemented as a Gnosis Safe multisig connected to a timelock. Each pod proposal that passes must go through the timelock - it is that which is granted the relevant roles to interact with the protocol.

### Nope DAO
There is an important counterbalance to the optimistic nature of pods. If the community determines that a proposal passed by a pod should not be actioned, they are able to veto the proposal via a sub-dao called the Nope DAO. The Nope DAO is able to veto and cancel any action a pod proposes, with a low threshold for veto of 10M Tribe. 
