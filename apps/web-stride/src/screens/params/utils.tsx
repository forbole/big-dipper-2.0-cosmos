import type {
  Distribution,
  Gov,
  Minting,
  Slashing,
  Stakeibc,
  Staking,
} from '@/screens/params/types';
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
    key: 'downtimeJailDuration',
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
    key: 'withdrawAddressEnabled',
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

export const formatStakeibc = (data: Stakeibc, t: TFunction) => [
  {
    key: 'bufferSize',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.bufferSize`, {
      defaultValue: t('bufferSize'),
    }),
    detail: data.bufferSize,
  },
  {
    key: 'depositInterval',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.depositInterval`, {
      defaultValue: t('depositInterval'),
    }),
    detail: data.depositInterval,
  },
  {
    key: 'rewardsInterval',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.rewardsInterval`, {
      defaultValue: t('rewardsInterval'),
    }),
    detail: data.rewardsInterval,
  },
  {
    key: 'delegateInterval',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.delegateInterval`, {
      defaultValue: t('delegateInterval'),
    }),
    detail: data.delegateInterval,
  },
  {
    key: 'icaTimeoutNanos',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.icaTimeoutNanos`, {
      defaultValue: t('icaTimeoutNanos'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.icaTimeoutNanos), t),
  },
  {
    key: 'reinvestInterval',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.reinvestInterval`, {
      defaultValue: t('reinvestInterval'),
    }),
    detail: data.reinvestInterval,
  },
  {
    key: 'strideCommission',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.strideCommission`, {
      defaultValue: t('strideCommission'),
    }),
    detail: data.strideCommission,
  },
  {
    key: 'ibcTimeoutBlocks',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.ibcTimeoutBlocks`, {
      defaultValue: t('ibcTimeoutBlocks'),
    }),
    detail: data.ibcTimeoutBlocks,
  },
  {
    key: 'redemptionRateInterval',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.redemptionRateInterval`, {
      defaultValue: t('redemptionRateInterval'),
    }),
    detail: data.redemptionRateInterval,
  },
  {
    key: 'feeTransferTimeoutNanos',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.feeTransferTimeoutNanos`, {
      defaultValue: t('feeTransferTimeoutNanos'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.feeTransferTimeoutNanos), t),
  },
  {
    key: 'ibcTransferTimeoutNanos',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.ibcTransferTimeoutNanos`, {
      defaultValue: t('ibcTransferTimeoutNanos'),
    }),
    detail: convertBySeconds(nanoToSeconds(data.ibcTransferTimeoutNanos), t),
  },
  {
    key: 'maxStakeIcaCallsPerEpoch',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.maxStakeIcaCallsPerEpoch`, {
      defaultValue: t('maxStakeIcaCallsPerEpoch'),
    }),
    detail: data.maxStakeIcaCallsPerEpoch,
  },
  {
    key: 'validatorRebalancingThreshold',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.validatorRebalancingThreshold`, {
      defaultValue: t('validatorRebalancingThreshold'),
    }),
    detail: `${numeral(data.safetyMaxRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'safetyMaxRedemptionRateThreshold',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.safetyMaxRedemptionRateThreshold`, {
      defaultValue: t('safetyMaxRedemptionRateThreshold'),
    }),
    detail: `${numeral(data.safetyMaxRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'safetyMinRedemptionRateThreshold',
    label: t(`${process.env.NEXT_PUBLIC_APP_NAME}:params.safetyMinRedemptionRateThreshold`, {
      defaultValue: t('safetyMinRedemptionRateThreshold'),
    }),
    detail: `${numeral(data.safetyMinRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
];
