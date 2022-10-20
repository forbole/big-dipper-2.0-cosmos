import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  Box,
  LoadAndExist,
} from '@components';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { BlocksList } from './components';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    state,
  } = useBlocks();

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.leader));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      leader: proposerProfiles[i],
    });
  });

  return (
    <>
      <NextSeo
        title={t('blocks')}
        openGraph={{
          title: t('blocks'),
        }}
      />
      <Layout
        navTitle={t('blocks')}
        className={classes.root}
      >
        <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <Box className={classes.box}>
            <BlocksList
              items={mergedDataWithProfiles}
            />
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Blocks;
