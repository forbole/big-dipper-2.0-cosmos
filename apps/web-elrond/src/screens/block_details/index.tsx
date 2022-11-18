import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import Overview from './components/overview';
import Miniblocks from './components/miniblocks';
import Consensus from './components/consensus';
import { useBlockDetails } from './hooks';
import { useStyles } from './styles';

const BlockDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('blocks');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('blockDetails')}
        openGraph={{
          title: t('blockDetails'),
        }}
      />
      <Layout navTitle={t('blockDetails')} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
          {!!state.miniBlocks.length && <Miniblocks miniBlocks={state.miniBlocks} />}
          <Consensus className={classes.consensus} consensus={state.consensus} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
