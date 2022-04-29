import { Categories } from '../types';

class MsgSendToCosmosClaim {
  public category: Categories;
  public ethSender: string;
  public amount: string;
  public receiver: string;
  public type: string;
  public json: JSON;

  constructor(payload: any) {
    this.category = 'gravity';
    this.ethSender = payload.ethSender;
    this.amount = payload.amount;
    this.receiver = payload.receiver;
    this.type = payload.type;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSendToCosmosClaim({
      ethSender: json.ethereum_sender,
      amount: json.amount,
      receiver: json.cosmos_receiver,
      type: json['@type'],
      json,
    });
  }
}

export default MsgSendToCosmosClaim;
