import * as R from 'ramda';
import numeral from 'numeral';
import { Categories } from '../types';

class MsgTransfer {
    public category: Categories;
    public type: string;
    public sender: string;
    public receiver: string;
    public token: {
      amount: number;
      denom: string;
    };
    public sourceChannel: string;
    public json: any;

    constructor(payload: any) {
      this.category = 'ibc-transfer';
      this.type = payload.type;
      this.sender = payload.sender;
      this.receiver = payload.receiver;
      this.token = payload.token;
      this.sourceChannel = payload.sourceChannel;
      this.json = payload.json;
    }

    static fromJson(json: any) {
      return new MsgTransfer({
        json,
        type: json['@type'],
        sender: json.sender,
        receiver: json.receiver,
        token: {
          denom: R.pathOr('', ['token', 'denom'], json),
          amount: numeral(R.pathOr('0', ['token', 'amount'], json)).value(),
        },
        sourceChannel: json.source_channel,
      });
    }
}

export default MsgTransfer;
