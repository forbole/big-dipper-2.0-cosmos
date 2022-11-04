import React from 'react';
import Layout from '@components/layout';
import { useStyles } from './styles';
import {
  DataBlocks,
  Blocks,
  Transactions,
  Epoch,
  Price,
  Staking,
} from './components';

const Home = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Price className={classes.price} />
      <Staking className={classes.staking} />
      <Epoch className={classes.epoch} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
