import {
  Service, SignInfo, VerificationMethod,
} from './commons';

export class MsgUpdateDid {
  public type: string;
  public json: any;
  public payload?: MsgUpdateDidPayload;
  public signatures: SignInfo[];

  constructor(
    type: string,
    json: any,
    payload: MsgUpdateDidPayload,
    signatures: SignInfo[],
  ) {
    this.type = type;
    this.json = json;
    this.payload = payload;
    this.signatures = signatures;
  }

  static fromJson(object: any): MsgUpdateDid {
    const message = {} as MsgUpdateDid;
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

type MsgUpdateDidPayload = {
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
