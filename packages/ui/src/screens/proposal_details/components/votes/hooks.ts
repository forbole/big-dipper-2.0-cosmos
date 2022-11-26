import { ComponentProps, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useProposalDetailsVotesQuery,
  ProposalDetailsVotesQuery,
} from '@/graphql/types/general_types';
import { toValidatorAddress } from '@/utils/prefix_convert';
import type { VoteState } from '@/screens/proposal_details/components/votes/types';
import Tabs from '@material-ui/core/Tabs';

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

  const handleSetState = useCallback((stateChange: Partial<VoteState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = (_event, newValue) => {
    if (resetPagination) {
      resetPagination();
    }
    handleSetState({
      tab: newValue,
    });
  };

  useProposalDetailsVotesQuery({
    variables: {
      proposalId: parseInt((router?.query?.id as string) ?? '', 10),
    },
    onCompleted: (data) => {
      handleSetState(formatVotes(data));
    },
  });

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

  return {
    state,
    handleTabChange,
  };
};
