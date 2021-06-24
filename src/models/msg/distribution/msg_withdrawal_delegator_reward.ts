import * as R from 'ramda';
import { formatDenom } from '@utils/format_denom';
import { Categories } from '../types';

class MsgWithdrawDelegatorReward {
  public category: Categories;
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;
  public amounts: {
    denom: string;
    value: number;
  }[];
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
    this.amounts = payload.amounts;
    this.json = payload.json;
  }

  static getWithdrawalAmount(log: any) {
    const [withdrawEvent] = log?.events?.filter((x) => x.type === 'withdraw_rewards');
    const [withdrawAmount] = R.pathOr([], ['attributes'], withdrawEvent).filter((x) => x.key === 'amount');

    const amounts = R.pathOr('0', ['value'], withdrawAmount).split(',').map((x) => {
      const [amount, denom] = x.match(/[a-z]+|[^a-z]+/gi);
      return formatDenom(amount, denom);
    });

    return amounts;
  }

  static fromJson(json: any, log?: any) {
    const amounts = this.getWithdrawalAmount(log);

    return new MsgWithdrawDelegatorReward({
      json,
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      validatorAddress: json.validator_address,
      amounts,
    });
  }
}

export default MsgWithdrawDelegatorReward;
