import numeral from 'numeral';
import * as R from 'ramda';

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
      registryName: R.pathOr('', ['registry_name'], data),
      feePerByte: {
        amount: String(numeral(R.pathOr('0', ['fee_per_byte', 'amount'], data)).value() ?? ''),
        denom: R.pathOr('', ['fee_per_byte', 'denom'], data),
      },
    };
  }
}

export default IscnParams;
