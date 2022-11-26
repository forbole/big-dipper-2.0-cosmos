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
      maxAskCount: data?.max_ask_count ?? 0,
      baseOwsmGas: data?.base_owasm_gas ?? 0,
      maxCalldataSize: data?.max_calldata_size ?? 0,
      samplingTryCount: data?.sampling_try_count ?? 0,
      maxReportDataSize: data?.max_report_data_size ?? 0,
      maxRawRequestCount: data?.max_raw_request_count ?? 0,
      expirationBlockCount: data?.expiration_block_count ?? 0,
      oracleRewardPercentage: data?.oracle_reward_percentage ?? 0,
      inactivePenaltyDuration: data?.inactive_penalty_duration ?? 0,
      perValidatorRequestGas: data?.per_validator_request_gas ?? 0,
    };
  }
}

export default OracleParams;
