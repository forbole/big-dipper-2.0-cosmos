import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { formatDenom } from '@utils/format_denom';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import { convertMsgsToModels } from '@msg';
import {

} from '@graphql/types';
import { useDesmosProfile } from '@hooks';
import { chainConfig } from '@src/configs';
import {
  StakingParams,
  SlashingParams,
} from '@models';
import { AccountDetailState } from './types';

const defaultTokenUnit = {
  value: 0,
  denom: '',
  format: '',
};

const initialState: ProfileDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
  otherTokens: {
    count: 0,
    data: [],
  },
  balance: {
    available: defaultTokenUnit,
    delegate: defaultTokenUnit,
    unbonding: defaultTokenUnit,
    reward: defaultTokenUnit,
    commission: defaultTokenUnit,
    total: defaultTokenUnit,
  },
  delegations: {
    data: [],
    count: 0,
  },
  redelegations: {
    data: [],
    count: 0,
  },
  unbondings: {
    data: [],
    count: 0,
  },
  transactions: {
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  },
};
