import addresses from "../addresses.json";
import leveragedTokenAbi from "../abis/leveraged-token-abi.json";
import factoryAbi from "../abis/factory-abi.json";
import globalStorageAbi from "../abis/global-storage-abi.json";
import globalStorageHelperAbi from "../abis/global-storage-helper-abi.json";
import hyperliquidHandlerAbi from "../abis/hyperliquid-handler-abi.json";
import leveragedTokenHelperAbi from "../abis/leveraged-token-helper-abi.json";
import referralsAbi from "../abis/referrals-abi.json";
import erc20Abi from "../abis/erc20-abi.json";

// Address type for Ethereum addresses
export type Address = `0x${string}`;

// Export all contract addresses
export const ALL_ADDRESSES = addresses as {
  Factory: Address;
  GlobalStorage: Address;
  GlobalStorageHelper: Address;
  HyperliquidHandler: Address;
  LeveragedTokenHelper: Address;
  LeveragedTokenImplementation: Address;
  Referrals: Address;
  USDC: Address;
};

// Export individual addresses for convenience
export const FACTORY_ADDRESS = ALL_ADDRESSES.Factory;
export const GLOBAL_STORAGE_ADDRESS = ALL_ADDRESSES.GlobalStorage;
export const GLOBAL_STORAGE_HELPER_ADDRESS = ALL_ADDRESSES.GlobalStorageHelper;
export const HYPERLIQUID_HANDLER_ADDRESS = ALL_ADDRESSES.HyperliquidHandler;
export const LEVERAGED_TOKEN_HELPER_ADDRESS =
  ALL_ADDRESSES.LeveragedTokenHelper;
export const LEVERAGED_TOKEN_IMPLEMENTATION_ADDRESS =
  ALL_ADDRESSES.LeveragedTokenImplementation;
export const REFERRALS_ADDRESS = ALL_ADDRESSES.Referrals;
export const USDC_ADDRESS = ALL_ADDRESSES.USDC;

// Export ABIs
export const FACTORY_ABI = factoryAbi;
export const GLOBAL_STORAGE_ABI = globalStorageAbi;
export const GLOBAL_STORAGE_HELPER_ABI = globalStorageHelperAbi;
export const HYPERLIQUID_HANDLER_ABI = hyperliquidHandlerAbi;
export const LEVERAGED_TOKEN_ABI = leveragedTokenAbi;
export const LEVERAGED_TOKEN_HELPER_ABI = leveragedTokenHelperAbi;
export const REFERRALS_ABI = referralsAbi;
export const USDC_ABI = erc20Abi;

// Export addresses as default for convenience
export default ALL_ADDRESSES;
