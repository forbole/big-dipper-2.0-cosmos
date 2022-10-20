import { InstructionBase } from '@models';
import axios from 'axios';
import * as R from 'ramda';
import { TokenAccountUnitDocument } from '@src/graphql/transaction_details_documents';

class TokenProgramApprove extends InstructionBase {
  public source: string;
  public delegate: string;
  public amount: string;
  public owner: string;
  public denom: string;
  public decimal: number;

  constructor(payload: any) {
    super(payload);
    this.source = payload.source;
    this.delegate = payload.delegate;
    this.amount = payload.amount;
    this.owner = payload.owner;
    this.denom = payload.denom;
    this.decimal = payload.decimal;
  }

  public static async setExternalData(address: string): Promise<{
    denom: string;
    decimal: number;
  }> {
    const DEFAULT_RETURN_VALUE = {
      denom: '',
      decimal: 0,
    };

    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address,
        },
        query: TokenAccountUnitDocument,
      });
      return {
        denom: R.pathOr('', [
          'data', 'tokenAccount', 0, 'tokenUnit', 'unitName'], data),
        decimal: R.pathOr(0, [
          'data', 'tokenAccount', 0, 'tokenInfo', 'decimals',
        ], data),
      };
    } catch (error) {
      return DEFAULT_RETURN_VALUE;
    }
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    const source = R.pathOr('', ['value', 'source'], json);
    const tokenUnitInfo = await TokenProgramApprove.setExternalData(source);
    return new TokenProgramApprove({
      ...defaultItems,
      ...tokenUnitInfo,
      source,
      delegate: R.pathOr('', ['value', 'delegate'], json),
      amount: R.pathOr('', ['value', 'amount'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
    });
  }
}

export default TokenProgramApprove;
