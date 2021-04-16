import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Balance,
  Staking,
  // Transactions,
} from './components';
import { AccountProvider } from './contexts/account';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  return (
    <Layout navTitle={t('accountDetails')}>
      <AccountProvider>
        {({
          exists, loading,
        }) => {
          if (loading) {
            return <LinearLoading />;
          }

          if (!exists && !loading) {
            return <NotFound />;
          }

          return (
            <span className={classes.root}>
              <Balance className={classes.balance} />
              <Overview className={classes.overview} />
              <Staking className={classes.staking} />
              {/* <Transactions className={classes.transactions} /> */}
            </span>
          );
        }}
      </AccountProvider>
    </Layout>
  );
};

export default AccountDetails;
