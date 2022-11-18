import React from 'react';
import Consensus from 'ui/screens/home/components/consensus';
import Layout from '@components/layout';
import Blocks from './components/blocks';
import DataBlocks from './components/data_blocks';
import Hero from './components/hero';
import Tokenomics from './components/tokenomics';
import Transactions from './components/transactions';
import { useStyles } from './styles';

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
