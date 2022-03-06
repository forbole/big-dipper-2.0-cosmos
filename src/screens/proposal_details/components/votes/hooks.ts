import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useProposalDetailsVotesQuery, ProposalDetailsVotesQuery,
} from '@graphql/types';
import { toValidatorAddress } from '@utils/prefix_convert';
import { VoteState } from './types';

export const useVotes = (resetPagination:any) => {
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

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (data) => {
      handleSetState(formatVotes(data));
    },
  });

  const formatVotes = (data: ProposalDetailsVotesQuery) => {
    const validators = data.validatorStatuses.map((x) => {
      const selfDelegateAddress = R.pathOr('', ['validator', 'validatorInfo', 'selfDelegateAddress'], x);

      return ({
        selfDelegateAddress,
      });
    });

    const votedUserDictionary = {};
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

      if (votedUserDictionary[x.voterAddress]) {
        votedUserDictionary[x.voterAddress] = true;
      }
      return ({
        user: x.voterAddress,
        vote: x.option,
      });
    });

    // =====================================
    // Get data for active validators that did not vote
    // =====================================
    const validatorsNotVoted = validators.filter((x) => (
      !votedUserDictionary[x.selfDelegateAddress]
    )).map((y) => {
      return ({
        user: toValidatorAddress(y.selfDelegateAddress),
        vote: 'NOT_VOTED',
      });
    });

    return ({
      data: votes,
      validatorsNotVoted,
      voteCount: {
        yes,
        no,
        veto,
        abstain,
        didNotVote: validatorsNotVoted.length,
      },
    });
  };

  return {
    state,
    handleTabChange,
  };
};
