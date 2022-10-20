import React from 'react';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  Epoch,
  StakeWeight,
  Blocks,
  Transactions,
  Price,
} from './components';

const Home = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Price className={classes.price} />
      <Epoch className={classes.epoch} />
      <StakeWeight className={classes.stakeWeight} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
