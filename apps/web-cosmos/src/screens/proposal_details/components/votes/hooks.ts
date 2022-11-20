import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useProposalDetailsVotesQuery,
  ProposalDetailsVotesQuery,
} from '@graphql/types/general_types';
import { toValidatorAddress } from 'ui/utils/prefix_convert';
import type { VoteState } from './types';

export const useVotes = (resetPagination: any) => {
  const router = useRouter();
  const [state, setState] = useState<VoteState>({
    data: [],
    validatorsNotVoted: [],
    voteCount: {
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
      didNotVote: 0,
    },
    tab: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  const handleTabChange = (_event: any, newValue: number) => {
    if (resetPagination) {
      resetPagination();
    }
    handleSetState({
      tab: newValue,
    });
  };

  useProposalDetailsVotesQuery({
    variables: {
      proposalId: parseInt(R.pathOr('', ['query', 'id'], router), 10),
    },
    onCompleted: (data) => {
      handleSetState(formatVotes(data));
    },
  });

  const formatVotes = (data: ProposalDetailsVotesQuery) => {
    const validatorDict: { [key: string]: any } = {};
    const validators = data.validatorStatuses.map((x) => {
      const selfDelegateAddress = R.pathOr(
        '',
        ['validator', 'validatorInfo', 'selfDelegateAddress'],
        x
      );
      validatorDict[selfDelegateAddress] = false;
      return selfDelegateAddress;
    });

    let yes = 0;
    let no = 0;
    let abstain = 0;
    let veto = 0;

    const votes = data.proposalVote.map((x) => {
      if (x.option === 'VOTE_OPTION_YES') {
        yes += 1;
      }
      if (x.option === 'VOTE_OPTION_ABSTAIN') {
        abstain += 1;
      }
      if (x.option === 'VOTE_OPTION_NO') {
        no += 1;
      }
      if (x.option === 'VOTE_OPTION_NO_WITH_VETO') {
        veto += 1;
      }
      if (validatorDict[x.voterAddress] === false) {
        validatorDict[x.voterAddress] = true;
      }

      return {
        user: x.voterAddress,
        vote: x.option,
      };
    });

    // =====================================
    // Get data for active validators that did not vote
    // =====================================
    const validatorsNotVoted = validators
      .filter((x) => validatorDict[x] === false)
      .map((address) => ({
          user: toValidatorAddress(address),
          vote: 'NOT_VOTED',
        }));

    return {
      data: votes,
      validatorsNotVoted,
      voteCount: {
        yes,
        no,
        veto,
        abstain,
        didNotVote: validatorsNotVoted.length,
      },
    };
  };

  return {
    state,
    handleTabChange,
  };
};
