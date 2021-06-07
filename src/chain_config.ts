export const chainConfig = {
  title: 'Desmos Block Explorer', // title to display on the tabs
  network: 'morpheus-apollo-1', // initial value
  icon: 'https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/icon.svg?sanitize=true',
  logo: 'https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/logo.png?sanitize=true',
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
      aliases: ['micropotic'],
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
