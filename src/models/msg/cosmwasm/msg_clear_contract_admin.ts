import * as R from 'ramda';
 import { Categories } from '../types';

 class MsgClearContractAdmin {
   public category: Categories;
   public type: string;
   public json: any;
   public sender: string;
   public contract: string;

   constructor(payload: any) {
       console.log("MsgClearContractAdmin payload ", payload);
     this.category = 'cosmwasm';
     this.type = payload.type;
     this.json = payload.json;
     this.sender = payload.sender;
     this.contract = payload.contract;
   }

   static fromJson(json: any) {
       console.log("MsgClearContractAdmin json ", json);
     return new MsgClearContractAdmin({
       json,
       type: json['@type'],
       sender: json.sender,
       contract: R.pathOr('', ['contract'], json),
     });
   }
 }

 export default MsgClearContractAdmin;