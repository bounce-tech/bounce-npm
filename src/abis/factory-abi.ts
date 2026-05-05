export const factoryAbi = [
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
    "name": "createLt",
    "inputs": [
      {
        "name": "marketId_",
        "type": "uint32",
        "internalType": "uint32",
      },
      {
        "name": "targetLeverage_",
        "type": "uint256",
        "internalType": "uint256",
      },
      {
        "name": "isLong_",
        "type": "bool",
        "internalType": "bool",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address",
      },
    ],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "deleteLt",
    "inputs": [
      {
        "name": "ltAddress_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
  },
  {
    "type": "function",
    "name": "globalStorage",
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
    "name": "importFromFactory",
    "inputs": [
      {
        "name": "oldFactory_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "lt",
    "inputs": [
      {
        "name": "marketId_",
        "type": "uint32",
        "internalType": "uint32",
      },
      {
        "name": "targetLeverage_",
        "type": "uint256",
        "internalType": "uint256",
      },
      {
        "name": "isLong_",
        "type": "bool",
        "internalType": "bool",
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
    "name": "ltExists",
    "inputs": [
      {
        "name": "ltAddress_",
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
    "name": "lts",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]",
      },
    ],
    "stateMutability": "view",
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
    "name": "redeployLt",
    "inputs": [
      {
        "name": "ltAddress_",
        "type": "address",
        "internalType": "address",
      },
    ],
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "CreateLeveragedToken",
    "inputs": [
      {
        "name": "creator",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "marketId",
        "type": "uint32",
        "indexed": true,
        "internalType": "uint32",
      },
      {
        "name": "targetLeverage",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "isLong",
        "type": "bool",
        "indexed": false,
        "internalType": "bool",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "DeleteLeveragedToken",
    "inputs": [
      {
        "name": "deleter",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "marketId",
        "type": "uint32",
        "indexed": true,
        "internalType": "uint32",
      },
      {
        "name": "targetLeverage",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "isLong",
        "type": "bool",
        "indexed": false,
        "internalType": "bool",
      },
    ],
    "anonymous": false,
  },
  {
    "type": "event",
    "name": "ImportLeveragedToken",
    "inputs": [
      {
        "name": "importer",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address",
      },
      {
        "name": "marketId",
        "type": "uint32",
        "indexed": true,
        "internalType": "uint32",
      },
      {
        "name": "targetLeverage",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256",
      },
      {
        "name": "isLong",
        "type": "bool",
        "indexed": false,
        "internalType": "bool",
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
    "name": "AlreadyCreated",
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
    "name": "InvalidAddress",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidImplementation",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidInitialization",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidLeverage",
    "inputs": [],
  },
  {
    "type": "error",
    "name": "InvalidMarketId",
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
    "name": "PrecompileLib__PerpAssetInfoPrecompileFailed",
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
    "name": "StillHasMargin",
    "inputs": [],
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
] as const;
