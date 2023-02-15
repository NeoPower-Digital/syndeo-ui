import { ApiPromise, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import metadata from "@/contracts/contract-metadata.json";
import { WalletAccount } from "@talismn/connect-wallets";
import { Signer } from "@polkadot/api/types";

// TODO: Replace constants
const CHAIN_URL = "wss://shibuya-rpc.dwellir.com";
const CONTRACT_ADDRESS = "CONTRACT_ADDRESS";
const MESSAGE_NAME = "MESSAGE_NAME";

// TODO: Handle async methods to create polkadot API
const useTransaction = async (account: WalletAccount) => {
  const provider = new WsProvider(CHAIN_URL);
  const polkadotApi = await ApiPromise.create({ provider });

  polkadotApi.setSigner(account?.signer as Signer);

  const contract = new ContractPromise(polkadotApi, metadata, CONTRACT_ADDRESS);

  contract.tx[MESSAGE_NAME](
    {}, // OPTIONS
    { PARAMS: "PARAMS" }
  )
    .signAndSend(account?.address, (result) => {
      console.log(result);
    })
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default useTransaction;
