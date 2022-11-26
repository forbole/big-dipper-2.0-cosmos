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
        default: {
          quorum: '0',
          threshold: '0',
          vetoThreshold: '0',
        },
        certifierStakeVote: {
          quorum: '0',
          threshold: '0',
          vetoThreshold: '0',
        },
        certifierSecurityVote: {
          quorum: '0',
          threshold: '0',
          vetoThreshold: '0',
        },
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
        maxDepositPeriod: data?.depositParams?.max_deposit_period ?? 0,
      },
      tallyParams: {
        default: {
          quorum: data?.tallyParams?.default_tally?.quorum ?? '0',
          threshold: data?.tallyParams?.default_tally?.threshold ?? '0',
          vetoThreshold: data?.tallyParams?.default_tally?.veto_threshold ?? '0',
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
        votingPeriod: data?.votingParams?.voting_period ?? 0,
      },
    };
  }
}

export default GovParams;
