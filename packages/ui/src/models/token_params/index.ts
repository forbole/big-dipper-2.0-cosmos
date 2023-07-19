import * as R from 'ramda';

class TokenParams {
  public nftMintFee: {
    denom: string;
    amount: string;
  };

  public ftIssueFee: {
    denom: string;
    amount: string;
  };

  public tokenUpgradeGracePeriod: number | undefined;

  public tokenUpgradeDecisionTimeout: string | undefined;

  constructor(payload: object) {
    this.nftMintFee = R.pathOr(
      {
        denom: '',
        amount: '0',
      },
      ['mint_fee'],
      payload
    );
    this.ftIssueFee = R.pathOr(
      {
        denom: '',
        amount: '0',
      },
      ['issue_fee'],
      payload
    );
    this.tokenUpgradeGracePeriod = R.pathOr(undefined, ['tokenUpgradeGracePeriod'], payload);
    this.tokenUpgradeDecisionTimeout = R.pathOr(
      undefined,
      ['tokenUpgradeDecisionTimeout'],
      payload
    );
  }

  static fromJson(data: object): TokenParams {
    return {
      nftMintFee: R.pathOr({ denom: '', amount: '0' }, ['mint_fee'], data),
      ftIssueFee: R.pathOr({ denom: '', amount: '0' }, ['issue_fee'], data),
      tokenUpgradeGracePeriod: R.pathOr(undefined, ['token_upgrade_grace_period'], data),
      tokenUpgradeDecisionTimeout: R.pathOr(undefined, ['token_upgrade_decision_timeout'], data),
    };
  }
}

export default TokenParams;
