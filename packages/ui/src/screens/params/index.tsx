import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import BoxDetails from '@/components/box_details';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useParams } from '@/screens/params/hooks';
import useStyles from '@/screens/params/styles';
import { Typography } from '@mui/material';
import {
  formatDistribution,
  formatGov,
  formatMinting,
  formatSlashing,
  formatStaking,
  formatFeeModel,
  formatToken,
} from '@/screens/params/utils';

const Params = () => {
  const { t } = useTranslation('params');
  const { classes } = useStyles();
  const { state } = useParams();

  const staking = state.staking
    ? {
        title: t('staking') ?? undefined,
        details: formatStaking(state.staking, t),
      }
    : null;

  const slashing = state.slashing
    ? {
        title: t('slashing') ?? undefined,
        details: formatSlashing(state.slashing, t),
      }
    : null;

  const minting = state.minting
    ? {
        title: t('minting') ?? undefined,
        details: formatMinting(state.minting, t),
      }
    : null;

  const distribution = state.distribution
    ? {
        title: t('distribution') ?? undefined,
        details: formatDistribution(state.distribution, t),
      }
    : null;

  const gov = state.gov
    ? {
        title: t('gov') ?? undefined,
        details: formatGov(state.gov, t),
      }
    : null;

  const feeModel = state.feeModel
    ? {
        title: t('feeModel') ?? undefined,
        details: formatFeeModel(state.feeModel, t),
      }
    : null;

  const token = state.token
    ? {
        title: t('token') ?? undefined,
        details: formatToken(state.token, t),
      }
    : null;

  return (
    <>
      <NextSeo
        title={t('params') ?? undefined}
        openGraph={{
          title: t('params') ?? undefined,
        }}
      />
      <Layout navTitle={t('params') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Typography variant="h1" className={classes.header}>
            {t('params')}
          </Typography>
          <span className={classes.root}>
            {staking && <BoxDetails {...staking} />}
            {slashing && <BoxDetails {...slashing} />}
            {minting && <BoxDetails {...minting} />}
            {distribution && <BoxDetails {...distribution} />}
            {gov && <BoxDetails {...gov} />}
            {feeModel && <BoxDetails {...feeModel} />}
            {token && <BoxDetails {...token} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Params;
