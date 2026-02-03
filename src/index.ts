import { leveragedTokenAbi } from "./abis/leveraged-token-abi";
import { factoryAbi } from "./abis/factory-abi";
import { globalStorageAbi } from "./abis/global-storage-abi";
import { globalStorageHelperAbi } from "./abis/global-storage-helper-abi";
import { hyperliquidHandlerAbi } from "./abis/hyperliquid-handler-abi";
import { leveragedTokenHelperAbi } from "./abis/leveraged-token-helper-abi";
import { referralsAbi } from "./abis/referrals-abi";
import { erc20Abi } from "./abis/erc20-abi";
import { hypeBalanceHelperAbi } from "./abis/hype-balance-helper-abi";

export type Address = `0x${string}`;

// Addresses
export const FACTORY_ADDRESS = "0xeD8bCDe433EB7c4B69DB1235483bf0Edb726Fc1B";
export const GLOBAL_STORAGE_ADDRESS =
  "0xa07d06383c1863c8A54d427aC890643d76cc03ff";
export const GLOBAL_STORAGE_HELPER_ADDRESS =
  "0x99836aCBD207d5BCa57E3Fe0448bD1AB0A4BDf5C";
export const HYPERLIQUID_HANDLER_ADDRESS =
  "0x0f1365392EA9Df901dEb94d100679E7440E499bc";
export const LEVERAGED_TOKEN_HELPER_ADDRESS =
  "0xb896d6D547350418e9510065389c9c0d92ca4F17";
export const LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS =
  "0x126e039f97Dd34fa64E685Ba4b37ca97b1a03DcB";
export const REFERRALS_ADDRESS = "0xfD3A6323878Fc991447CcDd4c644ab419afC6f76";
export const USDC_ADDRESS = "0xb88339CB7199b77E23DB6E890353E22632Ba630f";
export const HYPE_BALANCE_HELPER_ADDRESS =
  "0x7B8CFf7E3b8Be150e735f2AF56DBB69ec44d91b3";

// ABIs
export const FACTORY_ABI = factoryAbi;
export const GLOBAL_STORAGE_ABI = globalStorageAbi;
export const GLOBAL_STORAGE_HELPER_ABI = globalStorageHelperAbi;
export const HYPERLIQUID_HANDLER_ABI = hyperliquidHandlerAbi;
export const LEVERAGED_TOKEN_ABI = leveragedTokenAbi;
export const LEVERAGED_TOKEN_HELPER_ABI = leveragedTokenHelperAbi;
export const REFERRALS_ABI = referralsAbi;
export const USDC_ABI = erc20Abi;
export const HYPE_BALANCE_HELPER_ABI = hypeBalanceHelperAbi;
