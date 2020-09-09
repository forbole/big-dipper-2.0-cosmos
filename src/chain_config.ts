import SolonaIcon from '@assets/icon-solona.svg';

export const chainConfig = {
  network: 'morpheus-13001',
  icon: SolonaIcon,
  base: 'udaric',
  display: 'daric',
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
