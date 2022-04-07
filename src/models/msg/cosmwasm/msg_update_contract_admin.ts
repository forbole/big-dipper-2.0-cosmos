import * as R from 'ramda';
 import { Categories } from '../types';

 class MsgUpdateContractAdmin {
   public category: Categories;
   public type: string;
   public json: any;
   public sender: string;
   public newAdmin: string;
   public contract: string;

   constructor(payload: any) {
     this.category = 'cosmwasm';
     this.type = payload.type;
     this.json = payload.json;
     this.sender = payload.sender;
     this.newAdmin = payload.newAdmin;
     this.contract = payload.contract;
   }

   static fromJson(json: any) {
     return new MsgUpdateContractAdmin({
       json,
       type: json['@type'],
       sender: json.sender,
       newAdmin: R.pathOr('', ['new_admin'], json),
       contract: R.pathOr('', ['contract'], json),
     });
   }
 }

 export default MsgUpdateContractAdmin;