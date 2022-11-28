import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgEditDataSource {
  public category: Categories;

  public type: string;

  public json: object;

  public dataSourceId: number;

  public name: string;

  public description: string;

  public executable: object;

  public fee: MsgCoin[];

  public treasury: string;

  public owner: string;

  public sender: string;

  constructor(payload: object) {
    this.category = 'oracle';
    this.json = R.pathOr({}, ['json'], payload);
    this.type = R.pathOr('', ['type'], payload);
    this.dataSourceId = R.pathOr(0, ['dataSourceId'], payload);
    this.name = R.pathOr('', ['name'], payload);
    this.description = R.pathOr('', ['description'], payload);
    this.executable = R.pathOr({}, ['executable'], payload);
    this.fee = R.pathOr([], ['fee'], payload);
    this.treasury = R.pathOr('', ['treasury'], payload);
    this.owner = R.pathOr('', ['owner'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
  }

  static fromJson(json: object): MsgEditDataSource {
    return {
      category: 'oracle',
      json,
      type: R.pathOr('', ['@type'], json),
      dataSourceId: R.pathOr(0, ['data_source_id'], json),
      name: R.pathOr('', ['name'], json),
      description: R.pathOr('', ['description'], json),
      executable: R.pathOr({}, ['executable'], json),
      fee: R.pathOr<MsgEditDataSource['fee']>([], ['fee'], json).map((x) => ({
        denom: x.denom,
        amount: x?.amount ?? '0',
      })),
      treasury: R.pathOr('', ['treasury'], json),
      owner: R.pathOr('', ['owner'], json),
      sender: R.pathOr('', ['sender'], json),
    };
  }
}

export default MsgEditDataSource;
