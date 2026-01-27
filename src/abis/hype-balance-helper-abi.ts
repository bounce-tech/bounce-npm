export const hypeBalanceHelperAbi = [
  {
    "type": "function",
    "name": "getHypeBalances",
    "inputs": [
      {
        "name": "users_",
        "type": "address[]",
        "internalType": "address[]",
      },
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IHypeBalanceHelper.UserBalance[]",
        "components": [
          {
            "name": "user",
            "type": "address",
            "internalType": "address",
          },
          {
            "name": "balance",
            "type": "uint256",
            "internalType": "uint256",
          },
        ],
      },
    ],
    "stateMutability": "view",
  },
] as const;
