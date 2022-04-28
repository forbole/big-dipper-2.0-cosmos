import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import {
  useProposalDetailsVotesQuery,
} from '@graphql/types';
import {
  ProposalDetailsVotesWeightedDocument,
} from '@graphql/proposal_details_votes_weighted';
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

  const fetchWeightedVotes = async () => {
    return axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        proposalId: R.pathOr('', ['query', 'id'], router),
      },
      query: ProposalDetailsVotesWeightedDocument,
    });
  };

  const mergeRegularVotesWithWeighted = (votesData: any, votesWeightedData: any) => {
    const mergedVotesData = {
      validatorStatuses: votesData.validatorStatuses,
      proposalVote: R.pathOr([], ['data', 'data', 'proposalVoteWeighted'], votesWeightedData),
    };

    const proposalVote = R.pathOr([], ['proposalVote'], votesData);

    proposalVote.map((x: any) => {
      x.weight = '100.00%';
    });

    mergedVotesData.proposalVote.map((x: any) => {
      x.weight = `${(parseFloat(x.weight) * 100.0).toFixed(2)}%`;
    });

    mergedVotesData.proposalVote = [...proposalVote, ...mergedVotesData.proposalVote];

    return mergedVotesData;
  };

  useProposalDetailsVotesQuery({
    variables: {
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (votesData) => {
      fetchWeightedVotes().then((votesWeightedData) => {
        const mergedVotesData = mergeRegularVotesWithWeighted(votesData, votesWeightedData);
        handleSetState(formatVotes(mergedVotesData));
      });
    },
  });

  const formatVotes = (data) => {
    const validatorDict = {};
    const validators = data.validatorStatuses.map((x) => {
      const selfDelegateAddress = R.pathOr('', ['validator', 'validatorInfo', 'selfDelegateAddress'], x);
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

      return ({
        user: x.voterAddress,
        vote: x.option,
        weight: x.weight,
      });
    });

    // =====================================
    // Get data for active validators that did not vote
    // =====================================
    const validatorsNotVoted = validators.filter((x) => {
      return validatorDict[x] === false;
    }).map((address) => {
      return ({
        user: toValidatorAddress(address),
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
