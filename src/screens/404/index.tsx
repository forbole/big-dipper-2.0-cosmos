import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound as NotFoundLogo,
} from '@components';
import { useStyles } from './styles';

const NotFound = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <NotFoundLogo />
    </Layout>
  );
};

export default NotFound;
