import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { useStyles } from './styles';
import {
  Profile,
  VotingPower,
  Transactions,
  Staking,
  Blocks,
  ValidatorOverview,
} from './components';
import { useValidatorDetails } from './hooks';

const ProfileDetails = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useValidatorDetails();
  const {
    overview,
    delegations,
    redelegations,
    undelegations,
    desmosProfile,
    status,
  } = state;

  return (
    null
  );
};

export default ProfileDetails;
