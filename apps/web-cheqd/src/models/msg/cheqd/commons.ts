type KeyValuePair = {
  key: string;
  value: string;
};

export type SignInfo = {
  verificationMethodId: string;
  signature: string;
};

export type Service = {
  id: string;
  type: string;
  serviceEndpoint: string;
};
export type VerificationMethod = {
  id: string;
  type: string;
  controller: string;
  /** optional */
  KeyJwk: KeyValuePair[];
  /** optional */
  publicKeyMultibase: string;
};
