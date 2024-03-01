import Layout from '@/components/layout';
import Blocks from '@/screens/home/components/blocks';
import DataBlocks from '@/screens/home/components/data_blocks';
import Transactions from '@/screens/home/components/transactions';
import useStyles from '@/screens/home/styles';

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
