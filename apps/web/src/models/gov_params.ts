import * as R from 'ramda';

class GovParams {
  public depositParams: {
    minDeposit: {
      denom: string;
      amount: string;
    }[];
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

  constructor(payload: any) {
    this.depositParams = payload.depositParams;
    this.tallyParams = payload.tallyParams;
    this.votingParams = payload.votingParams;
  }

  static fromJson(data: any) {
    return new GovParams({
      depositParams: {
        minDeposit: R.pathOr([], ['depositParams', 'min_deposit'], data).map((x) => ({
          denom: x.denom,
          amount: x.amount,
        })),
        maxDepositPeriod: R.pathOr(0, ['depositParams', 'max_deposit_period'], data),
      },
      tallyParams: {
        quorum: R.pathOr('0', ['tallyParams', 'quorum'], data),
        threshold: R.pathOr('0', ['tallyParams', 'threshold'], data),
        vetoThreshold: R.pathOr('0', ['tallyParams', 'veto_threshold'], data),
      },
      votingParams: {
        votingPeriod: R.pathOr(0, ['votingParams', 'voting_period'], data),
      },
    });
  }
}

export default GovParams;
