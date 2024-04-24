interface Params {
  quorum: string;
  threshold: string;
  min_deposit: { denom: string; amount: string }[];
  voting_period: number;
  burn_vote_veto: boolean;
  veto_threshold: string;
  max_deposit_period: number;
  min_initial_deposit_ratio: string;
}

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

  constructor(payload: Params) {
    this.depositParams = {
      minDeposit: payload.min_deposit,
      maxDepositPeriod: payload.max_deposit_period,
    };
    this.tallyParams = {
      quorum: payload.quorum,
      threshold: payload.threshold,
      vetoThreshold: payload.veto_threshold,
    };
    this.votingParams = {
      votingPeriod: payload.voting_period,
    };
  }

  static fromJson(data: any): GovParams {
    return new GovParams(data.params); // Access 'params' object directly
  }
}

export default GovParams;
