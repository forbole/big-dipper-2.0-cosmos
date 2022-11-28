import * as R from 'ramda';

class GovParams {
  public depositParams: {
    minDeposit: Array<{
      denom: string;
      amount: string;
    }>;
    maxDepositPeriod: number;
  };

  public tallyParams: {
    quorum: string;
    threshold: string;
    vetoThreshold: string;
  };

  public votingParams: {
    votingPeriod: number;
  };

  constructor(payload: object) {
    this.depositParams = R.pathOr(
      {
        minDeposit: [],
        maxDepositPeriod: 0,
      },
      ['depositParams'],
      payload
    );
    this.tallyParams = R.pathOr(
      {
        quorum: '',
        threshold: '',
        vetoThreshold: '',
      },
      ['tallyParams'],
      payload
    );
    this.votingParams = R.pathOr(
      {
        votingPeriod: 0,
      },
      ['votingParams'],
      payload
    );
  }

  static fromJson(data: object): GovParams {
    return {
      depositParams: {
        minDeposit: R.pathOr<GovParams['depositParams']['minDeposit']>(
          [],
          ['depositParams', 'min_deposit'],
          data
        ).map((x) => ({
          denom: x.denom,
          amount: String(x.amount),
        })),
        maxDepositPeriod: R.pathOr(0, ['depositParams', 'max_deposit_period'], data),
      },
      tallyParams: {
        quorum: R.pathOr('0', ['depositParams', 'quorum'], data),
        threshold: R.pathOr('0', ['tallyParams', 'threshold'], data),
        vetoThreshold: R.pathOr('0', ['tallyParams', 'veto_threshold'], data),
      },
      votingParams: {
        votingPeriod: R.pathOr(0, ['votingParams', 'voting_period'], data),
      },
    };
  }
}

export default GovParams;
