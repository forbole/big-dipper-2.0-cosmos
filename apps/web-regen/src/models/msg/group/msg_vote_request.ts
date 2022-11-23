import type { Categories } from '@/models/msg/types';

class MsgVoteRequest {
  public category: Categories;

  public type: string;

  public json: any;

  public voter: string;

  constructor(payload: any) {
    this.category = 'group';
    this.json = payload.json;
    this.type = payload.type;
    this.voter = payload.voter;
  }

  static fromJson(json: any): MsgVoteRequest {
    return {
      category: 'group',
      json,
      type: json['@type'],
      voter: json.voter,
    };
  }
}

export default MsgVoteRequest;
