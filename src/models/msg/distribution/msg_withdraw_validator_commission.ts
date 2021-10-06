import * as R from 'ramda';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@configs';
import { Categories } from '../types';

class MsgWithdrawValidatorCommission {
  public category: Categories;
  public type: string;
  public validatorAddress: string;
  public amounts: TokenUnit[];
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
    this.amounts = payload.amounts;
    this.json = payload.json;
  }

  static getWithdrawalAmount(log: any) {
    const withdrawEvents = R.pathOr([], ['events'], log).filter((x) => x.type === 'withdraw_commission');
    const withdrawAmounts = R.pathOr([], [0, 'attributes'], withdrawEvents).filter((x) => x.key === 'amount');

    const amounts = R.pathOr('0', [0, 'value'], withdrawAmounts).split(',').map((x) => {
      const [amount, denom = chainConfig.primaryTokenUnit] = x.match(/[a-z]+|[^a-z]+/gi);
      return formatDenom(amount, denom);
    });

    return amounts;
  }

  static fromJson(json: any, log?: any) {
    const amounts = this.getWithdrawalAmount(log);

    return new MsgWithdrawValidatorCommission({
      json,
      type: json['@type'],
      validatorAddress: json.validator_address,
      amounts,
    });
  }
}

export default MsgWithdrawValidatorCommission;
