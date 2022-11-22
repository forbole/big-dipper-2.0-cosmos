import * as R from 'ramda';
import numeral from 'numeral';

class IscnParams {
  public registryName: string;

  public feePerByte: {
    denom: string;
    amount: string;
  };

  constructor(payload: any) {
    this.registryName = payload.registryName;
    this.feePerByte = payload.feePerByte;
  }

  static fromJson(data: any): IscnParams {
    return {
      registryName: R.pathOr('', ['registry_name'], data),
      feePerByte: {
        amount: String(numeral(R.pathOr(0, ['fee_per_byte', 'amount'], data)).value() ?? ''),
        denom: R.pathOr('', ['fee_per_byte', 'denom'], data),
      },
    };
  }
}

export default IscnParams;
