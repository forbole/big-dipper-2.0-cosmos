import * as R from 'ramda';

class SlashingParams {
  public downtimeJailDuration: number;

  public minSignedPerWindow: number;

  public signedBlockWindow: number;

  public slashFractionDoubleSign: number;

  public slashFractionDowntime: number;

  constructor(payload: object) {
    this.downtimeJailDuration = R.pathOr(0, ['downtimeJailDuration'], payload);
    this.minSignedPerWindow = R.pathOr(0, ['minSignedPerWindow'], payload);
    this.signedBlockWindow = R.pathOr(0, ['signedBlockWindow'], payload);
    this.slashFractionDoubleSign = R.pathOr(0, ['slashFractionDoubleSign'], payload);
    this.slashFractionDowntime = R.pathOr(0, ['slashFractionDowntime'], payload);
  }

  static fromJson(data: object): SlashingParams {
    return {
      downtimeJailDuration: R.pathOr(0, ['downtime_jail_duration'], data),
      minSignedPerWindow: R.pathOr(0, ['min_signed_per_window'], data),
      signedBlockWindow: R.pathOr(0, ['signed_blocks_window'], data),
      slashFractionDoubleSign: R.pathOr(0, ['slash_fraction_double_sign'], data),
      slashFractionDowntime: R.pathOr(0, ['slash_fraction_downtime'], data),
    };
  }
}

export default SlashingParams;
