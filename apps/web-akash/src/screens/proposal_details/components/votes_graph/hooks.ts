import { useCallback, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsTallyQuery,
  ProposalDetailsTallyQuery,
} from '@graphql/types/general_types';
import { formatToken } from 'ui/utils/format_token';
import chainConfig from 'ui/chainConfig';
import Big from 'big.js';
import type { VotesGraphState } from './types';

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
    quorum: 0,
  });

  const handleSetState = useCallback((stateChange: Partial<VotesGraphState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useProposalDetailsTallyQuery({
    variables: {
      proposalId: parseInt(R.pathOr('', ['query', 'id'], router), 10),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalTally(data));
    },
  });

  const foramtProposalTally = (data: ProposalDetailsTallyQuery) => {
    const quorumRaw = R.pathOr('0', [0, 'tallyParams', 'quorum'], data.quorum);

    return {
      votes: {
        yes: formatToken(
          R.pathOr('0', ['proposalTallyResult', 0, 'yes'], data),
          chainConfig.votingPowerTokenUnit
        ),
        no: formatToken(
          R.pathOr('0', ['proposalTallyResult', 0, 'no'], data),
          chainConfig.votingPowerTokenUnit
        ),
        veto: formatToken(
          R.pathOr('0', ['proposalTallyResult', 0, 'noWithVeto'], data),
          chainConfig.votingPowerTokenUnit
        ),
        abstain: formatToken(
          R.pathOr('0', ['proposalTallyResult', 0, 'abstain'], data),
          chainConfig.votingPowerTokenUnit
        ),
      },
      bonded: formatToken(
        R.pathOr('0', ['stakingPool', 0, 'bondedTokens'], data),
        chainConfig.votingPowerTokenUnit
      ),
      quorum: Big(quorumRaw).times(100).toFixed(2),
    };
  };

  return {
    state,
  };
};
