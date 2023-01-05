import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Overview from '@/screens/nft_details/components/overview';
import { useBlockDetails } from '@/screens/nft_details/hooks';
import useStyles from '@/screens/nft_details/styles';

const BlockDetails = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('nfts');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('nftDetails')}
        openGraph={{
          title: t('nftDetails'),
        }}
      />
      <Layout navTitle={t('nftDetails')} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
