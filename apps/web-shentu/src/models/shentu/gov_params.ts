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
    default: {
      quorum: string;
      threshold: string;
      vetoThreshold: string;
    };
    certifierStakeVote: {
      quorum: string;
      threshold: string;
      vetoThreshold: string;
    };
    certifierSecurityVote: {
      quorum: string;
      threshold: string;
      vetoThreshold: string;
    };
  };
  public votingParams: {
    votingPeriod: number;
  };

  constructor(payload: any) {
    this.depositParams = payload.depositParams;
    this.tallyParams = payload.tallyParams;
    this.votingParams = payload.votingParams;
  }

  static fromJson(data: any): GovParams {
    return {
      depositParams: {
        minDeposit: R.pathOr<Array<{ denom: string; amount: number }>>(
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
        default: {
          quorum: R.pathOr('0', ['tallyParams', 'default_tally', 'quorum'], data),
          threshold: R.pathOr('0', ['tallyParams', 'default_tally', 'threshold'], data),
          vetoThreshold: R.pathOr('0', ['tallyParams', 'default_tally', 'veto_threshold'], data),
        },
        certifierStakeVote: {
          quorum: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_stake_vote_tally', 'quorum'],
            data
          ),
          threshold: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_stake_vote_tally', 'threshold'],
            data
          ),
          vetoThreshold: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_stake_vote_tally', 'veto_threshold'],
            data
          ),
        },
        certifierSecurityVote: {
          quorum: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_security_vote_tally', 'quorum'],
            data
          ),
          threshold: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_security_vote_tally', 'threshold'],
            data
          ),
          vetoThreshold: R.pathOr(
            '0',
            ['tallyParams', 'certifier_update_security_vote_tally', 'veto_threshold'],
            data
          ),
        },
      },
      votingParams: {
        votingPeriod: R.pathOr(0, ['votingParams', 'voting_period'], data),
      },
    };
  }
}

export default GovParams;
