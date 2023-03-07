import * as R from 'ramda';

class FeeModelParams {
  public maxDiscount: number;

  public maxBlockGas: number;

  public initialGasPrice: number;

  public longEmaBlockLength: number;

  public shortEmaBlockLength: number;

  public maxGasPriceMultiplier: number;

  public escalationStartFraction: number;

  constructor(payload: object) {
    this.maxDiscount = R.pathOr(0, ['maxDiscount'], payload);
    this.maxBlockGas = R.pathOr(0, ['maxBlockGas'], payload);
    this.initialGasPrice = R.pathOr(0, ['initialGasPrice'], payload);
    this.longEmaBlockLength = R.pathOr(0, ['longEmaBlockLength'], payload);
    this.shortEmaBlockLength = R.pathOr(0, ['shortEmaBlockLength'], payload);
    this.maxGasPriceMultiplier = R.pathOr(0, ['maxGasPriceMultiplier'], payload);
    this.escalationStartFraction = R.pathOr(0, ['escalationStartFraction'], payload);
  }

  static fromJson(data: object): FeeModelParams {
    return {
      maxDiscount: R.pathOr(0, ['max_discount'], data),
      maxBlockGas: R.pathOr(0, ['max_block_gas'], data),
      initialGasPrice: R.pathOr(0, ['initial_gas_price'], data),
      longEmaBlockLength: R.pathOr(0, ['long_ema_block_length'], data),
      shortEmaBlockLength: R.pathOr(0, ['short_ema_block_length'], data),
      maxGasPriceMultiplier: R.pathOr(0, ['max_gas_price_multiplier'], data),
      escalationStartFraction: R.pathOr(0, ['escalation_start_fraction'], data),
    };
  }
}

export default FeeModelParams;
