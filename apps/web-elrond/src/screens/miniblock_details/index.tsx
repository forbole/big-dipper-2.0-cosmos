import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Overview from '@/screens/miniblock_details/components/overview';
import Transactions from '@/screens/miniblock_details/components/transactions';
import { useBlockDetails } from '@/screens/miniblock_details/hooks';
import { useStyles } from '@/screens/miniblock_details/styles';

const MiniBlockDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('blocks');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('miniBlockDetails')}
        openGraph={{
          title: t('miniBlockDetails'),
        }}
      />
      <Layout navTitle={t('miniBlockDetails')} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
          <Transactions />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default MiniBlockDetails;
