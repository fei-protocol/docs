---
sidebar_position: 1
---

The governance pods are the core of the optimistic governance process within the Tribe ecosystem. They are the primary way in which the protocol is managed on an operational day to day basis. Most proposals do not require a full expensive DAO vote, and instead they can be approved in an optimistic fashion via a pod.

## What is a governance pod
Pods can be thought of as working groups tasked with managing specific parts of the protocol and they are composed of experts in that domain. They are implemented as a Gnosis Safe multisig connected to a timelock. 

Each proposal a pod passes must go through the timelock - it is the timelock of the pod that has the relevant access control roles to interact with the protocol. 

### Nope DAO
There is an important counterbalance to the optimistic nature of pods. If the community determines that a proposal passed by a pod should not be actioned, they are able to veto the proposal via a sub-dao called the NopeDAO. The NopeDAO is able to veto and cancel any action a pod proposes, with a low threshold for veto of 10M Tribe. 
