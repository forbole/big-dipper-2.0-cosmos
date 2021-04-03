import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
} from '@components';
import {
  Overview,
  Transactions,
  Signatures,
} from './components';
import { useStyles } from './styles';
import { BlockProvider } from './contexts/block';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <Layout navTitle={t('blockDetails')} className={classes.root}>
      <BlockProvider>
        {({
          exists, loading,
        }) => {
          if (loading) {
            return (
              <div>loading</div>
            );
          }

          if (!exists && !loading) {
            return <NotFound />;
          }

          return (
            <>
              <Overview />
              <Signatures className={classes.signatures} />
              <Transactions />
            </>
          );
        }}
      </BlockProvider>
    </Layout>
  );
};

export default BlockDetails;
