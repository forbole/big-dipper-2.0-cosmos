import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Layout from '@components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import Blocks from './components/blocks';
import Consensus from './components/consensus';
import Overview from './components/overview';
import Profile from './components/profile';
import Stats from './components/stats';
import { useNodeDetails } from './hooks';
import { useStyles } from './styles';

const NodeDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('nodes');
  const { state } = useNodeDetails();
  return (
    <>
      <NextSeo
        title={t('nodeDetails')}
        openGraph={{
          title: t('nodeDetails'),
        }}
      />
      <Layout navTitle={t('nodeDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <div className={classes.root}>
            <Profile
              className={classes.profile}
              profile={state.profile}
              showRating={state.overview.type.toLowerCase() === 'validator'}
            />
            <Overview className={classes.overview} overview={state.overview} />
            {state.overview.type.toLowerCase() === 'validator' && (
              <>
                <Stats className={classes.stats} stats={state.stats} />
                <Consensus className={classes.consensus} consensus={state.consensus} />
                <Blocks className={classes.blocks} blocks={state.blocks} />
              </>
            )}
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default NodeDetails;
