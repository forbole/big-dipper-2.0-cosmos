import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  ProposalDetailsTallyQuery,
  useProposalDetailsTallyQuery,
} from '@/graphql/types/general_types';
import type { VotesGraphState } from '@/screens/proposal_details/components/votes_graph/types';
import { formatToken } from '@/utils/format_token';

const { votingPowerTokenUnit } = chainConfig();

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

  const handleSetState = useCallback(
    (stateChange: (prevState: VotesGraphState) => VotesGraphState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useProposalDetailsTallyQuery({
    variables: {
      proposalId: parseFloat((router?.query?.id as string) ?? '0'),
    },
    onCompleted: (data) => {
      handleSetState((prevState) => ({ ...prevState, ...foramtProposalTally(data) }));
    },
  });

  const foramtProposalTally = (data: ProposalDetailsTallyQuery) => {
    const quorumRaw = data.quorum?.[0]?.tallyParams?.quorum ?? '0';

    return {
      votes: {
        yes: formatToken(data?.proposalTallyResult?.[0]?.yes ?? '0', votingPowerTokenUnit),
        no: formatToken(data?.proposalTallyResult?.[0]?.no ?? '0', votingPowerTokenUnit),
        veto: formatToken(data?.proposalTallyResult?.[0]?.noWithVeto ?? '0', votingPowerTokenUnit),
        abstain: formatToken(data?.proposalTallyResult?.[0]?.abstain ?? '0', votingPowerTokenUnit),
      },
      bonded: formatToken(data?.stakingPool?.[0]?.bondedTokens ?? '0', votingPowerTokenUnit),
      quorum: Big(quorumRaw)?.times(100).toFixed(2),
    };
  };

  return {
    state,
  };
};
