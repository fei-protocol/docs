## Tribe DAO
The Tribe DAO has ultimate control over the Tribe ecosystem. It has the highest level access control roles, including amongst others:
- Arbitrarily moving PCV
- Minting FEI
- Create and grant new access roles

The Tribe DAO is controlled by Tribe token holders and in order to perform an action it requires a proposal to be created and passed. The proposal threshold is 2.5M TRIBE, with quorum being 25M TRIBE.

The contract is available here: [FeiDAO.sol](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/governor/FeiDAO.sol) and it is an instance of OpenZeppelin's OZ Governor, with a module to make it compatible with GovernorBravo. 

## Timelines
The total time between a set of actions being proposed and those being executed is 3 days. This is broken down as:
- Voting period: 2 days
- Timelock period: 1 day

## How to vote on proposals
New DAO proposals can be created and voted on through the Tally interface: https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494.

