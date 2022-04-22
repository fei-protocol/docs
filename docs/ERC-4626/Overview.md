# Overview
## About ERC-4626
EIP-4626: The Tokenized Vault Standard is an ethereum application developer interface for building token vaults and strategies. It is meant to consolidate development efforts around “single token strategies” such as lending, yield aggregators, and single-sided staking.

Full details about the ERC are available in the official spec: https://eips.ethereum.org/EIPS/eip-4626 

## ERC4626Router and Base
ERC-4626 standardizes the interface around depositing and withdrawing tokens from strategies.

The ERC4626 Router is an ecosystem utility contract (like WETH) which can route tokens in and out of multiple ERC-4626 strategies in a single call. Its architecture was inspired by the Uniswap V3 multicall router.

Basic supported features include:

- withdrawing from some Vault A and redepositing to Vault B
wrapping and unwrapping WETH
- managing token approvals/transfers
- slippage protection

Ultimately the ERC4626 router can support an arbitrary number of withdrawals, deposits, and even distinct token types in a single call, subject to the block gas limit.

The router is split between the base ERC4626RouterBase which only handles the ERC4626 mutable methods (deposit/withdraw/mint/redeem) and the main router ERC4626Router which includes support for common routing flows and max logic.

### Using the Router
The router will be deployed to router.4626.eth as soon as the contracts are frozen and reviewed.

- ERC4626RouterBase - basic ERC4626 methods

- ERC4626Router - combined ERC4626 methods

- PeripheryPayments - WETH and ERC-20 utility methods

- Multicall - multicall utility

- PeripheryPayments - user approvals to the router with EIP-712 and EIP-2612

It is REQUIRED to use multicall to interact across multi-step user flows. The router is stateless other than holding token approvals for vaults it interacts with. Any tokens that end a transaction in the router can be permissionlessly withdrawn by any address, likely an MEV searcher, so make sure to complete all multicalls with token withdrawals to an end user address.

It is recommended to max approve vaults, and check whether a vault is already approved before interacting with the vault. This can save user gas. In cases where the number of required steps in a user flow is reduced to 1, a direct call can be used instead of multicall.

### Extending the Router
The router can be imported and extended. Many ERC-4626 use cases include additional methods which may want to be included in a multicall router.

Importing via npm: coming soon
Importing via forge: forge install Fei-Protocol/ERC4626

Examples:

- Tribe Turbo - Turbo Router

## xERC4626
An “xToken” popularized by SushiSwap with xSUSHI is a single-sided autocompounding token rewards module.

xTokens were improved apon by Zephram Lou with xERC20 to include manipulation resistant reward distributions.

Because xTokens are a perfect use case of ERC-4626, a base utility called xERC4626 is included in this repo.

xERC4626 improvements:

4626 complete interface compatibility
completely internal accounting to prevent all forms of exchange rate manipulation
xERC4626 examples:

xTRIBE - coming soon