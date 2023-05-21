import type { Distribution, Gov, Minting, Oracle, Slashing, Staking } from '@/screens/params/types';
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
    key: 'downtimeJailDuration',
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
    key: 'withdrawAddressEnabled',
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

export const formatOracle = (data: Oracle, t: TFunction) => [
  {
    key: 'maxAskCount',
    label: t('maxAskCount'),
    detail: numeral(data.maxAskCount).format('0,0'),
  },
  {
    key: 'baseOwsmGas',
    label: t('baseOwsmGas'),
    detail: numeral(data.baseOwsmGas).format('0,0'),
  },
  {
    key: 'maxCalldataSize',
    label: t('maxCalldataSize'),
    detail: t('bytes', {
      bytes: numeral(data.maxCalldataSize).format('0,0'),
    }),
  },
  {
    key: 'samplingTryCount',
    label: t('samplingTryCount'),
    detail: numeral(data.samplingTryCount).format('0,0'),
  },
  {
    key: 'maxReportDataSize',
    label: t('maxReportDataSize'),
    detail: t('bytes', {
      bytes: numeral(data.maxReportDataSize).format('0,0'),
    }),
  },
  {
    key: 'maxRawRequestCount',
    label: t('maxRawRequestCount'),
    detail: numeral(data.maxRawRequestCount).format('0,0'),
  },
  {
    key: 'expirationBlockCount',
    label: t('expirationBlockCount'),
    detail: numeral(data.expirationBlockCount).format('0,0'),
  },
  {
    key: 'oracleRewardPercentage',
    label: t('oracleRewardPercentage'),
    detail: `${numeral(data.oracleRewardPercentage).format('0.[00]')}%`,
  },
  {
    key: 'inactivePenaltyDuration',
    label: t('inactivePenaltyDuration'),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.inactivePenaltyDuration)).format('0,0'),
    }),
  },
  {
    key: 'perValidatorRequestGas',
    label: t('perValidatorRequestGas'),
    detail: numeral(data.perValidatorRequestGas).format('0,0'),
  },
];
