import {
  nanoToSeconds, secondsToDays,
} from '@utils/time';
import numeral from 'numeral';
import {
  Staking,
  Slashing,
  Minting,
  Distribution,
  Gov,
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
      detail: numeral(data.blocksPerYear).format('0,0'),
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
      label: t('inflationRateChange'),
      detail: data.inflationRateChange,
    },
    {
      label: t('mintDenom'),
      detail: data.mintDenom,
    },
  ]);
};

export const formatDistribution = (data: Distribution, t: any) => {
  return ([
    {
      label: t('baseProposerReward'),
      detail: data.baseProposerReward,
    },
    {
      label: t('bonusProposerReward'),
      detail: data.bonusProposerReward,
    },
    {
      label: t('communityTax'),
      detail: data.communityTax,
    },
    {
      label: t('withdrawAddressEnabled'),
      detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
    },
  ]);
};

export const formatGov = (data: Gov, t: any) => {
  return ([
    {
      label: t('minDeposit'),
      detail: `${data.minDeposit.value} ${data.minDeposit.denom.toUpperCase()}`,
    },
    // {
    //   label: t('maxDepositPeriod'),
    //   detail: data.maxDepositPeriod,
    // },
    {
      label: t('quorum'),
      detail: numeral(data.quorum).format('0.[00]'),
    },
    {
      label: t('threshold'),
      detail: numeral(data.threshold).format('0.[00]'),
    },
    {
      label: t('vetoThreshold'),
      detail: numeral(data.vetoThreshold).format('0.[00]'),
    },
    // {
    //   label: t('votingPeriod'),
    //   detail: data.votingPeriod,
    // },
  ]);
};
