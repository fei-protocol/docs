# Governance and Roles

- Each contract has an admin role that can manage admin-specific functions.
- Each _role_ has an admin role that can transfer

## Roles

GOVERN_ROLE is the admin of the following roles:

- MINTER_ROLE
- BURNER_ROLE
- PCV_CONTROLLER_ROLE
- GUARDIAN_ROLE
- ROLE_ADMIN

ROLE_ADMIN is the admin of the following roles:

- PARAMETER_ADMIN
- RATE_LIMITED_MINTER_ADMIN
- ORACLE_ADMIN_ROLE
- TRIBAL_CHIEF_ADMIN_ROLE
- PCV_GUARDIAN_ADMIN_ROLE
- METAGOVERNANCE_VOTE_ADMIN
- METAGOVERNANCE_TOKEN_STAKING
- METAGOVERNANCE_GAUGE_ADMIN
- SWAP_ADMIN_ROLE
- VOTIUM_ADMIN_ROLE
- FUSE_ADMIN
- FEI_MINT_ADMIN
- PCV_MINOR_PARAM_ROLE
- PSM_ADMIN_ROLE
- POD_ADMIN
- POD_VETO_ADMIN
- POD_METADATA_REGISTER_ROLE
- BALANCER_MANAGER_ADMIN_ROLE

Deprecated Roles:
- BURNER_ROLE

## Powers

Important powers in the system, and what handles them:

- minting of Tribe: handled by any contract with role: TRIBE_MINTER
- minting of Fei: handled by any contract with role: MINTER_ROLE
- moving of funds around: handled by any contract with role: PCV_CONTROLLER
- granting and revoking roles: handled by any contract with role GOVERN_ROLE and ROLE_ADMIN
- vetoing of proposals & actions: handled by any contract with role: GUARDIAN_ROLE

## Access Control Summary - Executive Level Roles

### GOVERN_ROLE

The ultimate power in the Tribe DAO.

#### Holders

- Core
- FeiDAOTimelock
- RoleBastion

#### Admins

- None / Itself

#### Powers

```
- AngleUniswapPCVDeposit.setPair
- AngleUniswapPCVDeposit.setStakingRewards
- AngleUniswapPCVDeposit.setPoolManager
- AngleUniswapPCVDeposit.setMaxBasisPointsFromPegLP
```

```
- AutoRewardsDistributorV2.setRewardsDistributorAdmin
```

```
- BalancerLBPSwapper.setSwapFee
- BalancerLBPSwapper.setPaused
- BalancerLBPSwapper.setAssetManagerPoolConfig
- BalancerLBPSwapper.setSwapEnabled
- BalancerLBPSwapper.updateWeightsGradually
- BalancerLBPSwapper.withdrawCollectedManagementFees
- BalancerLBPSwapper.swap
- BalancerLBPSwapper.forceSwap
- BalancerLBPSwapper.setSwapFrequency
- BalancerLBPSwapper.setMinTokenSpent
- BalancerLBPSwapper.setReceivingAddress
```

```
- BalancerPCVDepositWeightedPool.setMaximumSlippage
- BalancerPCVDepositWeightedPool.setOracle
```

```
- CollateralizationOracle.addDeposit
- CollateralizationOracle.addDeposits
- CollateralizationOracle.removeDeposit
- CollateralizationOracle.removeDeposits
- CollateralizationOracle.swapDeposit
- CollateralizationOracle.setOracle
- CollateralizationOracle.setOracles
```

```
- CollateralizationOracleGuardian.setCache
- CollateralizationOracleGuardian.setDeviationThresholdBasisPoints
```

```
- CollateralizationOracleKeeper.setTarget
- CollateralizationOracleKeeper.setFrequency
- CollateralizationOracleKeeper.setMintAmount
- CollateralizationOracleKeeper.setRateLimitPerSecond
- CollateralizationOracleKeeper.setBufferCap
- CollateralizationOracleKeeper.setIncentiveAmount
```

```
- CollateralizationOracleWrapper.setCollateralizationOracle
- CollateralizationOracleWrapper.setDeviationThresholdBasisPoints
- CollateralizationOracleWrapper.setValidityDuration
- CollateralizationOracleWrapper.setReadPauseOverride
- CollateralizationOracleWrapper.setCache
```

```
- Core.setFei
- Core.setTribe
- Core.allocateTribe
- Core.createRole
- Core.grantMinter
- Core.grantBurner
- Core.grantPCVController
- Core.grantGovernor
- Core.grantGuardian
- Core.revokeMinter
- Core.revokeBurner
- Core.revokePCVController
- Core.revokeGovernor
- Core.revokeGuardian
- Core.revokeOverride
- Core.revokeRole
```

```
- Q.setContractAdminRole
- CoreRef.pause
- CoreRef.unpause
```

```
- ERC20TokemakPCVDeposit.requestWithdrawal
```

```
- ERC20Splitter.setAllocation
```

```
- EthLidoPCVDeposit.setMaximumSlippage
```

```
- EthTokemakPCVDeposit.requestWithdrawal
```

```
- Fei.setIncentiveContract
- Fei.mint
```

```
- FeiDAOTimelock.governorSetPendingAdmin
```

```
- FeiSkimmer.setThreshold
```

```
- FeiTimedMinter.setTarget
- FeiTimedMinter.setFrequency
- FeiTimedMinter.setMintAmount
- FeiTimedMinter.setRateLimitPerSecond
- FeiTimedMinter.setBufferCap
- FeiTimedMinter.setIncentiveAmount
```

```
- FixedPricePSM.setOracleFloorBasisPoints
- FixedPricePSM.setOracleCeilingBAsisPoints
- FixedPricePSM.pauseRedeem
- FixedPricePSM.unpauseRedeem
- FixedPricePSM.pauseMint
- FixedPricePSM.unpauseMint
- FixedPricePSM.setMintFee
- FixedPricePSM.setRedeemFee
- FixedPricePSM.setReservesThreshold
- FixedPricePSM.setSurplusTarget
- FixedPricePSM.setOracle
- FixedPricePSM.setDoInvert
- FixedPricePSM.setDecimalsNormalizer
- FixedPricePSM.setBackupOracle
- FixedPricePSM.setRateLimitPerSecond
- FixedPricePSM.setBufferCap
```

```
- FuseAdmin._setMarketSupplyCaps
- FuseAdmin._setMarketSuplyCapsByUnderlying
- FuseAdmin._setMarketBorrowCaps
- FuseAdmin._setBorrowCapGuardian
- FuseAdmin._setPauseGuardian
- FuseAdmin._setMintPaused
- FuseAdmin._setBorrowPausedByUnderlying
- FuseAdmin._setBorrowPaused
- FuseAdmin._setTransferPaused
- FuseAdmin._setSeizePaused
- FuseAdmin.oracleAdd
- FuseAdmin.oracleChangeAdmin
- FuseAdmin._addRewardsDistributor
- FuseAdmin._setWhitelistEnforcement
- FuseAdmin._setWhitelistStatuses
- FuseAdmin._setPriceOracle
- FuseAdmin._setCloseFactor
- FuseAdmin._setCollateralFactor
- FuseAdmin._setLiquidationIncentive
- FuseAdmin._deployMarket
- FuseAdmin._unsupportMarket
- FuseAdmin._toggleAutoImplementations
- FuseAdmin._setPendingAdmin
```

```
- FuseGuardian._setMarketSupplyCaps
- FuseGuardian._setMarketSuplyCapsByUnderlying
- FuseGuardian._setMarketBorrowCaps
- FuseGuardian._setBorrowCapGuardian
- FuseGuardian._setPauseGuardian
- FuseGuardian._setMintPaused
- FuseGuardian._setBorrowPausedByUnderlying
- FuseGuardian._setBorrowPaused
- FuseGuardian._setTransferPaused
- FuseGuardian._setSeizePaused
```

```
- NamedStaticPCVDepositWrapper.addDeposit
- NamedStaticPCVDepositWrapper.bulkAddDeposits
- NamedStaticPCVDepositWrapper.removeDeposit
- NamedStaticPCVDepositWrapper.editDeposit
```

```
- OptimisticTimelock.becomeAdmin
```

```
- OracleRef.setOracle
- OracleRef.setDoInvert
- OracleRef.setBackupOracle
- OracleRef.decDecimalsNormalizer
```

```
- PCVEquityMinter.setCollateralizationOracle
- PCVEquityMinter.setAPRBasisPoints
- PCVEquityMinter.setTarget
- PCVEquityMinter.setFrequency
- PCVEquityMinter.setMintAmount
- PCVEquityMinter.setRateLimitPerSecond
- PCVEquityMinter.setRateLimitPerSecond
- PCVEquityMinter.setBufferCap
- PCVEquityMinter.setIncentiveAmount
```

```
- PCVDripController.setSource
- PCVDripController.setTarget
- PCVDripController.setDripAmount
- PCVDripController.setRateLimitPerSecond
- PCVDripController.setBufferCap
- PCVDripController.setIncentiveAmount
```

```
- PCVGuardian.setSafeAddress
- PCVGuardian.setSafeAddresses
- PCVGuardian.unsetSafeAddress
- PCVGuardian.unsafeSafeAddresses
- PCVGuardian.withdrawToSafeAddress
- PCVGuardian.withdrawETHToSafeAddress
- PCVGuardian.withdrawERC20ToSafeAddress
```

```
- PCVSentinel.knight
- PCVSentinel.slay
```

```
- PegStabilityModule.pauseRedeem
- PegStabilityModule.unpauseRedeem
- PegStabilityModule.pauseMint
- PegStabilityModule.unpauseMint
- PegStabilityModule.setMintFee
- PegStabilityModule.setRedeemFee
- PegStabilityModule.setReservesThreshold
- PegStabilityModule.setSurplusTarget
- PegStabilityModule.setOracle
- PegStabilityModule.setDoInvert
- PegStabilityModule.setDecimalsNormalizer
- PegStabilityModule.setBackupOracle
- PegStabilityModule.setRateLimitPerSecond
- PegStabilityModule.setBufferCap
```

```
- PCVSplitter.setAllocation
```

```
- PriceBoundPSM.setOracleFloorBasisPoints
- PriceBoundPSM.setOracleCeilingBAsisPoints
- PriceBoundPSM.pauseRedeem
- PriceBoundPSM.unpauseRedeem
- PriceBoundPSM.pauseMint
- PriceBoundPSM.unpauseMint
- PriceBoundPSM.setMintFee
- PriceBoundPSM.setRedeemFee
- PriceBoundPSM.setReservesThreshold
- PriceBoundPSM.setSurplusTarget
- PriceBoundPSM.setOracle
- PriceBoundPSM.setDoInvert
- PriceBoundPSM.setDecimalsNormalizer
- PriceBoundPSM.setBackupOracle
- PriceBoundPSM.setRateLimitPerSecond
- PriceBoundPSM.setBufferCap
```

```
- RateLimited.setRateLimitedPerSecond
- RateLimited.setBufferCap
- RateLimited.setIncentiveAmount
```

```
- RewardsDistributorAdmin._setPendingAdmin
- RewardsDistributorAdmin._grantComp
- RewardsDistributorAdmin._setContributorCompSpeed
- RewardsDistributorAdmin._addMarket
- RewardsDistributorAdmin._setImplementation
- RewardsDistributorAdmin.guardianDisableSupplySpeed
- RewardsDistributorAdmin.guardianDisableBorrowSpeed
- RewardsDistributorAdmin.becomeAdmin
```

```
- TribalChief.updateBlockReward
- TribalChief.lockPool
- TribalChief.unlockPool
- TribalChief.governorAddPoolMultiplier
- TribalChief.governorWithdrawTribe
- TribalChief.add
- TribalChief.set
- TribalChief.resetRewards
```

```
- TribeMinter.mint
- TribeMinter.setTribeTreasury
- TribeMinter.setTribeRewardsDripper
- TribeMinter.setAnnualMaxInflationBasisPoints
- TribeMinter.
- TribeMinter.setIncentiveAmount
```

```
- TribeReserveStabilizer.setCollateralizationOracle
- TribeReserveStabilizer.setCollateralizationThreshold
- TribeReserveStabilizer.setUsdPerFeiRate
- TribeReserveStabilizer.setOracle
- TribeReserveStabilizer.setDoInvert
- TribeReserveStabilizer.setDecimalsNormalizer
```

```
- UniRef.setPair
```

```
- UniswapPCVDeposit.setPair
- UniswapPCVDeposit.setMaxBasisPointsFromPegLP
```

```
- VotiumBriber.bribe
```

```
- NopeDAO.setVotingDelay
- NopeDAO.setVotingPeriod
- NopeDAO.setProposalThreshold
- NopeDAO.setQuorum
```

```
- PodAdminGateway.addPodMember
- PodAdminGateway.batchAddPodMember
- PodAdminGateway.removePodMember
- PodAdminGateway.batchRemovePodMember
- PodAdminGateway.lockMembershipTransfers
- PodAdminGateway.unlockMembershipTransfers
- PodAdminGateway.veto
```

```
- PodFactory.createOptimisticPod
- PodFactory.updateDefaultPodController
```

### ROLE_ADMIN

#### Holders

- FeiDAOTimelock
- TribalCouncilTimelock

#### Admins

- GOVERN_ROLE

#### Powers

ROLE_ADMIN is held by the Tribal Council primarily.
ROLE_ADMIN gives the holder the power to grant and revoke all non-major roles.

```
- RoleBastion.createRole
```

## Access Control Summary - High Level Roles

### MINTER_ROLE

#### Holders

- UniswapPCVDeposit
- FeiDAOTimelock
- DPIUniswapPCVDeposit
- PCVEquityMinter
- CollateralizationOracleKeeper
- OptimisticMinter
- DaiFixedPricePSM
- EthPSM
- LusdPSM
- BalancerDepositFeiWeth

#### Admins

- GOVERN_ROLE

#### Powers

Gives the holder the ability to mint Fei.

```
Fei.mint
```

### PCV_CONTROLLER_ROLE

#### Holders

- FeiDaoTimelock
- RatioPCVControllerV2
- AAVEEthPCVDripController
- PCVGuardian
- DAIPCVDripController
- LUSDPCVDripController
- ETHPSMFeiSkimmer
- LUSDPSMFeiSkimmer

#### Admins

- GOVERN_ROLE

#### Powers

Gives the holder the ability to move pcv around.

```
PCVDeposit.withdrawERC20
PCVDeposit.withdrawETH
```

```
SnapshotDelegatorPCVDeposit.withdraw
AAVEPCVDeposit.withdraw
BalancerPCVDepositWeightedPool.withdraw
CompoundPCVDepositBase.withdraw
ConvexPCVDeposit.withdraw
ETHLidoPCVDeposit.withdraw
BAMMDeposit.withdraw
ERC20TokemakPCVDeposit.withdraw
UniswapPCVDeposit.withdraw
ERC20Dripper.withdraw
PegStabilityModule.withdraw
ReserveStabilizer.withdraw
```

```
AngleUniswapPCVDeposit.mintAgToken
AngleUniswapPCVDeposit.burnAgToken
AngleUniswapPCVDeposit.burnAgTokenAll
```

```
BalancerLBPSwapper.exitPool
```

```
BalancerPCVDepositBase.unwrapETH
```

```
VotiumBriber.withdrawERC20
```

```
CurvePCVDepositPlainPool.withdrawOneCoin
CurvePCVDepositPlainPool.exitPool
```

```
RatioPCVControllerV2.withdrawRatio
RatioPCVControllerV2.withdrawRatioUnwrapWETH
RatioPCVControllerV2.withdrawRatioWrapETH
RatioPCVControllerV2.withdrawUnwrapWETH
RatioPCVControllerV2.withdrawWrapETH
RatioPCVControllerV2.withrawRatioERC20
RatioPCVControllerV2.transferFromRatio
RatioPCVControllerV2.transferFrom
RatioPCVControllerV2.transferETHAsWETH
RatioPCVControllerV2.transferWETHAsETH
RatioPCVControllerV2.transferERC20
```

```
WethPCVDeposit.withdrawETH
```

### GUARDIAN_ROLE

#### Holders

- Multisig
- PCVGuardian
- PCVSentinel

#### Admins

- GOVERN_ROLE

#### Powers

Acts as a protector of the system; has the power to veto DAO proposals,
and has the ability to pause and unpause many parts of the system.

```
CoreRef.pause
CoreRef.unpause
```

```
- PodAdminGateway.removePodMember
- PodAdminGateway.batchRemovePodMember
- PodAdminGateway.veto
```

```
- PCVSentinel.knight
- PCVSentinel.slay
```

```
- FeiDAOTimelock.vetoTransactions
- FeiDAOtimelock.rollback
```

```
- OptimisticTimelock.becomeAdmin
```

```
- RewardsDistributorAdmin.guardianDisableSupplySpeed
- RewardsDistributorAdmin.guardianDisableBorrowSpeed
```

```
- CollateralizationOracleGuardian.setCache
```

```
- CollateralizationOracleWrapper.setReadPauseOverride
```

```
- TribalChief.resetRewards
```

### BURNER_ROLE

The burner role has been deprecated via RestrictedPermissions.

#### Holders

- No one.

#### Powers

- None

## Access Control Summary - Low/Medium Level Roles

### FEI_MINT_ADMIN

#### Holders

- feiDAOTimelock
- tribalCouncilTimelock

#### Powers

```
FeiTimedMinter.setFrequency
FeiTimedMinter.setMintAmount
PCVEquityMinter.setAPRBasisPoints
```

### FUSE_ADMIN

#### Holders

- tribalChiefSyncV2
- tribalCouncilTimelock
- optimisticTimelock

#### Powers
```
FuseGuardian._setMarketSupplyCaps
FuseGuardian._setMarketSupplyCapsByUnderlying
FuseGuardian._setMarketBorrowCaps
FuseGuardian._setMarketBorrowCapsByUnderlying
FuseGuardian._setMintPausedByUnderlying
FuseGuardian._setMintPaused
FuseGuardian._setBorrowPausedByUnderlying
FuseGuardian._setBorrowPaused
FuseGuardian._setTransferPaused
FuseGuardian._setSeizePaused
FuseAdmin.oracleAdd
FuseAdmin._addRewardsDistributor
FuseAdmin._setWhitelistEnforcement
FuseAdmin._setWhitelistStatuses
FuseAdmin._setCloseFactor
FuseAdmin._setCollateralFactor
FuseAdmin._setLiquidationIncentive
FuseAdmin._deployMarket
FuseAdmin._unsupportMarket
FuseAdmin._toggleAutoImplementations
FuseAdmin._setPendingAdmin
```

### METAGOVERNANCE_GAUGE_ADMIN

#### Holders

- FeiDAOTimelock
- OpsOptimisticTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
LiquidityGaugeManager.setGaugeController
LiquidityGaugeManager.setTokenToGauge
LiquidityGaugeMangaer.stakeInGauge
LiquidityGaugeManager.stakeAllInGauge
LiquidityGaugeManager.unstakeFromGauge
```

### METAGOVERNANCE_TOKEN_STAKING

#### Holders

- FeiDAOTimelock
- OpsOptimisticTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- VoteEscrowTokenManager.setLockDuration
- VoteEscrowTokenManager.lock
- VoteEscrowTokenManager.exitLock
```

### METAGOVERNANCE_VOTE_ADMIN

#### Holders

- FeiDAOTimelock
- OpsOptimisticTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- SnapshotDelegatorPCVDeposit.setSpaceId
- SnapshotDelegatorPCvDepoist.setDelegate
- SnapshotDelegatorPCVDeposit.clearDelegate
```

```
- GovernorVoter.proposeOZ
- GovernorVoter.proposeBravo
- GovernorVoter.castVote
```

```
- LiquidityGaugeManger.voteForGaugeWeight
```

### RATE_LIMITED_MINTER_ADMIN

#### Holders

- None

#### Admins

- ROLE_ADMIN

#### Powers

- None

### ORACLE_ADMIN_ROLE

#### Holders

- CollaterazationOracleGuardian
- OptimisticTimelock
- OpsOptimisticTimelock
- TribalCouncilTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- CollateralizationOracle.addDeposit
- CollateralizationOracle.addDeposits
- CollateralizationOracle.removeDeposit
- CollateralizationOracle.removeDeposits
- CollateralizationOracle.swapDeposit
- CollateralizationOracle.swapDeposits
```

```
- CollateralizationOracleWrapper.setCollateralizationOracle
- CollateralizationOracleWrapper.setDeviationThresholdBasisPoints
- CollateralizationOracleWrapper.setValidityDuration
- CollateralizationOracleWrapper.setReadPauseOverride
- CollateralizationOracleWrapper.setCache
```

```
- NamedStaticPCVDepositWrapper.addDeposit
- NamedStaticPCVDepositWrapper.bulkAddDeposits
- NamedStaticPCVDepositWrapper.removeDeposit
- NamedStaticPCVDepositWrapper.editDeposit
```

### PARAMETER_ADMIN

#### Holders

- None

#### Admins

- ROLE_ADMIN

#### Powers

```
NonCustodialPSM.setMintFee
NonCustodialPSM.setRedeemFee
```

### PCV_GUARDIAN_ADMIN_ROLE

#### Holders

- OptimisticTimelock
- tribalCouncilTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- PCVGuardian.setSafeAddress
- PCVGuardian.setSafeAddresses
- PCVGuardian.unsetSafeAddress
- PCVGuardian.unsetSafeAddresses
- PCVGuardian.withdrawToSafeAddress
- PCVGuardian.withdrawETHToSafeAddress
- PCVGuardian.withdrawERC20ToSafeAddress
```

### PCV_MINOR_PARAM_ROLE

#### Holders

- FeiDAOTimelock
- OptimisticTimelock
- TribalCouncilTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
UniswapPCVDeposit.setMaxBasisPointsFromPegLP
FeiSkimmer.setThreshold
PCVDripController.setDripAmount
```

### TOKEMAK_DEPOSIT_ADMIN_ROLE
#### Holders

- FeiDAOTimelock
- OptimisticTimelock
- TribalCouncilTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
TokemakPCVDepositBase.requestWithdrawal
```

### POD_ADMIN

#### Holders

- TribalCouncilTimelock
- PodFactory

#### Admins

- ROLE_ADMIN

#### Powers

```
- PodFactory.createOptimisticPod
- PodFactory.updateDefaultPodController
```

```
- PodAdminGateway.addPodMember
- PodAdminGateway.batchAddPodmember
- PodAdminGateway.removePodMember
- PodAdminGateway.batchRemovePodMember
- PodAdminGateway.lockMembershipTransfers
- PodAdminGateway.unlockMembershipTransfers
- PodAdminGateway.transferAdmin
- PodAdminGateway.veto
```

### POD_METADATA_REGISTER_ROLE

#### Holders

- TribalCouncilSafe

#### Admins

- ROLE_ADMIN

#### Powers

```
- GovernanceMetadataRegistry.registerProposal
```

### POD_VETO_ADMIN

#### Holders

- NopeDAO

#### Admins

- ROLE_ADMIN

#### Powers

```
- PodAdminGateway.veto
```

### PSM_ADMIN_ROLE

#### Holders

- TribalCouncilTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- NonCustodialPSM.setPCVDeposit
- NonCustodialPSM.setGlobalRateLimitedMinter
```

```
- PegStabilityModule.unpauseRedeem
- PegStabilityModule.pauseRedeem
- PegStabilityModule.unpauseMint
- PegStabilityModule.pauseMint
- PegStabilityModule.setMintFee
- PegStabilityModule.setRedeemFee
- PegStabilityModule.setReservesThreshold
- PegStabilityModule.setSurplusTarget
```

### SWAP_ADMIN_ROLE

#### Holders

- PCVEquityMinter
- OptimisticTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
- BalancerLBPSwapper.swap
- BalancerLBPSwapper.setSwapFrequency
- BalancerLBPSwapper.setMinTokenSpent
- BalancerLBPSwapper.setReceivingAddress
- BalancerLBPSwapper.withdrawCollectedManagementFees
- BalancerLBPSwapper.updateWeightsGradually
- BalancerLBPSwapper.setSwapEnabled
- BalancerLBPSwapper.setAssetManagerPoolConfig
- BalancerLBPSwapper.setPaused
- BalancerLBPSwapper.setSwapFee
```

### TRIBAL_CHIEF_ADMIN_ROLE

#### Holders

- Optimistictimelock
- TribalChiefSyncV2

#### Admins

- ROLE_ADMIN

#### Powers

```
- AutoRewardsDistributor.setRewardsDistributorAdmin
```

```
- AutoRewardsDistributorV2.setRewardsDistributorAdmin
```

```
- RewardsDistributorAdmin._setContributorCompSpeed
- RewardsDistributorAdmin._addMarket
- RewardsDistributorAdmin.becomeAdmin
```

```
- TribalChief.updateBlockReward
- TribalChief.lockPool
- TribalChief.unlockPool
- TribalChief.governorAddPoolMultiplier
- TribalChief.add
- TribalChief.set
```

### VOTIUM_ADMIN_ROLE

#### Holders

- OpsOptimisticTimelock

#### Admins

- ROLE_ADMIN

#### Powers

```
VotiumBriber.bribe
```
