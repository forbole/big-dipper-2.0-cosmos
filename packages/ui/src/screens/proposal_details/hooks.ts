import { useCallback, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { useProposalDetailsQuery, ProposalDetailsQuery } from '@/graphql/types/general_types';
import type { ProposalState } from '@/screens/proposal_details/types';

export const useProposalDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProposalState>({
    loading: true,
    exists: true,
    overview: {
      proposer: '',
      content: '',
      title: '',
      id: 0,
      description: '',
      status: '',
      submitTime: '',
      depositEndTime: '',
      votingStartTime: '',
      votingEndTime: '',
    },
  });

  const handleSetState = useCallback((stateChange: Partial<ProposalState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ==========================
  // fetch data
  // ==========================
  useProposalDetailsQuery({
    variables: {
      proposalId: parseInt(R.pathOr('', ['query', 'id'], router), 10),
    },
    onCompleted: (data) => {
      handleSetState(formatProposalQuery(data));
    },
  });

  // ==========================
  // parsers
  // ==========================

  const formatProposalQuery = (data: ProposalDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.proposal.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // =========================
    // overview
    // =========================
    const formatOverview = () => {
      const DEFAULT_TIME = '0001-01-01T00:00:00';
      let votingStartTime = R.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingStartTime'], data);
      votingStartTime = votingStartTime === DEFAULT_TIME ? '' : votingStartTime;
      let votingEndTime = R.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingEndTime'], data);
      votingEndTime = votingEndTime === DEFAULT_TIME ? '' : votingEndTime;

      const overview = {
        proposer: R.pathOr('', ['proposal', 0, 'proposer'], data),
        content: R.pathOr('', ['proposal', 0, 'content'], data),
        title: R.pathOr('', ['proposal', 0, 'title'], data),
        id: R.pathOr('', ['proposal', 0, 'proposalId'], data),
        description: R.pathOr('', ['proposal', 0, 'description'], data),
        status: R.pathOr('', ['proposal', 0, 'status'], data),
        submitTime: R.pathOr('', ['proposal', 0, 'submitTime'], data),
        depositEndTime: R.pathOr('', ['proposal', 0, 'depositEndTime'], data),
        votingStartTime,
        votingEndTime,
      };

      return overview;
    };

    stateChange.overview = formatOverview();

    return stateChange;
  };

  return {
    state,
  };
};
