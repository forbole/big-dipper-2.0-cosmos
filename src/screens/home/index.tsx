import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { chainConfig } from '@configs';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  Consensus,
  Tokenomics,
  Blocks,
  Transactions,
  Hero,
} from './components';

const Home = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <>
      <NextSeo
        titleTemplate={`%s | ${t('common:homeTitleDescription')}`}
        title={chainConfig.title}
        openGraph={{
          title: `${chainConfig.title} | ${t('common:homeTitleDescription')}`,
        }}
      />
      <Layout className={classes.root}>
        <DataBlocks className={classes.dataBlocks} />
        <Hero className={classes.hero} />
        <Tokenomics className={classes.tokenomics} />
        <Consensus className={classes.consensus} />
        <Blocks className={classes.blocks} />
        <Transactions className={classes.transactions} />
      </Layout>
    </>
  );
};

export default Home;
