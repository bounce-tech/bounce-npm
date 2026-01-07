import { leveragedTokenAbi } from "./abis/leveraged-token-abi";
import { factoryAbi } from "./abis/factory-abi";
import { globalStorageAbi } from "./abis/global-storage-abi";
import { globalStorageHelperAbi } from "./abis/global-storage-helper-abi";
import { hyperliquidHandlerAbi } from "./abis/hyperliquid-handler-abi";
import { leveragedTokenHelperAbi } from "./abis/leveraged-token-helper-abi";
import { referralsAbi } from "./abis/referrals-abi";
import { erc20Abi } from "./abis/erc20-abi";

export type Address = `0x${string}`;

// Addresses
export const FACTORY_ADDRESS = "0xeD8bCDe433EB7c4B69DB1235483bf0Edb726Fc1B";
export const GLOBAL_STORAGE_ADDRESS =
  "0xa07d06383c1863c8A54d427aC890643d76cc03ff";
export const GLOBAL_STORAGE_HELPER_ADDRESS =
  "0x99836aCBD207d5BCa57E3Fe0448bD1AB0A4BDf5C";
export const HYPERLIQUID_HANDLER_ADDRESS =
  "0xE57F983f3F317b2feF5585E660ed24980Ba7C3dA";
export const LEVERAGED_TOKEN_HELPER_ADDRESS =
  "0x9F53b119025733d174d514b13B6a061f1C482f8C";
export const LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS =
  "0x20132f1804Df40Acc9b5115F47191016a5258721";
export const REFERRALS_ADDRESS = "0xfD3A6323878Fc991447CcDd4c644ab419afC6f76";
export const USDC_ADDRESS = "0xb88339CB7199b77E23DB6E890353E22632Ba630f";

// ABIs
export const FACTORY_ABI = factoryAbi;
export const GLOBAL_STORAGE_ABI = globalStorageAbi;
export const GLOBAL_STORAGE_HELPER_ABI = globalStorageHelperAbi;
export const HYPERLIQUID_HANDLER_ABI = hyperliquidHandlerAbi;
export const LEVERAGED_TOKEN_ABI = leveragedTokenAbi;
export const LEVERAGED_TOKEN_HELPER_ABI = leveragedTokenHelperAbi;
export const REFERRALS_ABI = referralsAbi;
export const USDC_ABI = erc20Abi;
