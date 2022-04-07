import * as R from 'ramda';
 import { Categories } from '../types';

 class MsgStoreCode {
   public category: Categories;
   public type: string;
   public json: any;
   public sender: string;
   public wasmByteCode: JSON;

   constructor(payload: any) {
     this.category = 'cosmwasm';
     this.type = payload.type;
     this.json = payload.json;
     this.sender = payload.sender;
     this.wasmByteCode = payload.wasmByteCode;
   }

   static fromJson(json: any) {
     return new MsgStoreCode({
       json,
       type: json['@type'],
       sender: json.sender,
       wasmByteCode: R.pathOr('', ['wasm_byte_code'], json),
     });
   }
 }

 export default MsgStoreCode;