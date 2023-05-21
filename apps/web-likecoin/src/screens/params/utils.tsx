import type { Distribution, Gov, Iscn, Minting, Slashing, Staking } from '@/screens/params/types';
import { nanoToSeconds, secondsToDays } from '@/utils/time';
import type { TFunction } from '@/hooks/useAppTranslation';
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
    label: t('bondDenom'),
    detail: data.bondDenom,
  },
  {
    key: 'unbondingTime',
    label: t('unbondingTime'),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t),
  },
  {
    key: 'maxEntries',
    label: t('maxEntries'),
    detail: numeral(data.maxEntries).format('0,0'),
  },
  {
    key: 'historicalEntries',
    label: t('historicalEntries'),
    detail: numeral(data.historicalEntries).format('0,0'),
  },
  {
    key: 'maxValidators',
    label: t('maxValidators'),
    detail: numeral(data.maxValidators).format('0,0'),
  },
];

export const formatSlashing = (data: Slashing, t: TFunction) => [
  {
    key: 'downTimeJailDuration',
    label: t('downtimeJailDuration'),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
    }),
  },
  {
    key: 'minSignedPerWindow',
    label: t('minSignedPerWindow'),
    detail: `${numeral(data.minSignedPerWindow * 100).format('0.[00]')}%`,
  },
  {
    key: 'signedBlockWindow',
    label: t('signedBlockWindow'),
    detail: numeral(data.signedBlockWindow).format('0,0'),
  },
  {
    key: 'slashFractionDoubleSign',
    label: t('slashFractionDoubleSign'),
    detail: `${data.slashFractionDoubleSign * 100} / 100`,
  },
  {
    key: 'slashFractionDowntime',
    label: t('slashFractionDowntime'),
    detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
  },
];

export const formatMinting = (data: Minting, t: TFunction) => [
  {
    key: 'blocksPerYear',
    label: t('blocksPerYear'),
    detail: numeral(data.blocksPerYear).format('0,0'),
  },
  {
    key: 'goalBonded',
    label: t('goalBonded'),
    detail: `${numeral(data.goalBonded * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMax',
    label: t('inflationMax'),
    detail: `${numeral(data.inflationMax * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMin',
    label: t('inflationMin'),
    detail: `${numeral(data.inflationMin * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationRateChange',
    label: t('inflationRateChange'),
    detail: `${numeral(data.inflationRateChange * 100).format('0.[00]')}%`,
  },
  {
    key: 'mintDenom',
    label: t('mintDenom'),
    detail: data.mintDenom,
  },
];

export const formatDistribution = (data: Distribution, t: TFunction) => [
  {
    key: 'baseProposerReward',
    label: t('baseProposerReward'),
    detail: `${numeral(data.baseProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'bonusProposerReward',
    label: t('bonusProposerReward'),
    detail: `${numeral(data.bonusProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'communityTax',
    label: t('communityTax'),
    detail: `${numeral(data.communityTax * 100).format('0.[00]')}%`,
  },
  {
    key: 'withdrawAddrEnabled',
    label: t('withdrawAddressEnabled'),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatGov = (data: Gov, t: TFunction) => [
  {
    key: 'minDeposit',
    label: t('minDeposit'),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
  },
  {
    key: 'maxDepositPeriod',
    label: t('maxDepositPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
  },
  {
    key: 'quorum',
    label: t('quorum'),
    detail: `${numeral(data.quorum * 100).format('0.[00]')}%`,
  },
  {
    key: 'threshold',
    label: t('threshold'),
    detail: `${numeral(data.threshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'vetoThreshold',
    label: t('vetoThreshold'),
    detail: `${numeral(data.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'votingPeriod',
    label: t('votingPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
  },
];

export const formatIscn = (data: Iscn, t: TFunction) => [
  {
    key: 'registryName',
    label: t('registryName'),
    detail: data.registryName,
  },
  {
    key: 'feePerByte',
    label: t('feePerByte'),
    detail: `${data.feePerByte.value} ${data.feePerByte.displayDenom.toUpperCase()}`,
  },
];
