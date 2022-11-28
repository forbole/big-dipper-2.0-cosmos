import * as R from 'ramda';

export interface Link {
  chainId: string;
  url: string;
  name: string;
}

class BigDipperNetwork {
  public logo: string;

  public name: string;

  public mainnet: Link[];

  public testnet: Link[];

  public retired: Link[];

  public other: Link[];

  constructor(payload: object) {
    this.name = R.pathOr('', ['name'], payload);
    this.logo = R.pathOr('', ['logo'], payload);
    this.mainnet = R.pathOr([], ['mainnet'], payload);
    this.testnet = R.pathOr([], ['testnet'], payload);
    this.retired = R.pathOr([], ['retired'], payload);
    this.other = R.pathOr([], ['other'], payload);
  }

  static fromJson(data?: {
    links?: Array<{ chain_id: string; url: string; name: string }>;
    name: string;
    logo: string;
  }): BigDipperNetwork {
    const allLinks: Link[] =
      data?.links?.map((x) => ({
        chainId: x.chain_id,
        url: x.url,
        name: x.name,
      })) ?? [];
    const mainnet: Link[] = [];
    const testnet: Link[] = [];
    const retired: Link[] = [];
    const other: Link[] = [];

    allLinks.forEach((x) => {
      // main
      if (x.name.toLowerCase().includes('mainnet')) {
        mainnet.push(x);
      } else if (x.name.toLowerCase().includes('testnet')) {
        testnet.push(x);
      } else if (x.name.toLowerCase().includes('retired')) {
        retired.push(x);
      } else {
        other.push(x);
      }
    });

    return {
      mainnet,
      testnet,
      retired,
      other,
      name: data?.name ?? '',
      logo: data?.logo ?? '',
    };
  }
}

export default BigDipperNetwork;
