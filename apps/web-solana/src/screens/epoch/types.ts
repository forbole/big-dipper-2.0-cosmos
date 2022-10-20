export type InflationType = {
  validator: number;
  foundation: number;
  total: number;
  epoch: number;
}

export type InflationGovernorType = {
  initial: number;
  terminal: number;
  taper: number;
  foundation: number;
  foundationTerm: number;
}

export type EpochScheduleType = {
  slotsPerEpoch: number;
  leaderScheduleSlotOffset: number;
  warmup: boolean;
  firstNormalEpoch: number;
  firstNormalSlot: number;
}

export type EpochState = {
  loading: boolean;
  exists: boolean;
  inflation: InflationType;
  inflationGovernor: InflationGovernorType;
  epochSchedule: EpochScheduleType;
}
