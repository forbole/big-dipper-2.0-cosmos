import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsDepositsQuery,
  ProposalDetailsDepositsQuery,
} from '@graphql/types/general_types';
import { chainConfig } from 'ui/src';
import { formatToken } from '@utils/format_token';
import { DepositState } from './types';

export const useDeposits = () => {
  const router = useRouter();
  const [state, setState] = useState<DepositState>({
    data: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useProposalDetailsDepositsQuery({
    variables: {
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalDeposits(data));
    },
  });

  const foramtProposalDeposits = (data: ProposalDetailsDepositsQuery) => {
    const format = data.proposalDeposit.map((x) => {
      return ({
        amount: formatToken(
          R.pathOr('0', ['amount', 0, 'amount'], x),
          R.pathOr(chainConfig.primaryTokenUnit, ['amount', 0, 'denom'], x),
        ),
        user: R.pathOr('', ['depositorAddress'], x),
        timestamp: R.pathOr('', ['block', 'timestamp'], x),
      });
    });

    return {
      data: format,
    };
  };

  return {
    state,
  };
};
