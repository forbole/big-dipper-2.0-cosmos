import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { EpochDetail } from './components';
import { useStyles } from './styles';
import { useEpoch } from './hooks';
import {
  inflationData,
  inflationGovernorData,
  epochScheduleData,
} from './utils';

const Epoch = () => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();
  const { state } = useEpoch();

  const inflation = inflationData(state.inflation, t);
  const inflationGovernor = inflationGovernorData(state.inflationGovernor, t);
  const epochSchedule = epochScheduleData(state.epochSchedule, t);

  return (
    <>
      <NextSeo
        title={t('epoch')}
        openGraph={{
          title: t('epoch'),
        }}
      />
      <Layout
        navTitle={t('epoch')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <EpochDetail epochDetail={inflation} title="inflation" />
          <EpochDetail epochDetail={inflationGovernor} title="inflationGovernor" />
          <EpochDetail epochDetail={epochSchedule} title="epochSchedule" />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
