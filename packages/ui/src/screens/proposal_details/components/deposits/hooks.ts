import { useCallback, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsDepositsQuery,
  ProposalDetailsDepositsQuery,
} from '@/graphql/types/general_types';
import chainConfig from '@/chainConfig';
import { formatToken } from '@/utils/format_token';
import type { DepositState } from '@/screens/proposal_details/components/deposits/types';

export const useDeposits = () => {
  const router = useRouter();
  const [state, setState] = useState<DepositState>({
    data: [],
  });

  const handleSetState = useCallback((stateChange: Partial<DepositState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useProposalDetailsDepositsQuery({
    variables: {
      proposalId: parseInt((router?.query?.id as string) ?? '', 10),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalDeposits(data));
    },
  });

  const foramtProposalDeposits = (data: ProposalDetailsDepositsQuery) => {
    const format = data.proposalDeposit.map((x) => ({
      amount: formatToken(
        x?.amount?.[0]?.amount ?? '0',
        x?.amount?.[0]?.denom ?? chainConfig.primaryTokenUnit
      ),
      user: x?.depositorAddress ?? '',
      timestamp: x?.block?.timestamp ?? '',
    }));

    return {
      data: format,
    };
  };

  return {
    state,
  };
};
