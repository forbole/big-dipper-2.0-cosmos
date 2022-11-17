import { SignInfo } from '../commons';

export class MsgCreateResource {
  public type: string;
  public json: any;
  public payload?: MsgCreateResourcePayload;
  public signatures: SignInfo[];

  constructor(
    type: string,
    json: any,
    signatures: SignInfo[],
    payload?: MsgCreateResourcePayload,
  ) {
    this.type = type;
    this.json = json;
    this.payload = payload;
    this.signatures = signatures;
  }

  static fromJson(object: any): MsgCreateResource {
    const message = {} as MsgCreateResource;
    message.signatures = [];
    message.json = object;
    message.type = object['@type'];
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = undefined;
    }
    if (object.signatures !== undefined && object.signatures !== null) {
      // eslint-disable-next-line no-restricted-syntax
      for (const e of object.signatures) {
        message.signatures.push(e);
      }
    }
    return message;
  }
}

type MsgCreateResourcePayload = {
  collectionId: string;
  id: string;
  name: string;
  resourceType: string;
  data: Uint8Array;
};
