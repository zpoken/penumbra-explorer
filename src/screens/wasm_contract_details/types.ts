export type ContractType = {
  name: string;
  contract: string;
  contractAddress: string;
  hash: string;
  creator: string;
  executes: number;
  createdAt: string;
  lastExecuted: string;
}

export type WasmState = {
  loading: boolean;
  exists: boolean;
  contract: ContractType;
}
