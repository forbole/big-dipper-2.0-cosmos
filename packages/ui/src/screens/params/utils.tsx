import type {
  Distribution,
  Gov,
  Minting,
  Slashing,
  Staking,
  FeeModel,
  Token,
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
  // commented out until backend is updated
  {
    key: 'minSelfDelegation',
    label: t('minSelfDelegation'),
    //Kept the "toUpperCase()" in order to show the token symbol in uppercase
    detail: `${numeral(data.minSelfDelegation.value).format(
      '0,0'
    )} ${data.minSelfDelegation.displayDenom.toUpperCase()}`,
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
    //Kept the "toUpperCase()" in order to show the token symbol in uppercase
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

export const formatFeeModel = (data: FeeModel, t: TFunction) => [
  {
    key: 'maxDiscount',
    label: t('maxDiscount'),
    detail: `${numeral(data.maxDiscount * 100).format('0.[00]')}%`,
  },
  {
    key: 'maxBlockGas',
    label: t('maxBlockGas'),
    detail: numeral(data.maxBlockGas).format('0,0'),
  },
  {
    key: 'initialGasPrice',
    label: t('initialGasPrice'),
    detail: numeral(data.initialGasPrice).format('0.[0000]'),
  },
  {
    key: 'longEmaBlockLength',
    label: t('longEmaBlockLength'),
    detail: numeral(data.longEmaBlockLength).format('0,0'),
  },
  {
    key: 'shortEmaBlockLength',
    label: t('shortEmaBlockLength'),
    detail: numeral(data.shortEmaBlockLength).format('0,0'),
  },
  {
    key: 'maxGasPriceMultiplier',
    label: t('maxGasPriceMultiplier'),
    detail: numeral(data.maxGasPriceMultiplier).format('0,0'),
  },
  {
    key: 'escalationStartFraction',
    label: t('escalationStartFraction'),
    detail: numeral(data.escalationStartFraction).format('0.[000]'),
  },
];

export const formatToken = (data: Token, t: TFunction) => {
  if (data.tokenUpgradeDecisionTimeout && data.tokenUpgradeGracePeriod) {
    const tokenDecisionTimeout = new Date(data.tokenUpgradeDecisionTimeout);
    return [
      {
        key: 'nftMintFee',
        label: t('nftMintFee'),
        detail: `${numeral(data.nftMintFee.value).format(
          '0.[0000]'
        )} ${data.nftMintFee.displayDenom.toUpperCase()}`,
      },
      {
        key: 'ftIssueFee',
        label: t('ftIssueFee'),
        detail: `${numeral(data.ftIssueFee.value).format(
          '0.[0000]'
        )} ${data.ftIssueFee.displayDenom.toUpperCase()}`,
      },
      {
        key: 'tokenUpgradeGracePeriod',
        label: t('tokenUpgradeGracePeriod'),
        detail: `${numeral(data.tokenUpgradeGracePeriod / 1000000).format('0,0')}`,
      },
      {
        key: 'tokenUpgradeDecisionTimeout',
        label: t('tokenUpgradeDecisionTimeout'),
        detail: `${tokenDecisionTimeout.toLocaleDateString()} `,
      },
    ];
  } else {
    return [
      {
        key: 'nftMintFee',
        label: t('nftMintFee'),
        detail: `${numeral(data.nftMintFee.value).format(
          '0.[0000]'
        )} ${data.nftMintFee.displayDenom.toUpperCase()}`,
      },
      {
        key: 'ftIssueFee',
        label: t('ftIssueFee'),
        detail: `${numeral(data.ftIssueFee.value).format(
          '0.[0000]'
        )} ${data.ftIssueFee.displayDenom.toUpperCase()}`,
      },
    ];
  }
};
