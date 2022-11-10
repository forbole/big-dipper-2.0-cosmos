import React from 'react';
import Layout from 'ui/components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import { useStyles } from './styles';
import { DataBlocks, Blocks, Transactions, Epoch, Price, Staking } from './components';
import { useHome } from './hooks';

const Home = () => {
  const classes = useStyles();
  const { state } = useHome();
  return (
    <Layout>
      <LoadAndExist loading={state.loading} exists={state.exists}>
        <div className={classes.root}>
          <DataBlocks className={classes.dataBlocks} />
          <Price className={classes.price} price={state.price} />
          <Staking className={classes.staking} />
          <Epoch className={classes.epoch} />
          <Blocks className={classes.blocks} />
          <Transactions className={classes.transactions} />
        </div>
      </LoadAndExist>
    </Layout>
  );
};

export default Home;
