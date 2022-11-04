import React from 'react';
import Layout from '@components/layout';
import { useStyles } from './styles';
import {
  DataBlocks,
  LatestBlocks,
  LatestTransactions,
} from './components';

const Home = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <LatestBlocks className={classes.blocks} />
      <LatestTransactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
