import InstructionBase from './instruction_base';

class InstructionUnknown extends InstructionBase {

}

// model to handle all unknown data
// class InstructionUnknown {
//   public type: string;
//   public json: JSON;

//   constructor(payload: any) {
//     this.type = payload.type;
//     this.json = payload.json;
//   }

//   static fromJson(json: any) {
//     return new InstructionUnknown({
//       type: R.pathOr('', ['type'], json),
//       program: R.pathOr('', ['program'], json),
//       rawData: R.pathOr('', ['raw_data'], json),
//       json,
//     });
//   }
// }

export default InstructionUnknown;
