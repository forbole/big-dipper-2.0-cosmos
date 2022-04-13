import { Categories } from '../types';

class MsgExecuteContract {
  public category: Categories;
  public contract: string;
  public method: string;
  public arguments: string;
  public sender: string;
  public type: string;
  public json: JSON;

  constructor(payload: any) {
    this.category = 'cosmwasm';
    this.contract = payload.contract;
    const [method, args] = MsgExecuteContract.getMethodAndArguments(atob(payload.msg));
    this.method = method;
    this.arguments = args;
    this.sender = payload.sender;
    this.type = payload.type;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    json.msg_decoded = atob(json.msg);
    return new MsgExecuteContract({
      contract: json.contract,
      msg: json.msg,
      sender: json.sender,
      type: json['@type'],
      json,
    });
  }

  static getMethodAndArguments(msg: string): [string, string] {
    const msgObj = JSON.parse(msg);
    const method = Object.keys(msgObj)[0];
    const args = JSON.stringify(msgObj[method]);
    return [method, args];
  }
}

export default MsgExecuteContract;
