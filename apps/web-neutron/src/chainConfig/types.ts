export interface ChainSettings {
  network: string;
  chainType: string;
  genesis: {
    time: string;
    height: number;
  };
  prefix: {
    consensus: string;
    validator: string;
    account: string;
  };
  primaryTokenUnit: string;
  votingPowerTokenUnit: string;
  tokenUnits: {
    [token: string]: {
      display: string;
      exponent: number;
    };
  };
  endpoints: {
    graphql?: string;
    graphqlWebsocket?: string;
    publicRpcWebsocket?: string;
  };
  marketing: {
    matomoURL?: string;
    matomoSiteID?: string;
  };
}

export interface PaletteSettings {
  primary: {
    main?: string;
    contractText?: string;
  };
  background: {
    default?: string;
    paper?: string;
  };
  divider?: string;
  text: {
    primary?: string;
    secondary?: string;
  };
  custom: {
    general: {
      background?: string;
      surfaceOne?: string;
      surfaceTwo?: string;
      surfaceThree?: string;
      icon?: string;
    };
    fonts: {
      fontOne?: string;
      fontTwo?: string;
      fontThree?: string;
      fontFour?: string;
      fontFive?: string;
      highlight?: string;
    };
    primaryData: {
      one?: string;
      two?: string;
      three?: string;
      four?: string;
    };
    results: {
      pass?: string;
      fail?: string;
    };
    tokenomics: {
      one?: string;
      two?: string;
      three?: string;
    };
    conditions: {
      zero?: string;
      one?: string;
      two?: string;
      three?: string;
    };
    charts: {
      zero?: string;
      one?: string;
      two?: string;
      three?: string;
      four?: string;
      five?: string;
    };
    tags: {
      zero?: string;
      one?: string;
      two?: string;
      three?: string;
      four?: string;
      five?: string;
      six?: string;
      seven?: string;
      eight?: string;
      nine?: string;
      ten?: string;
      eleven?: string;
      twelve?: string;
      thirteen?: string;
      fourteen?: string;
      fifteen?: string;
      sixteen?: string;
      seventeen?: string;
      eighteen?: string;
      nineteen?: string;
      twenty?: string;
    };
    wallet: {
      background?: string;
      backgroundTwo?: string;
      surfaceOne: string;
      surfaceTwo: string;
      surfaceThree: string;
      surfaceFour: string;
      surfaceFive: string;
      divider?: string;
      textPrimary?: string;
      textSecondary?: string;
      active?: string;
      inactive?: string;
    };
  };
}

export interface ChainConfig extends ChainSettings {
  chainName: string;
  title: string;
  extra: {
    profile: boolean;
    graphqlWs: boolean;
    votingPowerExponent?: number;
  };
  basePath: string;
  previewImage?: string;
  themes: {
    default: string;
    themeList: Array<'dark' | 'light' | 'deuteranopia' | 'tritanopia'>;
    dark: PaletteSettings;
    light: PaletteSettings;
  };
  keplr: string | undefined;
  provider: {
    primaryTokenUnit: string;
    tokenunits: {
      [token: string]: {
        display: string;
        exponent: number;
      };
    };
  };
}
