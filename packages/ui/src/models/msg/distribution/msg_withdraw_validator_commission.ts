import * as R from 'ramda';
import chainConfig from '@/chainConfig';
import type { Categories, Log } from '@/models/msg/types';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();

class MsgWithdrawValidatorCommission {
  public category: Categories;

  public type: string;

  public validatorAddress: string;

  public amounts: TokenUnit[];

  public json: object;

  constructor(payload: object) {
    this.category = 'distribution';
    this.type = R.pathOr('', ['type'], payload);
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.amounts = R.pathOr([], ['amounts'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static getWithdrawalAmount(log?: Log) {
    const withdrawEvents =
      log?.events ?? [].filter((x: { type: string }) => x.type === 'withdraw_commission');
    const withdrawAmounts =
      withdrawEvents?.[0]?.attributes?.filter((x: { key?: string }) => x.key === 'amount') ?? [];

    const amounts = (withdrawAmounts?.[0]?.value ?? '0').split(',').map((x) => {
      const [amount, denom = primaryTokenUnit] = x.match(/[a-z]+|[^a-z]+/gi) ?? [];
      return formatToken(amount, denom);
    });

    return amounts;
  }

  static fromJson(json: object, log?: Log): MsgWithdrawValidatorCommission {
    const amounts = this.getWithdrawalAmount(log);

    return {
      category: 'distribution',
      json,
      type: R.pathOr('', ['@type'], json),
      validatorAddress: R.pathOr('', ['validator_address'], json),
      amounts,
    };
  }
}

export default MsgWithdrawValidatorCommission;
