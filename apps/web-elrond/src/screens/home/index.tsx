import React from 'react';
import Layout from '@/components/layout';
import { useStyles } from '@/screens/home/styles';
import DataBlocks from '@/screens/home/components/data_blocks';
import Blocks from '@/screens/home/components/blocks';
import Transactions from '@/screens/home/components/transactions';
import Epoch from '@/screens/home/components/epoch';
import Price from '@/screens/home/components/price';
import Staking from '@/screens/home/components/staking';

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
