import * as R from 'ramda';

// model to handle all unknown data
class InstructionBase {
  public type: string;
  public program: string;
  public rawData: string;
  public index: number;
  public innerIndex: number;
  public json: JSON;

  constructor(payload: any) {
    this.type = payload.type;
    this.program = payload.program;
    this.rawData = payload.rawData;
    this.index = payload.index;
    this.innerIndex = payload.innerIndex;
    this.json = payload.json;
  }

  static defaultFormat(json: any) {
    const type = R.pathOr('', ['type'], json);
    const defaultJson = {
      raw: R.pathOr(null, ['rawData'], json),
    };
    return ({
      type,
      program: R.pathOr('', ['program'], json),
      rawData: R.pathOr('', ['raw_data'], json),
      index: R.pathOr('', ['index'], json),
      innerIndex: R.pathOr('', ['innerIndex'], json),
      json: type === 'unknown' ? defaultJson : R.pathOr(null, ['value'], json),
    });
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new InstructionBase(defaultItems);
  }
}

export default InstructionBase;
