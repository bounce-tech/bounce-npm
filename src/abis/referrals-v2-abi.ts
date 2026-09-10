export const referralsV2Abi = [
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
    "name": "UPGRADE_INTERFACE_VERSION",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "baseRefereeBps",
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
    "name": "baseReferrerBps",
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
    "name": "claimRebates",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "donateRebates",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "feeAmount_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "generateCode",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "getCodeFromReferrer",
    "inputs": [
      {
        "name": "referrer_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "getCodeFromUser",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "getRebate",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
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
    "name": "getReferrerFromCode",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
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
    "name": "getReferrerFromUser",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
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
    "name": "getSplit",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IReferralsV2.Split",
        "components": [
          {
            "name": "referrerBps",
            "type": "uint16",
            "internalType": "uint16",
          },
          {
            "name": "refereeBps",
            "type": "uint16",
            "internalType": "uint16",
          },
          {
            "name": "isAffiliate",
            "type": "bool",
            "internalType": "bool",
          },
        ],
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "getVolume",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
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
    "name": "initialize",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "isJoined",
    "inputs": [
      {
        "name": "user_",
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
    "name": "isReferrer",
    "inputs": [
      {
        "name": "referrer_",
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
    "name": "isValidCode",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
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
    "name": "joinWithReferral",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "joinWithReferralFor",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "maxCodeLength",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "pure",
  },
  {
    "type": "function",
    "name": "migrateBinding",
    "inputs": [
      {
        "name": "referee_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "referrer_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "migrateBindings",
    "inputs": [
      {
        "name": "referees_",
        "type": "address[]",
        "internalType": "address[]",
      },
      {
        "name": "referrers_",
        "type": "address[]",
        "internalType": "address[]",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "migrateReferrer",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
      {
        "name": "referrer_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "referrerBps_",
        "type": "uint16",
        "internalType": "uint16",
      },
      {
        "name": "refereeBps_",
        "type": "uint16",
        "internalType": "uint16",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "migrateReferrers",
    "inputs": [
      {
        "name": "referralCodes_",
        "type": "string[]",
        "internalType": "string[]",
      },
      {
        "name": "referrers_",
        "type": "address[]",
        "internalType": "address[]",
      },
      {
        "name": "referrerBps_",
        "type": "uint16[]",
        "internalType": "uint16[]",
      },
      {
        "name": "refereeBps_",
        "type": "uint16[]",
        "internalType": "uint16[]",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "minCodeLength",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "stateMutability": "pure",
  },
  {
    "type": "function",
    "name": "proxiableUUID",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32",
      },
    ],
    "stateMutability": "view",
  },
  {
    "type": "function",
    "name": "recordVolume",
    "inputs": [
      {
        "name": "user_",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "notional_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "removeAffiliate",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "revokeCode",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setAffiliate",
    "inputs": [
      {
        "name": "referralCode_",
        "type": "string",
        "internalType": "string",
      },
      {
        "name": "referrerBps_",
        "type": "uint16",
        "internalType": "uint16",
      },
      {
        "name": "refereeBps_",
        "type": "uint16",
        "internalType": "uint16",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setBaseRefereeBps",
    "inputs": [
      {
        "name": "baseRefereeBps_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setBaseReferrerBps",
    "inputs": [
      {
        "name": "baseReferrerBps_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setHistoricVolume",
    "inputs": [
      {
        "name": "users_",
        "type": "address[]",
        "internalType": "address[]",
      },
      {
        "name": "vols_",
        "type": "uint256[]",
        "internalType": "uint256[]",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "setUnlockThreshold",
    "inputs": [
      {
        "name": "unlockThreshold_",
        "type": "uint256",
        "internalType": "uint256",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "unlockThreshold",
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
    "name": "upgradeToAndCall",
    "inputs": [
      {
        "name": "newImplementation",
        "type": "address",
        "internalType": "address",
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes",
      },
    ],
    "outputs": [],
    "stateMutability": "payable",
  },
  {
    "type": "event",
    "name": "ClaimRebate",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "rebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "DonateRebate",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "feeAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "referrerRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "refereeRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "GenerateCode",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "name": "version",
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "JoinWithReferral",
    "inputs": [
      {
        "name": "referee",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "MigrateBinding",
    "inputs": [
      {
        "name": "referee",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "MigrateReferrer",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
      {
        "name": "referrerBps",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16",
      },
      {
        "name": "refereeBps",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "RecordVolume",
    "inputs": [
      {
        "name": "leveragedToken",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "notional",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "RemoveAffiliate",
    "inputs": [
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "RevokeCode",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetAffiliate",
    "inputs": [
      {
        "name": "code",
        "type": "string",
        "indexed": false,
        "internalType": "string",
      },
      {
        "name": "referrerBps",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16",
      },
      {
        "name": "refereeBps",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetBaseRefereeBps",
    "inputs": [
      {
        "name": "previousBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "newBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetBaseReferrerBps",
    "inputs": [
      {
        "name": "previousBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "newBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetHistoricVolume",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "SetUnlockThreshold",
    "inputs": [
      {
        "name": "previousThreshold",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "newThreshold",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "Upgraded",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "error",
    "name": "AddressEmptyCode",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address",
      },
    ],
  },
  {
    "type": "error",
    "name": "CannotReferSelf",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "CodeAlreadyExists",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "CodeDoesNotExist",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "ERC1967InvalidImplementation",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "internalType": "address",
      },
    ],
  },
  {
    "type": "error",
    "name": "ERC1967NonPayable",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "FailedCall",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidCodeChar",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidCodeLength",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidInitialization",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidReferralCode",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidReferrer",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidSplit",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "LengthMismatch",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "NoRebate",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "NotAffiliate",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "NotInitializing",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "NotLeveragedToken",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "NotOwner",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "ReferrerHasCode",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "SafeERC20FailedOperation",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address",
      },
    ],
  },
  {
    "type": "error",
    "name": "UUPSUnauthorizedCallContext",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "UUPSUnsupportedProxiableUUID",
    "inputs": [
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32",
      },
    ],
  },
  {
    "type": "error",
    "name": "UserAlreadyJoined",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "UserAlreadyReferrer",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "VolumeThresholdNotMet",
    "inputs": [],
  },
] as const;
