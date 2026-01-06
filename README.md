# @bouncetech/contracts

Smart contract addresses and ABIs for [Bounce Tech](https://bouncetech.io) - DeFi Leveraged Token Protocol built on HyperEVM.

## Installation

```bash
npm install @bouncetech/contracts
# or
yarn add @bouncetech/contracts
# or
pnpm add @bouncetech/contracts
```

## Usage

### Import Contract Addresses

```typescript
import {
  ALL_ADDRESSES,
  FACTORY_ADDRESS,
  LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS,
} from "@bouncetech/contracts";

// Use all addresses
console.log(ALL_ADDRESSES.Factory);

// Or import specific addresses
const factoryAddress = FACTORY_ADDRESS;
const leveragedTokenAddress = LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS;
```

### Import Contract ABIs

```typescript
import { FACTORY_ABI, LEVERAGED_TOKEN_ABI } from "@bouncetech/contracts";

// Use with ethers.js
import { Contract } from "ethers";
const factoryContract = new Contract(FACTORY_ADDRESS, FACTORY_ABI, provider);

// Use with viem
import { createPublicClient, http } from "viem";
const client = createPublicClient({
  transport: http(),
});
const result = await client.readContract({
  address: FACTORY_ADDRESS,
  abi: FACTORY_ABI,
  functionName: "createLeveragedToken",
  args: [assetAddress, leverage],
});
```

### Available Contracts

- **Factory**: `0xeD8bCDe433EB7c4B69DB1235483bf0Edb726Fc1B`
- **GlobalStorage**: `0xa07d06383c1863c8A54d427aC890643d76cc03ff`
- **GlobalStorageHelper**: `0x99836aCBD207d5BCa57E3Fe0448bD1AB0A4BDf5C`
- **HyperliquidHandler**: `0xE57F983f3F317b2feF5585E660ed24980Ba7C3dA`
- **LeveragedTokenHelper**: `0x74dd1ecdA4fA350Ee67Ab4103C8728d8C2983802`
- **LeveragedTokenImplementation**: `0x20132f1804Df40Acc9b5115F47191016a5258721`
- **Referrals**: `0xfD3A6323878Fc991447CcDd4c644ab419afC6f76`

### Available ABIs

- `FACTORY_ABI` - Factory contract ABI
- `LEVERAGED_TOKEN_ABI` - Leveraged Token contract ABI

## Updating

When new contract addresses or ABIs are added, simply update your package:

```bash
npm update @bouncetech/contracts
```

## License

MIT
