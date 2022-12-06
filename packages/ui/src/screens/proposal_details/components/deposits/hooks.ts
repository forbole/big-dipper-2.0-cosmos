import chainConfig from '@/chainConfig';
import {
  ProposalDetailsDepositsQuery,
  useProposalDetailsDepositsQuery,
} from '@/graphql/types/general_types';
import type { DepositState } from '@/screens/proposal_details/components/deposits/types';
import { formatToken } from '@/utils/format_token';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

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
      proposalId: parseFloat((router?.query?.id as string) ?? '0'),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalDeposits(data));
    },
  });

  const foramtProposalDeposits = (data: ProposalDetailsDepositsQuery) => {
    const format = data.proposalDeposit.map((x) => ({
      amount: formatToken(
        x?.amount?.[0]?.amount ?? '0',
        x?.amount?.[0]?.denom ?? chainConfig().primaryTokenUnit
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
