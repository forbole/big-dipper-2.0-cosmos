import type { CCVConsumer, Distribution, Minting } from '@/screens/params/types';
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
    key: 'withdrawAddressEnabled',
    label: t('withdrawAddressEnabled'),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatCCVConsumer = (data: CCVConsumer, t: TFunction) => [
  {
    key: 'unbondingPeriod',
    label: t('unbondingPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.unbondingPeriod), t),
  },
  {
    key: 'ccvTimeoutPeriod',
    label: t('ccvTimeoutPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.ccvTimeoutPeriod), t),
  },
  {
    key: 'historicalEntries',
    label: t('historicalEntries'),
    detail: numeral(data.historicalEntries).format('0,0'),
  },
  {
    key: 'softOptOutThreshold',
    label: t('softOptOutThreshold'),
    detail: data.softOptOutThreshold,
  },
  {
    key: 'transferTimeoutPeriod',
    label: t('transferTimeoutPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.transferTimeoutPeriod), t),
  },
  {
    key: 'consumerRedistributionFraction',
    label: t('consumerRedistributionFraction'),
    detail: data.consumerRedistributionFraction,
  },
  {
    key: 'blocksPerDistributionTransmission',
    label: t('blocksPerDistributionTransmission'),
    detail: numeral(data.blocksPerDistributionTransmission).format('0,0'),
  },
];
