import numeral from 'numeral';
import {
  InflationType,
  InflationGovernorType,
  EpochScheduleType,
} from './types';

export const inflationData = (data: InflationType, t: any) => {
  return ([
    {
      name: t('epoch'),
      value: numeral(data.epoch).format('0,0'),
      detail: t('epochDetail'),
    },
    {
      name: t('totalInflation'),
      value: `${numeral(data.total * 100).format('0.[00]')}%`,
      detail: t('totalInflationDetail'),
    },
    {
      name: t('validatorInflation'),
      value: `${numeral(data.validator * 100).format('0.[00]')}%`,
      detail: t('validatorInflationDetail'),
    },
    {
      name: t('foundationInflation'),
      value: `${numeral(data.foundation * 100).format('0.[00]')}%`,
      detail: t('foundationInflationDetail'),
    },
  ]);
};

export const inflationGovernorData = (data: InflationGovernorType, t: any) => {
  return ([
    {
      name: t('initial'),
      value: `${numeral(data.initial * 100).format('0.[00]')}%`,
      detail: t('initialDetail'),
    },
    {
      name: t('terminal'),
      value: `${numeral(data.terminal * 100).format('0.[00]')}%`,
      detail: t('terminalDetail'),
    },
    {
      name: t('taper'),
      value: `${numeral(data.taper * 100).format('0.[00]')}%`,
      detail: t('taperDetail'),
    },
    {
      name: t('foundation'),
      value: `${numeral(data.foundation * 100).format('0.[00]')}%`,
      detail: t('foundationDetail'),
    },
    {
      name: t('foundationTerm'),
      value: numeral(data.foundationTerm).format('0,0'),
      detail: t('foundationTermDetail'),
    },
  ]);
};

export const epochScheduleData = (data: EpochScheduleType, t: any) => {
  return ([
    {
      name: t('slotsPerEpoch'),
      value: numeral(data.slotsPerEpoch).format('0,0'),
      detail: t('slotsPerEpochDetail'),
    },
    {
      name: t('leaderScheduleSlotOffset'),
      value: numeral(data.leaderScheduleSlotOffset).format('0,0'),
      detail: t('leaderScheduleSlotOffsetDetail'),
    },
    {
      name: t('warmup'),
      value: `${data.warmup}`.toUpperCase(),
      detail: t('warmupDetail'),
    },
    {
      name: t('firstNormalEpoch'),
      value: numeral(data.firstNormalEpoch).format('0,0'),
      detail: t('firstNormalEpochDetail'),
    },
    {
      name: t('firstNormalSlot'),
      value: numeral(data.firstNormalSlot).format('0,0'),
      detail: t('firstNormalSlotDetail'),
    },
  ]);
};
