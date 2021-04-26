export const chainConfig = {
  network: 'morpheus-13001', // initial value
  icon: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/desmos.svg?sanitize=true',
  base: 'udaric',
  display: 'daric',
  prefix: {
    consensus: 'desmosvalcons',
    validator: 'desmosvaloper',
    account: 'desmos',
  },
  genesis: {
    time: '2021-04-27T13:00:00',
    height: 1,
  },
  denomUnits: [
    {
      denom: 'udaric',
      exponent: 0,
      aliases: ['microdaric'],
    },
    {
      denom: 'mdaric',
      exponent: 3,
      aliases: ['millidaric'],
    },
    {
      denom: 'daric',
      exponent: 6,
    },
    {
      denom: 'upotic',
      exponent: 0,
      aliases: ['microdaric'],
    },
    {
      denom: 'mpotic',
      exponent: 3,
      aliases: ['millipotic'],
    },
    {
      denom: 'potic',
      exponent: 6,
    },
  ],
};
