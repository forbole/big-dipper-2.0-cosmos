import { useState } from 'react';
import numeral from 'numeral';
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
    votes: {
      yes: defaultTokenUnit,
      no: defaultTokenUnit,
      abstain: defaultTokenUnit,
      veto: defaultTokenUnit,
    },
    bonded: defaultTokenUnit,
    quorum: 0,
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
    const quorumRaw = R.pathOr('0', [0, 'tallyParams', 'quorum'], data.quorum);

    return ({
      votes: {
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
      },
      bonded: formatToken(
        R.pathOr('0', ['stakingPool', 0, 'bondedTokens'], data),
        chainConfig.votingPowerTokenUnit,
      ),
      quorum: numeral(numeral(quorumRaw).format('0.[00]')).value() * 100,
    });
  };

  return {
    state,
  };
};
