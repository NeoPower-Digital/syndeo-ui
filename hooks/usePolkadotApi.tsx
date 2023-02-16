import { ApiPromise, WsProvider } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";
import { WalletAccount } from "@talismn/connect-wallets";

const usePolkadotApi = async (account: WalletAccount): Promise<ApiPromise> => {
  const CHAINS = {
    ROCOCO: "wss://rococo-contracts-rpc.polkadot.io",
    SHIBUYA: "wss://shibuya-rpc.dwellir.com",
  };

  const provider = new WsProvider(CHAINS.ROCOCO);
  const polkadotApi = await ApiPromise.create({ provider });

  polkadotApi.setSigner(account?.signer as Signer);

  return polkadotApi;
};

export default usePolkadotApi;
