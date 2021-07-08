import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  BoxDetails,
} from '@components';
import { useStyles } from './styles';

const Params = () => {
  const { t } = useTranslation('params');
  const classes = useStyles();

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

  return (
    <Layout
      title={t('params')}
      navTitle={t('params')}
    >
      <LoadAndExist
        loading={false}
        exists
      >
        <span className={classes.root}>
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
          <BoxDetails {...boxDataDummy} />
        </span>
      </LoadAndExist>
    </Layout>
  );
};

export default Params;
