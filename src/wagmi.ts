import { getDefaultConfig } from "connectkit";
import { configureChains, createConfig, mainnet } from "wagmi";
import { goerli, optimism, polygon, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const chains = [goerli];

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "Stake for Impact",
    walletConnectProjectId: "1f2cce538fdf18d054e7f797120e2d81",
    chains,
  })
);
