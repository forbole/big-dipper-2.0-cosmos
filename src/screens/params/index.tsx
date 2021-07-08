import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  BoxDetails,
} from '@components';
import { useStyles } from './styles';
import { useParams } from './hooks';
import {
  formatStaking, formatSlashing,
} from './utils';

const Params = () => {
  const { t } = useTranslation('params');
  const classes = useStyles();
  const { state } = useParams();
  const fakeData = [
    {
      param: 'unbonding_time',
      value: 2432535,
    },
    {
      param: 'unbonding_time',
      value: 2432535,
    },
    {
      param: 'unbonding_time',
      value: 2432535,
    },
    {
      param: 'unbonding_time',
      value: 2432535,
    },
    {
      param: 'unbonding_time',
      value: 2432535,
    },
  ];

  const boxDataDummy = {
    title: t('staking'),
    details: fakeData.map((x) => ({
      label: x.param,
      detail: x.value,
    })),
  };

  const staking = {
    title: t('staking'),
    details: formatStaking(state.staking, t),
  };

  const slashing = {
    title: t('slashing'),
    details: formatSlashing(state.slashing, t),
  };

  return (
    <Layout
      title={t('params')}
      navTitle={t('params')}
    >
      <LoadAndExist
        loading={state.loading}
        exists={state.exists}
      >
        <span className={classes.root}>
          <BoxDetails {...staking} />
          <BoxDetails {...slashing} />
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
        </span>
      </LoadAndExist>
    </Layout>
  );
};

export default Params;
