import metadata from "@/contracts/contract-metadata.json";
import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";

const CONTRACT_ADDRESS = "5HC1Xhr1qwFbX3enSNVftFKPDVKdk4y1ypVxs3LtWM9ss9eC";

const useContract = (polkadotApi: ApiPromise): ContractPromise => {
  const contract = new ContractPromise(polkadotApi, metadata, CONTRACT_ADDRESS);
  return contract;
};

export default useContract;
