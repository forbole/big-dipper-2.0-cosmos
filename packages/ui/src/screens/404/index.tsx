import { FC } from 'react';
import Layout from '@/components/layout';
import NotFoundLogo from '@/components/not_found';
import useStyles from '@/screens/404/styles';

const NotFound: FC = () => {
  const { classes } = useStyles();
  return (
    <Layout className={classes.root}>
      <NotFoundLogo />
    </Layout>
  );
};

export default NotFound;
