import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
} from '@components';
import {
  Overview,
  Transactions,
  // Signatures,
} from './components';
import { useStyles } from './styles';
import { BlockProvider } from './contexts/block';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <Layout navTitle={t('blockDetails')}>
      <BlockProvider>
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
              <Overview />
              {/* <Signatures className={classes.signatures} /> */}
              <Transactions />
            </span>
          );
        }}
      </BlockProvider>
    </Layout>
  );
};

export default BlockDetails;
