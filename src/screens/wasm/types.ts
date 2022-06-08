export type ContractType = {
  name: string;
  contract: string;
  contractAddress: string;
  hash: string;
  executes: number;
  createdAt: string;
  lastExecuted: string;
}

export type DataType<g> = {
  data: {
    [value:number]: g[];
  };
  count: number;
  loading: boolean;
}

export type ContractsType = DataType<ContractType>;

export type WasmState = {
  loading: boolean;
  exists: boolean;
  contracts: ContractsType;
}
