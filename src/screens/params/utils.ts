import {
  nanoToSeconds, secondsToDays,
} from '@utils/time';
import numeral from 'numeral';
import {
  Staking, Slashing, Minting,
} from './types';

export const formatStaking = (data: Staking, t: any) => {
  return ([
    {
      label: t('bondDenom'),
      detail: data.bondDenom,
    },
    {
      label: t('unbondingTime'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.unbondingTime)),
      }),
    },
    {
      label: t('maxEntries'),
      detail: numeral(data.maxEntries).format('0,0'),
    },
    {
      label: t('historicalEntries'),
      detail: numeral(data.historicalEntries).format('0,0'),
    },
    {
      label: t('maxValidators'),
      detail: numeral(data.maxValidators).format('0,0'),
    },
  ]);
};

export const formatSlashing = (data: Slashing, t: any) => {
  return ([
    {
      label: t('downtimeJailDuration'),
      detail: t('seconds', {
        second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
      }),
    },
    {
      label: t('minSignedPerWindow'),
      detail: data.minSignedPerWindow,
    },
    {
      label: t('signedBlockWindow'),
      detail: numeral(data.signedBlockWindow).format('0,0'),
    },
    {
      label: t('slashFractionDoubleSign'),
      detail: data.slashFractionDoubleSign,
    },
    {
      label: t('slashFractionDowntime'),
      detail: data.slashFractionDowntime,
    },
  ]);
};

export const formatMinting = (data: Minting, t: any) => {
  return ([
    {
      label: t('blocksPerYear'),
      detail: data.blocksPerYear,
    },
    {
      label: t('goalBonded'),
      detail: data.goalBonded,
    },
    {
      label: t('inflationMax'),
      detail: data.inflationMax,
    },
    {
      label: t('inflationMin'),
      detail: data.inflationMin,
    },
    {
      label: t('inflationRateChangeslashFractionDowntime'),
      detail: data.inflationRateChange,
    },
    {
      label: t('mintDenom'),
      detail: data.mintDenom,
    },
  ]);
};
