/* eslint-disable no-unused-vars */
/**
 * List of all the networks supported
 */

export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
}

export enum ChainName {
  MAINNET = 'mainnet',
  SEPOLIA= 'sepolia',
  
}

export const CHAIN_NAMES_TO_IDS: { [chainName: string]: SupportedChainId } = {
  [ChainName.MAINNET]: SupportedChainId.MAINNET,
  [ChainName.SEPOLIA]: SupportedChainId.SEPOLIA,

}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.SEPOLIA,
]

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.SEPOLIA,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]


export const L2_CHAIN_IDS = [] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
