import { nanoToSeconds, secondsToDays } from 'ui/utils/time';
import numeral from 'numeral';
import type {
  Staking,
  Slashing,
  Minting,
  Distribution,
  Gov,
  InflationRate,
  GasPrice,
} from './types';

const convertBySeconds = (seconds: number, t: any) => {
  const SECONDS_IN_DAY = 86400;
  return seconds >= SECONDS_IN_DAY
    ? t('days', {
        day: secondsToDays(seconds),
      })
    : t('seconds', {
        second: seconds,
      });
};

export const formatStaking = (data: Staking, t: any) => {
  return [
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
};

export const formatSlashing = (data: Slashing, t: any) => {
  return [
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
};

export const formatMinting = (data: Minting, t: any) => {
  return [
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
};

export const formatDistribution = (data: Distribution, t: any) => {
  return [
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
};

export const formatGov = (data: Gov, t: any) => {
  return [
    {
      label: t('minDeposit'),
      detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
    },
    {
      label: t('maxDepositPeriod'),
      detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
    },
    {
      label: t('quorum'),
      detail: `${numeral(data.quorum * 100).format('0.[00]')}%`,
    },
    {
      label: t('threshold'),
      detail: `${numeral(data.threshold * 100).format('0.[00]')}%`,
    },
    {
      label: t('vetoThreshold'),
      detail: `${numeral(data.vetoThreshold * 100).format('0.[00]')}%`,
    },
    {
      label: t('votingPeriod'),
      detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
    },
  ];
};

export const formatInflationRate = (data: InflationRate) => {
  return data.map((item) => {
    return {
      label: item.denom,
      detail: numeral(item.inflation).format('0.[0]%'),
    };
  });
};

export const formatGasPrice = (data: GasPrice) => {
  return data.map((item) => {
    return {
      label: item.denom,
      detail: numeral(item.amount).format('0.00'),
    };
  });
};
