import Layout from '@/components/layout';
import Blocks from '@/screens/home/components/blocks';
import Consensus from '@/screens/home/components/consensus';
import DataBlocks from '@/screens/home/components/data_blocks';
import Hero from '@/screens/home/components/hero';
import Tokenomics from '@/screens/home/components/tokenomics';
import Transactions from '@/screens/home/components/transactions';
import MainInfo from '@/screens/home/components/main_info';
import useStyles from '@/screens/home/styles';

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout className={classes.root}>
      <MainInfo className={classes.mainInfo} />
      <DataBlocks className={classes.dataBlocks} />
      <Hero className={classes.hero} />
      <Tokenomics className={classes.tokenomics} />
      <Consensus className={classes.consensus} />
      <div className={classes.bottom}>
        <Blocks className="blocks" />
        <Transactions className="transactions" />
      </div>
    </Layout>
  );
};

export default Home;
