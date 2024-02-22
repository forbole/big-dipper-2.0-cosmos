import Layout from '@/components/layout';
import Blocks from '@/screens/home/components/blocks';
import DataBlocks from '@/screens/home/components/data_blocks';
import Hero from '@/screens/home/components/hero';
import Tokenomics from '@/screens/home/components/tokenomics';
import useStyles from '@/screens/home/styles';

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Hero className={classes.hero} />
      <Tokenomics className={classes.tokenomics} />
      <Blocks className={classes.blocks} />
      {/* @TODO : enable back when wss is available */}
      {/*<Transactions className={classes.transactions} />*/}
    </Layout>
  );
};

export default Home;
