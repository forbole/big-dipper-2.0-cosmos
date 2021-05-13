import * as R from 'ramda';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils/format_denom';
import { Categories } from '../types';

class MsgWithdrawValidatorCommission {
  public category: Categories;
  public type: string;
  public validatorAddress: string;
  public amount: number;
  public denom: string;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
    this.amount = payload.amount;
    this.denom = payload.denom;
  }

  static getWithdrawalAmount(log: any) {
    const [withdrawEvent] = log?.events?.filter((x) => x.type === 'withdraw_commission');
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

    return new MsgWithdrawValidatorCommission({
      type: json['@type'],
      validatorAddress: json.validator_address,
      amount: displayAmount,
      denom: denom === chainConfig.base ? chainConfig.display : denom,
    });
  }
}

export default MsgWithdrawValidatorCommission;
