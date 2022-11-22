import React from 'react';
import Layout from '@components/layout';
import { useStyles } from './styles';
import DataBlocks from './components/data_blocks';
import Blocks from './components/blocks';
import Transactions from './components/transactions';
import Epoch from './components/epoch';
import Price from './components/price';
import Staking from './components/staking';

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
