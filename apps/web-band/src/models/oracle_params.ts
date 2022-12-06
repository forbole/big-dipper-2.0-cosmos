import * as R from 'ramda';

class OracleParams {
  public maxAskCount: number;

  public baseOwsmGas: number;

  public maxCalldataSize: number;

  public samplingTryCount: number;

  public maxReportDataSize: number;

  public maxRawRequestCount: number;

  public expirationBlockCount: number;

  public oracleRewardPercentage: number;

  public inactivePenaltyDuration: number;

  public perValidatorRequestGas: number;

  constructor(payload: object) {
    this.maxAskCount = R.pathOr(0, ['maxAskCount'], payload);
    this.baseOwsmGas = R.pathOr(0, ['baseOwsmGas'], payload);
    this.maxCalldataSize = R.pathOr(0, ['maxCalldataSize'], payload);
    this.samplingTryCount = R.pathOr(0, ['samplingTryCount'], payload);
    this.maxReportDataSize = R.pathOr(0, ['maxReportDataSize'], payload);
    this.maxRawRequestCount = R.pathOr(0, ['maxRawRequestCount'], payload);
    this.expirationBlockCount = R.pathOr(0, ['expirationBlockCount'], payload);
    this.oracleRewardPercentage = R.pathOr(0, ['oracleRewardPercentage'], payload);
    this.inactivePenaltyDuration = R.pathOr(0, ['inactivePenaltyDuration'], payload);
    this.perValidatorRequestGas = R.pathOr(0, ['perValidatorRequestGas'], payload);
  }

  static fromJson(data: object): OracleParams {
    // console.log(data, 'data');
    return {
      maxAskCount: R.pathOr(0, ['max_ask_count'], data),
      baseOwsmGas: R.pathOr(0, ['base_owasm_gas'], data),
      maxCalldataSize: R.pathOr(0, ['max_calldata_size'], data),
      samplingTryCount: R.pathOr(0, ['sampling_try_count'], data),
      maxReportDataSize: R.pathOr(0, ['max_report_data_size'], data),
      maxRawRequestCount: R.pathOr(0, ['max_raw_request_count'], data),
      expirationBlockCount: R.pathOr(0, ['expiration_block_count'], data),
      oracleRewardPercentage: R.pathOr(0, ['oracle_reward_percentage'], data),
      inactivePenaltyDuration: R.pathOr(0, ['inactive_penalty_duration'], data),
      perValidatorRequestGas: R.pathOr(0, ['per_validator_request_gas'], data),
    };
  }
}

export default OracleParams;
