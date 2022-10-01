export interface Config {
  readonly title: string;
  readonly network: string;
  readonly icon: string;
  readonly logo: Map<string, string>;
  readonly prefix: Prefix;
  readonly genesis: Genesis;
  readonly primaryTokenUnit: string;
  readonly votingPowerTokenUnit: string;

  // TODO: This should be an array instead
  readonly tokenUnits: Map<string, TokenUnit>;

  readonly extra: Map<string, string>;
  readonly endpoints: Endpoints;
  readonly general: General;
  readonly marketing: Marketing;
}

export interface Prefix {
  readonly account: string;
  readonly validator: string;
  readonly consensus: string;
}

export interface Genesis {
  readonly time: string;
  readonly height: number;
}

export interface TokenUnit {
  readonly display: string;
  readonly exponent: number;
}
export interface Endpoints {
  readonly graphql: string;
  readonly graphqlWebsocket: string;
  readonly publicRpcWebsocket: string;
}

export interface General {
  readonly basePath: string;
  readonly previewImage: string;
}

export interface Marketing {
  readonly matomoURL: string;
  readonly matomoSiteID: string;
}
