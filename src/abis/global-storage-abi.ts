export const globalStorageAbi = [
  {
    "type": "constructor",
    "inputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "acceptOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "additionalAddresses",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "additionalValues",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "airdrop",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IAirdrop",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "allMintsPaused",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "baseAsset",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "bounce",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20Metadata",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "executeRedemptionFee",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "factory",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IFactory",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "feeHandler",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IFeeHandler",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "hyperliquidHandler",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IHyperliquidHandler",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "isExecutor",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "ltImplementation",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "minLockAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "minTransactionSize",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "pendingOwner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "redemptionFee",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "refereeRebate",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "referrals",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IReferrals",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "referrerRebate",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setAdditionalAddress",
    "inputs": [
      {
        "name": "key_",
        "type": "bytes32",
        "internalType": "bytes32",
      },
      {
        "name": "value_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setAdditionalValue",
    "inputs": [
      {
        "name": "key_",
        "type": "bytes32",
        "internalType": "bytes32",
      },
      {
        "name": "value_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setAirdrop",
    "inputs": [
      {
        "name": "airdrop_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setAllMintsPaused",
    "inputs": [
      {
        "name": "allMintsPaused_",
        "type": "bool",
        "internalType": "bool",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setBaseAsset",
    "inputs": [
      {
        "name": "baseAsset_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setBounce",
    "inputs": [
      {
        "name": "bounce_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setExecuteRedemptionFee",
    "inputs": [
      {
        "name": "executeRedemptionFee_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setExecutor",
    "inputs": [
      {
        "name": "executor_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "isExecutor_",
        "type": "bool",
        "internalType": "bool",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setFactory",
    "inputs": [
      {
        "name": "factory_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setFeeHandler",
    "inputs": [
      {
        "name": "feeHandler_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setHyperliquidHandler",
    "inputs": [
      {
        "name": "hyperliquidHandler_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setLtImplementation",
    "inputs": [
      {
        "name": "ltImplementation_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setMinLockAmount",
    "inputs": [
      {
        "name": "minLockAmount_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setMinTransactionSize",
    "inputs": [
      {
        "name": "minTransactionSize_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setRedemptionFee",
    "inputs": [
      {
        "name": "redemptionFee_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setRefereeRebate",
    "inputs": [
      {
        "name": "refereeRebate_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setReferrals",
    "inputs": [
      {
        "name": "referrals_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setReferrerRebate",
    "inputs": [
      {
        "name": "referrerRebate_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setStreamingFee",
    "inputs": [
      {
        "name": "streamingFee_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setTreasury",
    "inputs": [
      {
        "name": "treasury_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setTreasuryFeeShare",
    "inputs": [
      {
        "name": "treasuryFeeShare_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setVesting",
    "inputs": [
      {
        "name": "vesting_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "streamingFee",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "treasury",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "treasuryFeeShare",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "vesting",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IVesting",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "event",
    "name": "OwnershipTransferStarted",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetAdditionalAddress",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32",
      },
      {
        "name": "previousValue",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newValue",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetAdditionalValue",
    "inputs": [
      {
        "name": "key",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32",
      },
      {
        "name": "previousValue",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newValue",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetAirdrop",
    "inputs": [
      {
        "name": "previousAirdrop",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newAirdrop",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetAllMintsPaused",
    "inputs": [
      {
        "name": "previousPaused",
        "type": "bool",
        "indexed": true,
        "internalType": "bool",
      },
      {
        "name": "newPaused",
        "type": "bool",
        "indexed": true,
        "internalType": "bool",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetBaseAsset",
    "inputs": [
      {
        "name": "previousAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetBounce",
    "inputs": [
      {
        "name": "previousBounce",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newBounce",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetExecuteRedemptionFee",
    "inputs": [
      {
        "name": "previousFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetExecutor",
    "inputs": [
      {
        "name": "executor",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "isExecutor",
        "type": "bool",
        "indexed": true,
        "internalType": "bool",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetFactory",
    "inputs": [
      {
        "name": "previousFactory",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newFactory",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetFeeHandler",
    "inputs": [
      {
        "name": "previousFeeHandler",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newFeeHandler",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetHyperliquidHandler",
    "inputs": [
      {
        "name": "previousHyperliquidHandler",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newHyperliquidHandler",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetLtImplementation",
    "inputs": [
      {
        "name": "previousImplementation",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newImplementation",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetMinLockAmount",
    "inputs": [
      {
        "name": "previousMinLockAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newMinLockAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetMinTransactionSize",
    "inputs": [
      {
        "name": "previousMinTransactionSize",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newMinTransactionSize",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetRedemptionFee",
    "inputs": [
      {
        "name": "previousFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetRefereeRebate",
    "inputs": [
      {
        "name": "previousRebate",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newRebate",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetReferrals",
    "inputs": [
      {
        "name": "previousReferrals",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newReferrals",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetReferrerRebate",
    "inputs": [
      {
        "name": "previousRebate",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newRebate",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetStreamingFee",
    "inputs": [
      {
        "name": "previousFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newFee",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetTreasury",
    "inputs": [
      {
        "name": "previousTreasury",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newTreasury",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetTreasuryFeeShare",
    "inputs": [
      {
        "name": "previousFeeShare",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
      {
        "name": "newFeeShare",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetVesting",
    "inputs": [
      {
        "name": "previousVesting",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "newVesting",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "error",
    "name": "AlreadySet",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidAddress",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidAmount",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidValue",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address",
      },
    ],
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address",
      },
    ],
  },
  {
    "type": "error",
    "name": "SameAsCurrent",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "TotalRebateExceeds100",
    "inputs": [],
  },
] as const;
