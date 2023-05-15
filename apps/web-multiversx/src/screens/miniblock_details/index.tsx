import React from 'react';
import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Overview from '@/screens/miniblock_details/components/overview';
import Transactions from '@/screens/miniblock_details/components/transactions';
import { useBlockDetails } from '@/screens/miniblock_details/hooks';
import useStyles from '@/screens/miniblock_details/styles';

const MiniBlockDetails = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('blocks');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('miniBlockDetails') ?? undefined}
        openGraph={{
          title: t('miniBlockDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('miniBlockDetails') ?? undefined} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
          <Transactions />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default MiniBlockDetails;
