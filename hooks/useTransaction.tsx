import { ApiPromise } from "@polkadot/api";
import { WalletAccount } from "@talismn/connect-wallets";
import { WeightV2 } from "@polkadot/types/interfaces";
import useContract from "./useContract";

const useTransaction = (
  polkadotApi: ApiPromise,
  account: WalletAccount,
  messageName: string,
  params: any
) => {
  const contract = useContract(polkadotApi);

  // ToDo: Replace params
  return contract.query[messageName](
    account?.address,
    {
      gasLimit: polkadotApi.registry.createType("WeightV2", {
        refTime: Number.MAX_SAFE_INTEGER,
        proofSize: Number.MAX_SAFE_INTEGER,
      }) as WeightV2,
    },
    "5CMM6aqxmXvUyKGTxvEXb4zpkeK7HxYepmcJjh9zWkzr5Lbg",
    5
  ).then(({ gasRequired }) => {
    const gasLimit = polkadotApi.registry.createType(
      "WeightV2",
      gasRequired
    ) as WeightV2;
    contract.tx[messageName](
      {
        gasLimit,
      },
      "5CMM6aqxmXvUyKGTxvEXb4zpkeK7HxYepmcJjh9zWkzr5Lbg",
      5
    )
      .signAndSend(account?.address, (result) => {
        console.log(result);
      })
      .then((finalResult) => {
        console.log(finalResult);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export default useTransaction;
