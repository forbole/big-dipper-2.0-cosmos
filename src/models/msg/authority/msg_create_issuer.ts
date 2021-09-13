import * as R from 'ramda';
import { Categories } from '../types';

class MsgCreateIssuer {
    public category: Categories;
    public type: string;
    public json: any;

    public owner: string;
    public clientOrderId: string;
    public timeInForce: 'Unspecified' | 'GoodTillCancel' | 'ImmediateOrCancel' | 'FillOrKill';
    public source: {
      amount: number;
      denom: string;
    };
    public destination: {
      amount: number;
      denom: string;
    };

    constructor(payload: any) {
      this.category = 'authority';
      this.type = payload.type;
      this.json = payload.json;
      this.owner = payload.owner;
      this.clientOrderId = payload.clientOrderId;
      this.timeInForce = payload.timeInForce;
      this.source = payload.source;
      this.destination = payload.destination;
    }

    static fromJson(json: any) {
      return new MsgCreateIssuer({
        json,
        type: json['@type'],
        owner: json.owner,
        clientOrderId: R.pathOr('', ['client_order_id'], json),
        timeInForce: R.pathOr('Unspecified', ['time_in_force'], json),
        source: {
          amount: R.pathOr(0, ['source', ' amount'], json),
          denom: R.pathOr(0, ['source', ' denom'], json),
        },
        destination: {
          amount: R.pathOr(0, ['source', ' amount'], json),
          denom: R.pathOr(0, ['source', ' denom'], json),
        },
      });
    }
}

export default MsgCreateIssuer;
