---
sidebar_position: 5
---

To directly create a Nope DAO veto on-chain follow these 3 steps:

**1. Fetch the timelock ID of the pod proposal that should be vetoed**
- This can be found on the https://tribe.fei.money governance post that was made when the proposal was made
- Alternatively, it can also be found on the Governance site: 

**2. Go to the Tally Nope DAO proposal creator and create a veto proposal: https://www.tally.xyz/governance/eip155:1:0x6C7aF43Ce97686e0C8AcbBc03b2E4f313c0394C7/proposal/create**

![Tally Nope DAO Interface](TallyNope.png)

- Create a proposal to call the `veto()` method of the `podAdminGateway` contract. This contract allows the Nope DAO, Tribal Council and Security Guardian to veto a pod proposal, given the pod's ID and the proposal timelock ID
![Veto transaction](VetoTx.png)


**3. If 10M TRIBE votes in favour, the `Execute` button on Tally will become available. Click to veto the pod proposal**
