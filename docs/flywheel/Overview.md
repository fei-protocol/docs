# Overview

We will be review FlywheelCore, the rewards and booster modules, and integration with Rari's Fuse - FuseFlywheelCore - as that is where FlywheelCore is primarily integrated right now.

Flywheel is a suite of open source token incentives and governance infrastructure using modern and modular solidity patterns to easily interface with other platforms. A Flywheel can be easily configured to distribute rewards to depositors in Fuse. To configure a Fuse Flywheel follow the steps below.

## Architecture 

Every FlywheelCore distributes a single reward token to any number of markets within a pool. So if there are multiple rewards tokens for a single market, for example, you will need to deploy multiple FuseFlywheelCore instances. Deploy FuseFlywheelCore and configure with the chosen rewardToken, rewards module, and optional booster module. The rewards module determines how many tokens go to each strategy over time. Some strategies require additional logic to boost or otherwise transform the user's balance. This is where the boosting module can do just that. If added to the incentives engine, it calculates a user's rewards by dividing their boosted balance by the boosted total supply.

## Deployment

A simple deployment path is to deploy FuseFlywheelCore first, and then use that deployed contract address in the constructor when you deploy the rewards module such as FlywheelDynamicRewards.  

For Fuse, as an example. First,
    git clone https://github.com/fei-protocol/fuse-flywheel
    forge build

A sample deploy script for FuseFlywheelCore:
    forge create FuseFlywheelCore --constructor-args 0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B 0x0000000000000000000000000000000000000000 0x0000000000000000000000000000000000000000 $OWNER_ADDRESS 0x0000000000000000000000000000000000000000 --rpc-url https://eth-mainnet.alchemyapi.io/v2/$API_KEY --private-key $PRIVATE_KEY

You currently have 2 choices for dynamic rewards modules - both are resistant to flashlon MEV-style exploits.  The version currently in use on Rari Pool 156 (Convex Pool) is the FuseFlywheelDynamicRewardsPlugin module, which is slightly more gas-intensive compared to the standard dynamic rewards cycle module as this module forces plugin.claimRewards() on every accrue().  The cycle version works for example by you choosing the length of the cycle - such as 1 week - in the constructor of the module, and the module claims all new rewards at the end of each week cycle and distributes those rewards proportionally throughout the next week. So these cycles are essentially delayed to prevent manipulation.

A sample deploy script for FlywheelDynamicRewards cycle:

    forge create FuseFlywheelDynamicRewardsPlugin --constructor-args 
    0x6484a96a3805B1f049C32A3bf1f01a93E223e519 604800 --rpc-url 
    https://eth-mainnet.alchemyapi.io/v2/$API_KEY --private-key $PRIVATE_KEY

or 

a sample deploy script for FuseFlywheelRewardsPlugin:

    forge create src/rewards/FuseFlywheelRewardsPlugin.sol:FuseFlywheelDynamicRewards 
    --constructor-args 0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0 0x30e9a1bc6a6a478fc32f9ac900c6530ad3a1616f 
    --rpc-url https://eth-mainnet.alchemyapi.io/v2/$API_KEY --private-key $PRIVATE_KEY

You also have the option of using a FlywheelStaticRewards module instead of dynamic, which distributes rewards at a linear rate over time.

You can then call `flywheelCore.setFlywheelRewards(IFlywheelRewards newFlywheelRewards)` to attach the rewards module to FlywheelCore.

You will also need to add add the flywheel to the comptroller of the fuse pool: `comptroller._addRewardsDistributor(flywheelCore)`

The Comptroller uses `flywheelPre…` functions to update Flywheel’s accounting upon supply, borrow, and transfer of cTokens - therefore any action taking by users within a market will trigger this.

To activate the Flywheel for use on specific markets, you will need to call: `flywheelCore.addStrategyForRewards(market)`

Finally, ensure that you have the necessary token approval which gives permission to the rewards module to transfer the reward tokens from the rewards destination specified in your ERC4626 plugin.
