import type { Distribution, Gov, Minting, Slashing, Staking } from '@/screens/params/types';
import { nanoToSeconds, secondsToDays } from '@/utils/time';
import { Translate } from 'next-translate';
import numeral from 'numeral';
import { ReactNode } from 'react';

const convertBySeconds = (seconds: number, t: Translate) => {
  const SECONDS_IN_DAY = 86400;
  return seconds >= SECONDS_IN_DAY
    ? t('days', {
        day: secondsToDays(seconds),
      })
    : t('seconds', {
        second: seconds,
      });
};

export const formatStaking = (data: Staking, t: Translate) => [
  {
    label: t('bondDenom'),
    detail: data.bondDenom,
  },
  {
    label: t('unbondingTime'),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t),
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
];

export const formatSlashing = (data: Slashing, t: Translate) => [
  {
    label: t('downtimeJailDuration'),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
    }),
  },
  {
    label: t('minSignedPerWindow'),
    detail: `${numeral(data.minSignedPerWindow * 100).format('0.[00]')}%`,
  },
  {
    label: t('signedBlockWindow'),
    detail: numeral(data.signedBlockWindow).format('0,0'),
  },
  {
    label: t('slashFractionDoubleSign'),
    detail: `${data.slashFractionDoubleSign * 100} / 100`,
  },
  {
    label: t('slashFractionDowntime'),
    detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
  },
];

export const formatMinting = (data: Minting, t: Translate) => [
  {
    label: t('blocksPerYear'),
    detail: numeral(data.blocksPerYear).format('0,0'),
  },
  {
    label: t('goalBonded'),
    detail: `${numeral(data.goalBonded * 100).format('0.[00]')}%`,
  },
  {
    label: t('inflationMax'),
    detail: `${numeral(data.inflationMax * 100).format('0.[00]')}%`,
  },
  {
    label: t('inflationMin'),
    detail: `${numeral(data.inflationMin * 100).format('0.[00]')}%`,
  },
  {
    label: t('inflationRateChange'),
    detail: `${numeral(data.inflationRateChange * 100).format('0.[00]')}%`,
  },
  {
    label: t('mintDenom'),
    detail: data.mintDenom,
  },
];

export const formatDistribution = (data: Distribution, t: Translate) => [
  {
    label: t('baseProposerReward'),
    detail: `${numeral(data.baseProposerReward * 100).format('0.[00]')}%`,
  },
  {
    label: t('bonusProposerReward'),
    detail: `${numeral(data.bonusProposerReward * 100).format('0.[00]')}%`,
  },
  {
    label: t('communityTax'),
    detail: `${numeral(data.communityTax * 100).format('0.[00]')}%`,
  },
  {
    label: t('withdrawAddressEnabled'),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatGov = (
  data: Gov,
  t: Translate
): Array<{
  label: ReactNode;
  detail?: ReactNode;
}> => [
  {
    label: t('minDeposit'),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
  },
  {
    label: t('maxDepositPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
  },
  {
    label: t('votingPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
  },
  {
    label: t('default'),
  },
  {
    label: t('quorum'),
    detail: `${numeral(data.default.quorum * 100).format('0.[00]')}%`,
  },
  {
    label: t('threshold'),
    detail: `${numeral(data.default.threshold * 100).format('0.[00]')}%`,
  },
  {
    label: t('vetoThreshold'),
    detail: `${numeral(data.default.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    label: t('certifierStakeVote'),
  },
  {
    label: t('quorum'),
    detail: `${numeral(data.certifierStakeVote.quorum * 100).format('0.[00]')}%`,
  },
  {
    label: t('threshold'),
    detail: `${numeral(data.certifierStakeVote.threshold * 100).format('0.[00]')}%`,
  },
  {
    label: t('vetoThreshold'),
    detail: `${numeral(data.certifierStakeVote.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    label: t('certifierSecurityVote'),
  },
  {
    label: t('quorum'),
    detail: `${numeral(data.certifierSecurityVote.quorum * 100).format('0.[00]')}%`,
  },
  {
    label: t('threshold'),
    detail: `${numeral(data.certifierSecurityVote.threshold * 100).format('0.[00]')}%`,
  },
  {
    label: t('vetoThreshold'),
    detail: `${numeral(data.certifierSecurityVote.vetoThreshold * 100).format('0.[00]')}%`,
  },
];
