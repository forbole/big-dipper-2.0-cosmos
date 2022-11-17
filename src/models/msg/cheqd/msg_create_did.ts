import {
  Service, SignInfo, VerificationMethod,
} from './commons';

export class MsgCreateDid {
  public type: string;
  public json: any;
  public payload?: MsgCreateDidPayload;
  public signatures: SignInfo[];

  constructor(
    type: string,
    json: any,
    payload: MsgCreateDidPayload,
    signatures: SignInfo[],
  ) {
    this.type = type;
    this.json = json;
    this.payload = payload;
    this.signatures = signatures;
  }

  static fromJson(object: any): MsgCreateDid {
    const message = {} as MsgCreateDid;
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

type MsgCreateDidPayload = {
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
};
