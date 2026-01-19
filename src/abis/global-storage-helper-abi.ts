export const globalStorageHelperAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "globalStorage_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "getGlobalStorageData",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IGlobalStorageHelper.GlobalStorageData",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "ltImplementation",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "baseAsset",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "treasury",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "factory",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "hyperliquidHandler",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "feeHandler",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "bounce",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "allMintsPaused",
            "type": "bool",
            "internalType": "bool",
          },
          {
            "name": "vesting",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "airdrop",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "referrals",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "minTransactionSize",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "minLockAmount",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "redemptionFee",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "streamingFee",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "executeRedemptionFee",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "treasuryFeeShare",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "referrerRebate",
            "type": "uint256",
            "internalType": "uint256",
          },
          {
            "name": "refereeRebate",
            "type": "uint256",
            "internalType": "uint256",
          },
        ],
      },
    ],
    "stateMutability": "view",
  },
] as const;
