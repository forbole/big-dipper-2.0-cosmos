import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import React from 'react';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Blocks from '@/screens/node_details/components/blocks';
import Consensus from '@/screens/node_details/components/consensus';
import Overview from '@/screens/node_details/components/overview';
import Profile from '@/screens/node_details/components/profile';
import Stats from '@/screens/node_details/components/stats';
import { useNodeDetails } from '@/screens/node_details/hooks';
import useStyles from '@/screens/node_details/styles';

const NodeDetails = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('nodes');
  const { state } = useNodeDetails();
  return (
    <>
      <NextSeo
        title={t('nodeDetails') ?? undefined}
        openGraph={{
          title: t('nodeDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('nodeDetails') ?? undefined}>
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
