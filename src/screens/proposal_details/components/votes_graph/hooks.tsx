import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsTallyQuery, ProposalDetailsTallyQuery,
} from '@graphql/types';
import { formatToken } from '@utils/format_token';
import { chainConfig } from '@configs';
import { VotesGraphState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useVotesGraph = () => {
  const router = useRouter();
  const [state, setState] = useState<VotesGraphState>({
    yes: defaultTokenUnit,
    no: defaultTokenUnit,
    abstain: defaultTokenUnit,
    veto: defaultTokenUnit,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useProposalDetailsTallyQuery({
    variables: {
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (data) => {
      handleSetState(foramtProposalTally(data));
    },
  });

  const foramtProposalTally = (data: ProposalDetailsTallyQuery) => {
    return ({
      yes: formatToken(
        R.pathOr('0', ['proposalTallyResult', 0, 'yes'], data),
        chainConfig.votingPowerTokenUnit,
      ),
      no: formatToken(
        R.pathOr('0', ['proposalTallyResult', 0, 'no'], data),
        chainConfig.votingPowerTokenUnit,
      ),
      veto: formatToken(
        R.pathOr('0', ['proposalTallyResult', 0, 'noWithVeto'], data),
        chainConfig.votingPowerTokenUnit,
      ),
      abstain: formatToken(
        R.pathOr('0', ['proposalTallyResult', 0, 'abstain'], data),
        chainConfig.votingPowerTokenUnit,
      ),
    });
  };

  return {
    state,
  };
};
