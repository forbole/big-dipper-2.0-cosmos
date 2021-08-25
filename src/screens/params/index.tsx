import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  BoxDetails,
} from '@components';
import { useStyles } from './styles';
import { useParams } from './hooks';
import {
  formatStaking,
  formatSlashing,
  formatMinting,
  formatDistribution,
  formatGov,
} from './utils';

const Params = () => {
  const { t } = useTranslation('params');
  const classes = useStyles();
  const { state } = useParams();

  const staking = state.staking ? {
    title: t('staking'),
    details: formatStaking(state.staking, t),
  } : null;

  const slashing = state.slashing ? {
    title: t('slashing'),
    details: formatSlashing(state.slashing, t),
  } : null;

  const minting = state.minting ? {
    title: t('minting'),
    details: formatMinting(state.minting, t),
  } : null;

  const distribution = state.distribution ? {
    title: t('distribution'),
    details: formatDistribution(state.distribution, t),
  } : null;

  const gov = state.gov ? {
    title: t('gov'),
    details: formatGov(state.gov, t),
  } : null;

  return (
    <>
      <NextSeo
        title={t('params')}
        openGraph={{
          title: t('params'),
        }}
      />
      <Layout
        navTitle={t('params')}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <span className={classes.root}>
            {staking && (
            <BoxDetails {...staking} />
            )}
            {
            slashing && (
              <BoxDetails {...slashing} />
            )
          }
            {minting && (
            <BoxDetails {...minting} />
            )}
            {distribution && (
            <BoxDetails {...distribution} />
            )}
            {gov && (
            <BoxDetails {...gov} />
            )}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Params;
