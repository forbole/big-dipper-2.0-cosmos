import React from 'react';
import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useValidatorDetails } from '@/screens/validator_details/hooks';
import Profile from '@/screens/validator_details/components/profile';
import Stake from '@/screens/validator_details/components/stake';
import Overview from '@/screens/validator_details/components/overview';
import ContractDetails from '@/screens/validator_details/components/contract_details';
import Nodes from '@/screens/validator_details/components/nodes';
import Transactions from '@/screens/validator_details/components/transactions';
import useStyles from '@/screens/validator_details/styles';

const ValidatorDetails = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('validators');
  const { state } = useValidatorDetails();
  return (
    <>
      <NextSeo
        title={t('validatorDetails') ?? undefined}
        openGraph={{
          title: t('validatorDetails') ?? undefined,
        }}
      />
      <Layout navTitle={t('validatorDetails') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <div className={classes.root}>
            <Profile className={classes.profile} profile={state.profile} />
            <Stake className={classes.stake} stake={state.stake} />
            <Overview className={classes.overview} overview={state.overview} />
            {state.isProvider && state.contract && (
              <ContractDetails className={classes.contractDetails} contract={state.contract} />
            )}
            <Nodes className={classes.nodes} />
            {state.isProvider && state.contract?.address && (
              <Transactions provider={state.contract?.address} className={classes.transaction} />
            )}
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
