import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Button1 from './Button1';
import { Chain } from 'wagmi';

const avalancheChain: Chain = {
    id: 43_114,
    name: 'Avalanche',
    network: 'avalanche',
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#f5f434',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche',
      symbol: 'AVAX',
    },
    rpcUrls: {
      default: {
        http: ['https://api.avax.network/ext/bc/C/rpc'],
      },
    },
    blockExplorers: {
      default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
      etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    },
    testnet: false,
  };
  

const { chains, provider } = configureChains(
    [ avalancheChain,goerli ,mainnet, polygon, optimism],
    [
      alchemyProvider({ apiKey:'ydco-uXiecI62plJ5a0M1fOoqMT_Wbac' }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

const Connect = () => {
  return (
    <div>
          <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Button1 />
      </RainbowKitProvider>
    </WagmiConfig>
    </div>
  )
}

export default Connect
