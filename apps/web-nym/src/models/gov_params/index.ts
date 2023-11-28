import * as R from 'ramda';

class GovParams {
  public params: {
    quorum: string;
    threshold: string;
    minDeposit: Array<{
      denom: string;
      amount: string;
    }>;
    votingPeriod: number;
    burnVoteVeto: boolean;
    vetoThreshold: string;
    maxDepositPeriod: number;
    minInitialDepositRatio: string;
    burnProposalDepositPrevote: boolean;
  };

  constructor(payload: object) {
    this.params = R.pathOr(
      {
        quorum: '',
        threshold: '',
        minDeposit: [],
        votingPeriod: 0,
        burnVoteVeto: false,
        vetoThreshold: '',
        maxDepositPeriod: 0,
        minInitialDepositRatio: '',
        burnProposalDepositPrevote: false,
      },
      ['params'],
      payload
    );
  }

  static fromJson(data: object): GovParams {
    return {
      params: {
        quorum: R.pathOr('0', ['params', 'quorum'], data),
        threshold: R.pathOr('0', ['params', 'threshold'], data),
        minDeposit: R.pathOr<GovParams['params']['minDeposit']>(
          [],
          ['params', 'min_deposit'],
          data
        ).map((x) => ({
          denom: x.denom,
          amount: String(x.amount),
        })),
        votingPeriod: R.pathOr(0, ['params', 'voting_period'], data),
        burnVoteVeto: R.pathOr(false, ['params', 'burn_veto_vote'], data),
        vetoThreshold: R.pathOr('0', ['params', 'veto_threshold'], data),
        maxDepositPeriod: R.pathOr(0, ['params', 'max_deposit_period'], data),
        minInitialDepositRatio: R.pathOr('0', ['params', 'min_initial_deposit_ratio'], data),
        burnProposalDepositPrevote: R.pathOr(
          false,
          ['params', 'burn_proposal_deposit_prevote'],
          data
        ),
      },
    };
  }
}

export default GovParams;
