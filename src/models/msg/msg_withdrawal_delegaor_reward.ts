import * as R from 'ramda';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils/format_denom';

class MsgWithdrawDelegatorReward {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;
  public amount: number;
  public denom: string;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.amount = payload.amount;
    this.denom = payload.denom;
  }

  static getWithdrawalAmount(log: any) {
    const [withdrawEvent] = log?.events?.filter((x) => x.type === 'withdraw_rewards');
    const [withdrawAmount] = R.pathOr([], ['attributes'], withdrawEvent).filter((x) => x.key === 'amount');
    const [amount, denom] = withdrawAmount.value.match(/[a-z]+|[^a-z]+/gi);
    return {
      amount,
      denom,
    };
  }

  static fromJson(json: any, log?: any) {
    const {
      amount = 0,
      denom = chainConfig.base,
    } = this.getWithdrawalAmount(log);

    const displayAmount = formatDenom(amount);

    return new MsgWithdrawDelegatorReward({
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      validatorAddress: json.validator_address,
      amount: displayAmount,
      denom: denom === chainConfig.base ? chainConfig.display : denom,
    });
  }
}

export default MsgWithdrawDelegatorReward;
