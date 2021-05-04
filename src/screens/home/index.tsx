import React from 'react';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  // OnlineVotingPower,
  // Consensus,
  // Tokenomics,
  // Blocks,
  // Transactions,
} from './components';

const Home = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      {/* <OnlineVotingPower className={classes.onlineVotingPower} />
      <Tokenomics className={classes.tokenomics} />
      <Consensus className={classes.consensus} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} /> */}
    </Layout>
  );
};

export default Home;
