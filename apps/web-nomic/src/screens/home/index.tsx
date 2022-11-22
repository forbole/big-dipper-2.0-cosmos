import React from 'react';
import Layout from '@components/layout';
import Consensus from 'ui/screens/home/components/consensus';
import { useStyles } from './styles';
import DataBlocks from './components/data_blocks';
import Tokenomics from './components/tokenomics';
import Blocks from './components/blocks';
import Transactions from './components/transactions';
import Hero from './components/hero';

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
