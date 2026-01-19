export const hyperliquidHandlerAbi = [
  {
    type: "function",
    name: "coreUserExists",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hyperliquidUsdc",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "marginUsedUsdc",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "notionalUsdc",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "perpUsdc",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "spotUsdc",
    inputs: [
      {
        name: "user_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "PrecompileLib__AccountMarginSummaryPrecompileFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PrecompileLib__CoreUserExistsPrecompileFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PrecompileLib__SpotBalancePrecompileFailed",
    inputs: [],
  },
] as const;
