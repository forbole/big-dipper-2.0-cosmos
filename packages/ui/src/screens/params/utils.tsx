import type { Distribution, Gov, Minting, Slashing, Staking } from '@/screens/params/types';
import { nanoToSeconds, secondsToDays } from '@/utils/time';
import { TFunction } from 'next-i18next';
import numeral from 'numeral';

const convertBySeconds = (seconds: number, t: TFunction) => {
  const SECONDS_IN_DAY = 86400;
  return seconds >= SECONDS_IN_DAY
    ? t('days', {
        day: secondsToDays(seconds),
      })
    : t('seconds', {
        second: seconds,
      });
};

export const formatStaking = (data: Staking, t: TFunction) => [
  {
    key: 'bondDenom',
    label: tApp(`params_bondDenom`, {
      defaultValue: t('bondDenom'),
    }),
    detail: data.bondDenom,
  },
  {
    key: 'unbondingTime',
    label: tApp(`params_unbondingTime`, {
      defaultValue: t('unbondingTime'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t),
  },
  {
    key: 'maxEntries',
    label: tApp(`params_maxEntries`, {
      defaultValue: t('maxEntries'),
    }),
    detail: numeral(data.maxEntries).format('0,0'),
  },
  {
    key: 'historicalEntries',
    label: tApp(`params_historicalEntries`, {
      defaultValue: t('historicalEntries'),
    }),
    detail: numeral(data.historicalEntries).format('0,0'),
  },
  {
    key: 'maxValidators',
    label: tApp(`params_maxValidators`, {
      defaultValue: t('maxValidators'),
    }),
    detail: numeral(data.maxValidators).format('0,0'),
  },
];

export const formatSlashing = (data: Slashing, t: TFunction) => [
  {
    key: 'downtimeJailDuration',
    label: tApp(`params_downtimeJailDuration`, {
      defaultValue: t('downtimeJailDuration'),
    }),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
    }),
  },
  {
    key: 'minSignedPerWindow',
    label: tApp(`params_minSignedPerWindow`, {
      defaultValue: t('minSignedPerWindow'),
    }),
    detail: `${numeral(data.minSignedPerWindow * 100).format('0.[00]')}%`,
  },
  {
    key: 'signedBlockWindow',
    label: tApp(`params_signedBlockWindow`, {
      defaultValue: t('signedBlockWindow'),
    }),
    detail: numeral(data.signedBlockWindow).format('0,0'),
  },
  {
    key: 'slashFractionDoubleSign',
    label: tApp(`params_slashFractionDoubleSign`, {
      defaultValue: t('slashFractionDoubleSign'),
    }),
    detail: `${data.slashFractionDoubleSign * 100} / 100`,
  },
  {
    key: 'slashFractionDowntime',
    label: tApp(`params_slashFractionDowntime`, {
      defaultValue: t('slashFractionDowntime'),
    }),
    detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
  },
];

export const formatMinting = (data: Minting, t: TFunction) => [
  {
    key: 'blocksPerYear',
    label: tApp(`params_blocksPerYear`, {
      defaultValue: t('blocksPerYear'),
    }),
    detail: numeral(data.blocksPerYear).format('0,0'),
  },
  {
    key: 'goalBonded',
    label: tApp(`params_goalBonded`, {
      defaultValue: t('goalBonded'),
    }),
    detail: `${numeral(data.goalBonded * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMax',
    label: tApp(`params_inflationMax`, {
      defaultValue: t('inflationMax'),
    }),
    detail: `${numeral(data.inflationMax * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMin',
    label: tApp(`params_inflationMin`, {
      defaultValue: t('inflationMin'),
    }),
    detail: `${numeral(data.inflationMin * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationRateChange',
    label: tApp(`params_inflationRateChange`, {
      defaultValue: t('inflationRateChange'),
    }),
    detail: `${numeral(data.inflationRateChange * 100).format('0.[00]')}%`,
  },
  {
    key: 'mintDenom',
    label: tApp(`params_mintDenom`, {
      defaultValue: t('mintDenom'),
    }),
    detail: data.mintDenom,
  },
];

export const formatDistribution = (data: Distribution, t: TFunction) => [
  {
    key: 'baseProposerReward',
    label: tApp(`params_baseProposerReward`, {
      defaultValue: t('baseProposerReward'),
    }),
    detail: `${numeral(data.baseProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'bonusProposerReward',
    label: tApp(`params_bonusProposerReward`, {
      defaultValue: t('bonusProposerReward'),
    }),
    detail: `${numeral(data.bonusProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'communityTax',
    label: tApp(`params_communityTax`, {
      defaultValue: t('communityTax'),
    }),
    detail: `${numeral(data.communityTax * 100).format('0.[00]')}%`,
  },
  {
    key: 'withdrawAddressEnabled',
    label: tApp(`params_withdrawAddressEnabled`, {
      defaultValue: t('withdrawAddressEnabled'),
    }),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatGov = (data: Gov, t: TFunction) => [
  {
    key: 'minDeposit',
    label: tApp(`params_minDeposit`, {
      defaultValue: t('minDeposit'),
    }),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
  },
  {
    key: 'maxDepositPeriod',
    label: tApp(`params_maxDepositPeriod`, {
      defaultValue: t('maxDepositPeriod'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
  },
  {
    key: 'quorum',
    label: tApp(`params_quorum`, {
      defaultValue: t('quorum'),
    }),
    detail: `${numeral(data.quorum * 100).format('0.[00]')}%`,
  },
  {
    key: 'threshold',
    label: tApp(`params_threshold`, {
      defaultValue: t('threshold'),
    }),
    detail: `${numeral(data.threshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'vetoThreshold',
    label: tApp(`params_vetoThreshold`, {
      defaultValue: t('vetoThreshold'),
    }),
    detail: `${numeral(data.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'votingPeriod',
    label: tApp(`params_votingPeriod`, {
      defaultValue: t('votingPeriod'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
  },
];
