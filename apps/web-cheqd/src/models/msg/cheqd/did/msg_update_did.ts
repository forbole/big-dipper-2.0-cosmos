import { Categories } from '@/models/types';
import { Service, SignInfo, VerificationMethod } from '../commons';

/* eslint-disable */
type MsgUpdateDidDocPayload = {
  context: string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethod[];
  authentication: string[];
  assertionMethod: string[];
  capabilityInvocation: string[];
  capabilityDelegation: string[];
  keyAgreement: string[];
  alsoKnownAs: string[];
  service: Service[];
  versionId: string;
};

export class MsgUpdateDidDoc {
  public category: Categories;

  public type: string;

  public json: any;

  public payload?: MsgUpdateDidDocPayload;

  public signatures: SignInfo[];

  constructor(type: string, json: any, payload: MsgUpdateDidDocPayload, signatures: SignInfo[]) {
    this.category = 'cheqd';
    this.type = type;
    this.json = json;
    this.payload = payload;
    this.signatures = signatures;
  }

  static fromJson(object: any): MsgUpdateDidDoc {
    const message = {} as MsgUpdateDidDoc;
    message.category = 'cheqd';
    message.signatures = [];
    message.json = object;
    message.type = object['@type'];
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = undefined;
    }
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(e);
      }
    }
    return message;
  }
}
/* eslint-enable */

export default MsgUpdateDidDoc;
