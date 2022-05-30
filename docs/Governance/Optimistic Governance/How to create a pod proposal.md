---
sidebar_position: 4
---
There are 5 steps involved for a pod member to create a pod proposal:

**1.  Pod member creates the proposal on the pod Gnosis Safe**
- A user on a pod multisig creates a transaction on the multisig
- A quorum of members on the multisig approve the transaction
- Proposal is scheduled on the pod timelock

**2. Pod member immediately makes a forum post on https://tribe.fei.money with the specifics of the proposal**
- Post must include as much detail as possible
- Timelock proposal id and execution timestamp must be provided
- A notification to the Governance Tribe in the Fei discord should be made

**3. Pod member posts a link to the NopeDAO snapshot**
- To lower the barrier to veto, the pod member should post a snapshot vote which includes a link to the snapshot proposal and a choice to veto. An example of this is available at: https://snapshot.fei.money/#/proposal/0x655040d0d30c8fb448f1cf04e0e9d95867f6c60b04b5c9538217ae35b37b2ff8 
- If the veto hits the 10M quorum threshold, either the NopeDAO, guardian or Tribal Council will veto the proposal
- Alternatively, if a user is technical, a veto proposal can be constructed directly via the NopeDAO Tally interface. Instructions for how to do that are available in the `How to use the NopeDAO` section of these docs

**4. Pod member registers proposal human readable metadata**
- The pod member should send a transaction to the `GovernanceMetadataRegistry` to register human readable metadata. This will make a human readable description of the proposal available on the governance page: https://tribedao.xyz/governance 
- The ABI of the call to be made is: `governanceMetadataRegistry.registerProposal(podId, proposalId, metadata)` where `metadata` is a string description of the proposal, `podId` is the unique identifier of the pod and `proposalId` is the timelock proposal ID
- To call the registry, it requires the `POD_METADATA_REGISTER_ROLE`



