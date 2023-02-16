import { DEFAULT_CHAIN } from "@/constants/constants";
import metadata from "@/contracts/contract-metadata.json";
import { accountAtom } from "@/states/account.atom";
import { polkadotAPIAtom } from "@/states/polkadotAPI.atom";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/api/types";
import { WeightV2 } from "@polkadot/types/interfaces";
import { useAtom } from "jotai";

export interface OrgStats {
  assignedPoints: string;
  membersAwarded: string;
  funds: string;
}

const MESSAGE = "getRewardsSummary";

export const emptyStats = {
  assignedPoints: "0",
  membersAwarded: "0",
  funds: "0",
};

const emptyPromise: Promise<OrgStats> = new Promise(() => emptyStats);
const emptyGetPromise = {
  getPromise: () => emptyPromise,
};

const useQuery = () => {
  const [account] = useAtom(accountAtom);
  const [api] = useAtom(polkadotAPIAtom);

  if (!api) return emptyGetPromise;

  console.log("USE QUERY", { account, api });

  api.setSigner(account?.signer as Signer);
  const contract = new ContractPromise(
    api,
    metadata,
    DEFAULT_CHAIN.CONTRACT_ADDRESS
  );

  const accountAddress = account?.address || "";

  if (!contract) return emptyGetPromise;
  if (!accountAddress) return emptyGetPromise;

  const gasLimitToSimulate = api?.registry.createType("WeightV2", {
    refTime: Number.MAX_SAFE_INTEGER,
    proofSize: Number.MAX_SAFE_INTEGER,
  }) as WeightV2;

  const getPromise = (): Promise<OrgStats> => {
    return contract!.query[MESSAGE](accountAddress!, {
      gasLimit: gasLimitToSimulate,
    }).then(({ output }) => {
      const data: any = output?.toHuman();
      return data["Ok"] || emptyStats;
    });
  };

  return { getPromise };
};

export default useQuery;
