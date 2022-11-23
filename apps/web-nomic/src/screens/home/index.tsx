import React from 'react';
import Layout from '@/components/layout';
import Consensus from '@/screens/home/components/consensus';
import { useStyles } from '@/screens/home/styles';
import DataBlocks from '@/screens/home/components/data_blocks';
import Tokenomics from '@/screens/home/components/tokenomics';
import Blocks from '@/screens/home/components/blocks';
import Transactions from '@/screens/home/components/transactions';
import Hero from '@/screens/home/components/hero';

const Home = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Hero className={classes.hero} />
      <Tokenomics className={classes.tokenomics} />
      <Consensus className={classes.consensus} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
