import * as R from 'ramda';

class SlashingParams {
  public downtimeJailDuration: number;
  public minSignedPerWindow: number;
  public signedBlockWindow: number;
  public slashFractionDoubleSign: number;
  public slashFractionDowntime: number;

  constructor(payload: any) {
    this.downtimeJailDuration = payload.downtimeJailDuration;
    this.minSignedPerWindow = payload.minSignedPerWindow;
    this.signedBlockWindow = payload.signedBlockWindow;
    this.slashFractionDoubleSign = payload.slashFractionDoubleSign;
    this.slashFractionDowntime = payload.slashFractionDowntime;
  }

  static fromJson(data: any) {
    return new SlashingParams({
      downtimeJailDuration: R.pathOr(0, ['downtime_jail_duration'], data),
      minSignedPerWindow: R.pathOr(0, ['min_signed_per_window'], data),
      signedBlockWindow: R.pathOr(0, ['signed_blocks_window'], data),
      slashFractionDoubleSign: R.pathOr(0, ['slash_fraction_double_sign'], data),
      slashFractionDowntime: R.pathOr(0, ['slash_fraction_downtime'], data),
    });
  }
}

export default SlashingParams;
