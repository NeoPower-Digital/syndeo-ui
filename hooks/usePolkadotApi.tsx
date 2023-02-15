import { ApiPromise, WsProvider } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";
import { WalletAccount } from "@talismn/connect-wallets";

const usePolkadotApi = async (account: WalletAccount): Promise<ApiPromise> => {
  const CHAIN_URL = "wss://rococo-contracts-rpc.polkadot.io";
  // const CHAIN_URL = "wss://shibuya-rpc.dwellir.com";

  const provider = new WsProvider(CHAIN_URL);
  const polkadotApi = await ApiPromise.create({ provider });

  polkadotApi.setSigner(account?.signer as Signer);

  return polkadotApi;
};

export default usePolkadotApi;
