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
  Oracle,
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
      detail: `${data.minSignedPerWindow * 100}%`,
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
      detail: `${data.goalBonded * 100}%`,
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
      detail: `${data.inflationRateChange * 100}%`,
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
      detail: `${data.baseProposerReward * 100}%`,
    },
    {
      label: t('bonusProposerReward'),
      detail: `${data.bonusProposerReward * 100}%`,
    },
    {
      label: t('communityTax'),
      detail: `${data.communityTax * 100}%`,
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
      detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
    },
    {
      label: t('maxDepositPeriod'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.maxDepositPeriod)),
      }),
    },
    {
      label: t('quorum'),
      detail: `${data.quorum * 100}%`,
    },
    {
      label: t('threshold'),
      detail: `${data.threshold * 100}%`,
    },
    {
      label: t('vetoThreshold'),
      detail: `${data.vetoThreshold * 100}%`,
    },
    {
      label: t('votingPeriod'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.votingPeriod)),
      }),
    },
  ]);
};

export const formatOracle = (data: Oracle, t: any) => {
  return ([
    {
      label: t('maxAskCount'),
      detail: numeral(data.maxAskCount).format('0,0'),
    },
    {
      label: t('baseOwsmGas'),
      detail: numeral(data.baseOwsmGas).format('0,0'),
    },
    {
      label: t('maxCalldataSize'),
      detail: t('bytes', {
        bytes: numeral(data.maxCalldataSize).format('0,0'),
      }),
    },
    {
      label: t('samplingTryCount'),
      detail: numeral(data.samplingTryCount).format('0,0'),
    },
    {
      label: t('maxReportDataSize'),
      detail: t('bytes', {
        bytes: numeral(data.maxReportDataSize).format('0,0'),
      }),
    },
    {
      label: t('maxRawRequestCount'),
      detail: numeral(data.maxRawRequestCount).format('0,0'),
    },
    {
      label: t('expirationBlockCount'),
      detail: numeral(data.expirationBlockCount).format('0,0'),
    },
    {
      label: t('oracleRewardPercentage'),
      detail: `${numeral(data.oracleRewardPercentage).format('0.[00]')}%`,
    },
    {
      label: t('inactivePenaltyDuration'),
      detail: t('seconds', {
        second: numeral(nanoToSeconds(data.inactivePenaltyDuration)).format('0,0'),
      }),
    },
    {
      label: t('perValidatorRequestGas'),
      detail: numeral(data.perValidatorRequestGas).format('0,0'),
    },
  ]);
};
