export type ContractType = {
  name: string;
  contract: string;
  contractAddress: string;
  hash: string;
  executes: number;
  createdAt: string;
  lastExecuted: string;
}

export type CodeType = {
  verified: boolean;
  id: number;
  contract: string;
  hash: string;
  creator: string;
  version: string;
  instantiates: number;
  createdAt: string;
}

export type DataType<g> = {
  data: {
    [value:number]: g[];
  };
  count: number;
  loading: boolean;
}

export type ContractsType = DataType<ContractType>;
export type CodesType = DataType<CodeType>;

export type WasmState = {
  loading: boolean;
  exists: boolean;
  contracts: ContractsType;
  codes: CodesType;
}
