import BoxDetails from '@/components/box_details';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useParams } from '@/screens/params/hooks';
import { useStyles } from '@/screens/params/styles';
import {
  formatDistribution,
  formatGov,
  formatIscn,
  formatMinting,
  formatSlashing,
  formatStaking,
} from '@/screens/params/utils';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const Params = () => {
  const { t } = useTranslation('params');
  const classes = useStyles();
  const { state } = useParams();

  const staking = state.staking
    ? {
        title: t('staking'),
        details: formatStaking(state.staking, t),
      }
    : null;

  const slashing = state.slashing
    ? {
        title: t('slashing'),
        details: formatSlashing(state.slashing, t),
      }
    : null;

  const minting = state.minting
    ? {
        title: t('minting'),
        details: formatMinting(state.minting, t),
      }
    : null;

  const distribution = state.distribution
    ? {
        title: t('distribution'),
        details: formatDistribution(state.distribution, t),
      }
    : null;

  const gov = state.gov
    ? {
        title: t('gov'),
        details: formatGov(state.gov, t),
      }
    : null;

  const iscn = state.iscn
    ? {
        title: t('iscn'),
        details: formatIscn(state.iscn, t),
      }
    : null;

  return (
    <>
      <NextSeo
        title={t('params')}
        openGraph={{
          title: t('params'),
        }}
      />
      <Layout navTitle={t('params')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            {staking && <BoxDetails {...staking} />}
            {slashing && <BoxDetails {...slashing} />}
            {minting && <BoxDetails {...minting} />}
            {distribution && <BoxDetails {...distribution} />}
            {gov && <BoxDetails {...gov} />}
            {iscn && <BoxDetails {...iscn} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Params;
