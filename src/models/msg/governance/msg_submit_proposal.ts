import numeral from 'numeral';
import {
  MsgTextProposal,
  MsgSoftwareUpgradeProposal,
  MsgParameterChangeProposal,
  MsgCommunityPoolSpendProposal,
} from '../..';
import { Categories } from '../types';

class MsgSubmitProposal {
  public category: Categories;
  public type: string;
  public content: MsgTextProposal
  | MsgSoftwareUpgradeProposal
  | MsgParameterChangeProposal
  | MsgCommunityPoolSpendProposal;
  public initialDeposit: {
    denom: string;
    amount: string | number;
  }[]
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

  static fromJson(json: any) {
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

    return new MsgSubmitProposal({
      json,
      content,
      type: json['@type'],
      initialDeposit: json?.initial_deposit?.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }) ?? [],
      proposer: json.proposer,
    });
  }
}

export default MsgSubmitProposal;
