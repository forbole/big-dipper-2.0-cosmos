import * as R from 'ramda';
import MsgTextProposal from './msg_text_proposal';
import MsgSoftwareUpgradeProposal from './msg_software_upgrade_proposal';
import MsgParameterChangeProposal from './msg_parameter_change_proposal';
import MsgCommunityPoolSpendProposal from './msg_community_pool_spend_proposal';
import type { Categories } from '../types';

class MsgSubmitProposal {
  public category: Categories;

  public type: string;

  public content:
    | MsgTextProposal
    | MsgSoftwareUpgradeProposal
    | MsgParameterChangeProposal
    | MsgCommunityPoolSpendProposal;

  public initialDeposit: MsgCoin[];

  public proposer: string;

  public json: any;

  constructor(payload: any) {
    this.category = 'governance';
    this.type = payload.type;
    this.content = payload.content;
    this.initialDeposit = payload.initialDeposit;
    this.proposer = payload.proposer;
    this.json = payload.json;
  }

  static fromJson(json: any): MsgSubmitProposal {
    const contentDetailsRaw = json?.content;
    const contentType = contentDetailsRaw?.['@type'];
    let content = null;

    switch (contentType) {
      case '/cosmos.gov.v1beta1.TextProposal': {
        content = MsgTextProposal.fromJson(contentDetailsRaw);
        break;
      }
      case '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal': {
        content = MsgSoftwareUpgradeProposal.fromJson(contentDetailsRaw);
        break;
      }
      case '/cosmos.params.v1beta1.ParameterChangeProposal': {
        content = MsgParameterChangeProposal.fromJson(contentDetailsRaw);
        break;
      }
      case '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal': {
        content = MsgCommunityPoolSpendProposal.fromJson(contentDetailsRaw);
        break;
      }
      default:
        content = contentDetailsRaw;
        break;
    }

    return {
      category: 'governance',
      json,
      content,
      type: json['@type'],
      initialDeposit:
        json?.initial_deposit?.map((x?: { denom?: string; amount?: number }) => {
          return {
            denom: x?.denom,
            amount: R.pathOr('0', ['amount'], x),
          };
        }) ?? [],
      proposer: json.proposer,
    };
  }
}

export default MsgSubmitProposal;
