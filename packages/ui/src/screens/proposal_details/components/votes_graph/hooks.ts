import { useCallback, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsTallyQuery,
  ProposalDetailsTallyQuery,
} from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import chainConfig from '@/chainConfig';
import Big from 'big.js';
import type { VotesGraphState } from '@/screens/proposal_details/components/votes_graph/types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useVotesGraph = () => {
  const router = useRouter();
  const [state, setState] = useState<VotesGraphState>({
    votes: {
      yes: defaultTokenUnit,
      no: defaultTokenUnit,
      abstain: defaultTokenUnit,
      veto: defaultTokenUnit,
    },
    bonded: defaultTokenUnit,
    quorum: '0',
  });

  const handleSetState = useCallback((stateChange: Partial<VotesGraphState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useProposalDetailsTallyQuery({
    variables: {
      proposalId: parseInt((router?.query?.id as string) ?? '', 10),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalTally(data));
    },
  });

  const foramtProposalTally = (data: ProposalDetailsTallyQuery) => {
    const quorumRaw = data.quorum?.[0]?.tallyParams?.quorum ?? '0';

    return {
      votes: {
        yes: formatToken(
          data?.proposalTallyResult?.[0]?.yes ?? '0',
          chainConfig.votingPowerTokenUnit
        ),
        no: formatToken(
          data?.proposalTallyResult?.[0]?.no ?? '0',
          chainConfig.votingPowerTokenUnit
        ),
        veto: formatToken(
          data?.proposalTallyResult?.[0]?.noWithVeto ?? '0',
          chainConfig.votingPowerTokenUnit
        ),
        abstain: formatToken(
          data?.proposalTallyResult?.[0]?.abstain ?? '0',
          chainConfig.votingPowerTokenUnit
        ),
      },
      bonded: formatToken(
        data?.stakingPool?.[0]?.bondedTokens ?? '0',
        chainConfig.votingPowerTokenUnit
      ),
      quorum: Big(quorumRaw).times(100).toFixed(2),
    };
  };

  return {
    state,
  };
};
