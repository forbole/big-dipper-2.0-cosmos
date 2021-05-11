import numeral from 'numeral';

type Coins = {
  denom: string;
  amount: number | string;
}

class MsgMultiSend {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking';
  public type: string;
  public inputs: {
    address: string;
    coins: Coins[],
  }[];
  public outputs: {
    address: string;
    coins: Coins[],
  }[];

  constructor(payload: any) {
    this.category = 'bank';
    this.type = payload.type;
    this.inputs = payload.inputs;
    this.outputs = payload.outputs;
  }

  static fromJson(json: any) {
    return new MsgMultiSend({
      type: json['@type'],
      inputs: json.inputs?.map((input) => {
        return ({
          address: input?.address,
          coins: input?.coins?.map((coin) => {
            return ({
              denom: coin?.denom,
              amount: numeral(coin?.amount).value(),
            });
          }),
        });
      }),
      outputs: json.outputs?.map((output) => {
        console.log(output, 'output');
        return ({
          address: output?.address,
          coins: output?.coins?.map((coin) => {
            console.log(coin, 'coins');
            return ({
              denom: coin?.denom,
              amount: numeral(coin?.amount).value(),
            });
          }),
        });
      }),
    });
  }
}

export default MsgMultiSend;
