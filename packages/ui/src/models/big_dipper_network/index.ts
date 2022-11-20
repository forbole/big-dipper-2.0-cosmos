export type Link = {
  chainId: string;
  url: string;
  name: string;
};

class BigDipperNetwork {
  public logo: string;

  public name: string;

  public mainnet: Link[];

  public testnet: Link[];

  public retired: Link[];

  public other: Link[];

  constructor(payload: any) {
    this.name = payload.name;
    this.logo = payload.logo;
    this.mainnet = payload.mainnet;
    this.testnet = payload.testnet;
    this.retired = payload.retired;
    this.other = payload.other;
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

    allLinks.forEach((x: any) => {
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
