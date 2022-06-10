---
sidebar_position: 5
---

## Tribal Council

**1. Who are the Tribal Council members?**

The Tribal Council members are 9 protocol operators and community members:

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

They were elected in a Snapshot vote (https://snapshot.fei.money/#/proposal/0x003adc2cb0f13784645e31440d24d0364817085aa1994e1ad72944d11bedb528) and ratified as part of a DAO vote (https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494/proposal/98075113212382060992713108948893946030462273453147378810955243825368262837097).

**2. What is the Tribal Council podId**

25

All existing pods and their associated identifiers can be found [here](docs/Governance/Optimistic%20Governance/Individual%20pods%20and%20IDs.md)


## Nope DAO

**1. What is the difference between a veto and a proposal cancellation by the Nope DAO?**

A veto and Nope DAO cancellation are the same thing. The Nope DAO is the mechanism by which the community vetos a pod proposal in a timelock.

**2. Can the Nope DAO veto TRIBE DAO proposals**

No

**3. What are the criteria for executing a Nope veto?**

For a particular proposal:
`numForVotes + numAbstainVotes >= 10M` and `numForVotes > numAgainstVotes`