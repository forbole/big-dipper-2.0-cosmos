import type { Distribution, Gov, Iscn, Minting, Slashing, Staking } from '@/screens/params/types';
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
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.bondDenom`, {
      defaultValue: t('bondDenom'),
    }),
    detail: data.bondDenom,
  },
  {
    key: 'unbondingTime',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.unbondingTime`, {
      defaultValue: t('unbondingTime'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t),
  },
  {
    key: 'maxEntries',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.maxEntries`, {
      defaultValue: t('maxEntries'),
    }),
    detail: numeral(data.maxEntries).format('0,0'),
  },
  {
    key: 'historicalEntries',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.historicalEntries`, {
      defaultValue: t('historicalEntries'),
    }),
    detail: numeral(data.historicalEntries).format('0,0'),
  },
  {
    key: 'maxValidators',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.maxValidators`, {
      defaultValue: t('maxValidators'),
    }),
    detail: numeral(data.maxValidators).format('0,0'),
  },
];

export const formatSlashing = (data: Slashing, t: TFunction) => [
  {
    key: 'downTimeJailDuration',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.downtimeJailDuration`, {
      defaultValue: t('downtimeJailDuration'),
    }),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
    }),
  },
  {
    key: 'minSignedPerWindow',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.minSignedPerWindow`, {
      defaultValue: t('minSignedPerWindow'),
    }),
    detail: `${numeral(data.minSignedPerWindow * 100).format('0.[00]')}%`,
  },
  {
    key: 'signedBlockWindow',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.signedBlockWindow`, {
      defaultValue: t('signedBlockWindow'),
    }),
    detail: numeral(data.signedBlockWindow).format('0,0'),
  },
  {
    key: 'slashFractionDoubleSign',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.slashFractionDoubleSign`, {
      defaultValue: t('slashFractionDoubleSign'),
    }),
    detail: `${data.slashFractionDoubleSign * 100} / 100`,
  },
  {
    key: 'slashFractionDowntime',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.slashFractionDowntime`, {
      defaultValue: t('slashFractionDowntime'),
    }),
    detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
  },
];

export const formatMinting = (data: Minting, t: TFunction) => [
  {
    key: 'blocksPerYear',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.blocksPerYear`, {
      defaultValue: t('blocksPerYear'),
    }),
    detail: numeral(data.blocksPerYear).format('0,0'),
  },
  {
    key: 'goalBonded',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.goalBonded`, {
      defaultValue: t('goalBonded'),
    }),
    detail: `${numeral(data.goalBonded * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMax',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.inflationMax`, {
      defaultValue: t('inflationMax'),
    }),
    detail: `${numeral(data.inflationMax * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMin',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.inflationMin`, {
      defaultValue: t('inflationMin'),
    }),
    detail: `${numeral(data.inflationMin * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationRateChange',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.inflationRateChange`, {
      defaultValue: t('inflationRateChange'),
    }),
    detail: `${numeral(data.inflationRateChange * 100).format('0.[00]')}%`,
  },
  {
    key: 'mintDenom',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.mintDenom`, {
      defaultValue: t('mintDenom'),
    }),
    detail: data.mintDenom,
  },
];

export const formatDistribution = (data: Distribution, t: TFunction) => [
  {
    key: 'baseProposerReward',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.baseProposerReward`, {
      defaultValue: t('baseProposerReward'),
    }),
    detail: `${numeral(data.baseProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'bonusProposerReward',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.bonusProposerReward`, {
      defaultValue: t('bonusProposerReward'),
    }),
    detail: `${numeral(data.bonusProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'communityTax',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.communityTax`, {
      defaultValue: t('communityTax'),
    }),
    detail: `${numeral(data.communityTax * 100).format('0.[00]')}%`,
  },
  {
    key: 'withdrawAddrEnabled',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.withdrawAddressEnabled`, {
      defaultValue: t('withdrawAddressEnabled'),
    }),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatGov = (data: Gov, t: TFunction) => [
  {
    key: 'minDeposit',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.minDeposit`, {
      defaultValue: t('minDeposit'),
    }),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
  },
  {
    key: 'maxDepositPeriod',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.maxDepositPeriod`, {
      defaultValue: t('maxDepositPeriod'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
  },
  {
    key: 'quorum',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.quorum`, {
      defaultValue: t('quorum'),
    }),
    detail: `${numeral(data.quorum * 100).format('0.[00]')}%`,
  },
  {
    key: 'threshold',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.threshold`, {
      defaultValue: t('threshold'),
    }),
    detail: `${numeral(data.threshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'vetoThreshold',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.vetoThreshold`, {
      defaultValue: t('vetoThreshold'),
    }),
    detail: `${numeral(data.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'votingPeriod',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.votingPeriod`, {
      defaultValue: t('votingPeriod'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
  },
];

export const formatIscn = (data: Iscn, t: TFunction) => [
  {
    key: 'registryName',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.registryName`, {
      defaultValue: t('registryName'),
    }),
    detail: data.registryName,
  },
  {
    key: 'feePerByte',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.feePerByte`, {
      defaultValue: t('feePerByte'),
    }),
    detail: `${data.feePerByte.value} ${data.feePerByte.displayDenom.toUpperCase()}`,
  },
];
