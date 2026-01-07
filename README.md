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
  GLOBAL_STORAGE_ADDRESS,
  GLOBAL_STORAGE_HELPER_ADDRESS,
  HYPERLIQUID_HANDLER_ADDRESS,
  LEVERAGED_TOKEN_HELPER_ADDRESS,
  LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS,
  REFERRALS_ADDRESS,
  USDC_ADDRESS,
} from "@bouncetech/contracts";

// Use all addresses
console.log(ALL_ADDRESSES.Factory);

// Or import specific addresses
const factoryAddress = FACTORY_ADDRESS;
const globalStorageAddress = GLOBAL_STORAGE_ADDRESS;
const leveragedTokenAddress = LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS;
const usdcAddress = USDC_ADDRESS;
```

### Import Contract ABIs

```typescript
import {
  FACTORY_ABI,
  LEVERAGED_TOKEN_ABI,
  GLOBAL_STORAGE_ABI,
  GLOBAL_STORAGE_HELPER_ABI,
  HYPERLIQUID_HANDLER_ABI,
  LEVERAGED_TOKEN_HELPER_ABI,
  REFERRALS_ABI,
  USDC_ABI,
} from "@bouncetech/contracts";

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

The following contracts are available through this package:

- **Factory**
- **GlobalStorage**
- **GlobalStorageHelper**
- **HyperliquidHandler**
- **LeveragedTokenHelper**
- **LeveragedTokenImplementation**
- **Referrals**
- **USDC**

For the latest contract addresses, import them programmatically using the exported address constants.

### Available ABIs

The following ABIs are available:

- `FACTORY_ABI` - Factory contract ABI
- `GLOBAL_STORAGE_ABI` - GlobalStorage contract ABI
- `GLOBAL_STORAGE_HELPER_ABI` - GlobalStorageHelper contract ABI
- `HYPERLIQUID_HANDLER_ABI` - HyperliquidHandler contract ABI
- `LEVERAGED_TOKEN_ABI` - Leveraged Token contract ABI
- `LEVERAGED_TOKEN_HELPER_ABI` - LeveragedTokenHelper contract ABI
- `REFERRALS_ABI` - Referrals contract ABI
- `USDC_ABI` - USDC (ERC20) contract ABI

## Updating

When new contract addresses or ABIs are added, simply update your package:

```bash
npm update @bouncetech/contracts
```

## License

MIT
