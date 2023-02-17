import { atom } from "jotai";

export interface PolkadotNetwork {
  chainName: string;
  chainURL: string;
  contractAddress: string;
}

const ROCOCO = {
  chainName: "Rococo",
  chainURL: "wss://rococo-contracts-rpc.polkadot.io",
  contractAddress: "5DjomPLbA9N8WEtdYJxUb9Lka7WDsG7JcNJHBBQ9ZEKfbNv7",
};

const SHIBUYA = {
  chainName: "Shibuya",
  chainURL: "wss://shibuya-rpc.dwellir.com",
  contractAddress: "YxvbzzFgdirmQwbAvFfHiDgDe9H8UazJDMa2HJSFaYfpWE2",
};

const SHIDEN = {
  chainName: "Shiden",
  chainURL: "wss://shiden-rpc.dwellir.com",
  contractAddress: "bFNGwRwVztSizW4JcmE8QRhAC1uKnaidrjuPzgqdASLZXXT",
};

export const CHAINS = [ROCOCO, SHIBUYA, SHIDEN];

export const networkAtom = atom<PolkadotNetwork>(ROCOCO);
