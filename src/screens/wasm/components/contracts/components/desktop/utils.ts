export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'contractName',
    width: 20,
  },
  {
    key: 'contract',
    width: 10,
  },
  {
    key: 'contractAddress',
    width: 5,
  },
  {
    key: 'hash',
    width: 5,
  },
  {
    key: 'creator',
    width: 5,
  },
  {
    key: 'executes',
    width: 5,
    align: 'right',
  },
  {
    key: 'initiatedAt',
    width: 15,
    align: 'right',
  },
  {
    key: 'lastExecuted',
    width: 15,
    align: 'right',
  },
];
