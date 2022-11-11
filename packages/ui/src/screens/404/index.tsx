import React from 'react';
import Layout from 'ui/components/layout';
import NotFoundLogo from 'ui/components/not_found';
import { useStyles } from './styles';

const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <NotFoundLogo />
    </Layout>
  );
};

export default NotFound;
