export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'id',
    width: 5,
  },
  {
    key: 'verified',
    width: 5,
    align: 'center',
  },
  {
    key: 'contract',
    width: 10,
  },
  {
    key: 'hash',
    width: 20,
  },
  {
    key: 'creator',
    width: 20,
  },
  {
    key: 'version',
    width: 10,
    align: 'center',
  },
  {
    key: 'instantiates',
    width: 10,
    align: 'right',
  },
  {
    key: 'createdAt',
    width: 20,
    align: 'right',
  },
];
