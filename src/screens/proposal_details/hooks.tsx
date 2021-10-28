import {
  useState,
} from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useProposalDetailsQuery,
  ProposalDetailsQuery,
} from '@graphql/types';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@configs';
import {
  GovParams,
  StakingParams,
} from '@models';
import { ProposalState } from './types';

export const useProposalDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProposalState>({
    loading: true,
    exists: true,
    content: '',
    overview: {
      title: '',
      id: 0,
      description: '',
      status: '',
      submitTime: '',
      depositEndTime: '',
      votingStartTime: '',
      votingEndTime: '',
    },
    tally: {
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
      total: 0,
      quorum: 0,
      bondedTokens: 0,
      denom: chainConfig.primaryTokenUnit,
    },
    votes: {
      tab: 0,
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
      total: 0,
      notVoted: 0,
      data: [],
      notVotedData: [],
    },
    deposits: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // fetch data
  // ==========================
  useProposalDetailsQuery({
    variables: {
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (data) => {
      handleSetState({
        votes: formatProposalVotes(data),
        tally: formatProposalTally(data),
        ...formatProposalQuery(data),
      });
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
    // content
    // =========================
    stateChange.content = data.proposal[0].content;

    // =========================
    // overview
    // =========================
    const formatOverview = () => {
      const overview = {
        title: data.proposal[0].title,
        id: data.proposal[0].proposalId,
        description: data.proposal[0].description,
        status: data.proposal[0].status,
        submitTime: data.proposal[0].submitTime,
        depositEndTime: data.proposal[0].depositEndTime,
        votingStartTime: data.proposal[0].votingStartTime !== '0001-01-01T00:00:00' ? data.proposal[0].votingStartTime : null,
        votingEndTime: data.proposal[0].votingEndTime !== '0001-01-01T00:00:00' ? data.proposal[0].votingEndTime : null,
      };

      return overview;
    };

    stateChange.overview = formatOverview();

    // =========================
    // deposits
    // =========================
    const formatDeposits = () => {
      const deposits = data.proposal[0].proposalDeposits.map((x) => {
        const depositAmount = getDenom(x.amount);
        return ({
          user: x.depositorAddress,
          amount: formatDenom(depositAmount.amount, depositAmount.denom),
        });
      });
      return deposits;
    };
    stateChange.deposits = formatDeposits();

    return stateChange;
  };

  const formatProposalVotes = (data: ProposalDetailsQuery) => {
    let yes = 0;
    let no = 0;
    let abstain = 0;
    let veto = 0;

    const validators = data.validatorStatuses.map((x) => {
      const selfDelegateAddress = R.pathOr('', ['validator', 'validatorInfo', 'selfDelegateAddress'], x);

      return ({
        selfDelegateAddress,
        operatorAddress: x.validatorAddress,
      });
    });

    const votedUserDictionary = {};
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

      votedUserDictionary[x.voterAddress] = true;
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
        user: y.operatorAddress,
        vote: 'NOT_VOTED',
      });
    });

    return {
      data: votes,
      yes,
      no,
      abstain,
      veto,
      total: veto + abstain + no + yes,
      notVotedData: validatorsNotVoted,
      notVoted: validatorsNotVoted.length,
    };
  };

  const formatProposalTally = (data: ProposalDetailsQuery) => {
    if (!data) {
      return state.tally;
    }
    const { denom } = state.tally;

    const yes = formatDenom(R.pathOr(0, ['proposalTallyResult', 0, 'yes'], data), denom).value;
    const no = formatDenom(R.pathOr(0, ['proposalTallyResult', 0, 'no'], data), denom).value;
    const veto = formatDenom(R.pathOr(0, ['proposalTallyResult', 0, 'noWithVeto'], data), denom).value;
    const abstain = formatDenom(R.pathOr(0, ['proposalTallyResult', 0, 'abstain'], data), denom).value;

    const govParams = GovParams.fromJson(R.pathOr({}, ['govParams', 0], data));
    const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
    const percent = numeral(numeral(govParams.tallyParams.quorum).format('0.[00]')).value();

    return ({
      yes,
      no,
      abstain,
      veto,
      total: yes + no + abstain + veto,
      denom: stakingParams.bondDenom,
      quorum: percent,
      bondedTokens: formatDenom(
        R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data),
        stakingParams.bondDenom,
      ).value,
    });
  };

  const handleTabChange = (_event: any, newValue: number) => {
    handleSetState({
      votes: {
        tab: newValue,
      },
    });
  };

  return {
    state,
    handleTabChange,
  };
};
