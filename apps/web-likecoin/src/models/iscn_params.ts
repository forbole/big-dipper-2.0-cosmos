import * as R from 'ramda';
import numeral from 'numeral';

class IscnParams {
  public registryName: string;

  public feePerByte: {
    denom: string;
    amount: string;
  };

  constructor(payload: object) {
    this.registryName = R.pathOr('', ['registryName'], payload);
    this.feePerByte = R.pathOr({ denom: '', amount: '0' }, ['feePerByte'], payload);
  }

  static fromJson(data: object): IscnParams {
    return {
      registryName: data?.registry_name ?? '',
      feePerByte: {
        amount: String(numeral(data?.fee_per_byte?.amount ?? 0).value() ?? ''),
        denom: data?.fee_per_byte?.denom ?? '',
      },
    };
  }
}

export default IscnParams;
