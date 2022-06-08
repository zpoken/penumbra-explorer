export const fakeContract = {
  name: 'Fake Name Somewhat',
  contract: 'CW20 Contract',
  contractAddress: 'desmos1vaeuky9hqacenay9nmuualugvv54tdhyt2wsvhnjasx9s946hhmqaq3kh7',
  hash: '67A64103274E1B850E8250860F4CD03D0D286B1C2A039B84DE59BF420B65B215',
  creator: 'desmos1ap3yavgakvez6xxf6sxyud395zhcxp5069mqvh',
  executes: 1000,
  createdAt: '2021-11-20T14:00:27.485296',
  lastExecuted: '2021-11-20T14:00:27.485296',
};

export const fakeContracts = Array(50).fill(fakeContract);

export const fakeCodeOne = {
  verified: true,
  id: 1,
  contract: 'CW20 Contract',
  hash: '67A64103274E1B850E8250860F4CD03D0D286B1C2A039B84DE59BF420B65B215',
  creator: 'desmos1ap3yavgakvez6xxf6sxyud395zhcxp5069mqvh',
  version: '0.1.4',
  instantiates: 23,
  createdAt: '2021-11-20T14:00:27.485296',
};

export const fakeCodeTwo = {
  verified: false,
  id: 1,
  contract: 'CW20 Contract',
  hash: '67A64103274E1B850E8250860F4CD03D0D286B1C2A039B84DE59BF420B65B215',
  creator: 'desmos1ap3yavgakvez6xxf6sxyud395zhcxp5069mqvh',
  version: '0.1.4',
  instantiates: 23,
  createdAt: '2021-11-20T14:00:27.485296',
};

export const fakeCodes = Array(30).fill(null).map((x, i) => {
  if (i % 2) {
    return {
      ...fakeCodeOne,
      id: i + 1,
    };
  }

  return {
    ...fakeCodeTwo,
    id: i + 1,
  };
});
