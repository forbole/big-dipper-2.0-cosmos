import { useRouter } from 'next/router';
import * as R from 'ramda';
import { SyntheticEvent, useCallback, useState } from 'react';
import {
  ProposalDetailsVotesQuery,
  useProposalDetailsVotesQuery,
} from '@/graphql/types/general_types';
import type { VoteState } from '@/screens/proposal_details/components/votes/types';
import { toValidatorAddress } from '@/utils/prefix_convert';

const formatVotes = (data: ProposalDetailsVotesQuery) => {
  const validatorDict: { [key: string]: unknown } = {};
  const validators = data.validatorStatuses.map((x) => {
    const selfDelegateAddress = x?.validator?.validatorInfo?.selfDelegateAddress ?? '';
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

export const useVotes = (resetPagination: () => void) => {
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

  const handleSetState = useCallback((stateChange: (prevState: VoteState) => VoteState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const handleTabChange = useCallback(
    (_event: SyntheticEvent<Element, globalThis.Event>, newValue: number) => {
      if (resetPagination) {
        resetPagination();
      }
      handleSetState((prevState) => ({ ...prevState, tab: newValue }));
    },
    [handleSetState, resetPagination]
  );

  useProposalDetailsVotesQuery({
    variables: {
      proposalId: parseFloat((router?.query?.id as string) ?? '0'),
    },
    onCompleted: (data) => {
      handleSetState((prevState) => ({ ...prevState, ...formatVotes(data) }));
    },
  });

  return {
    state,
    handleTabChange,
  };
};
