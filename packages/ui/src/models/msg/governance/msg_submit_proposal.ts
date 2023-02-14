import * as R from 'ramda';
import MsgCommunityPoolSpendProposal from '@/models/msg/governance/msg_community_pool_spend_proposal';
import MsgParameterChangeProposal from '@/models/msg/governance/msg_parameter_change_proposal';
import MsgSoftwareUpgradeProposal from '@/models/msg/governance/msg_software_upgrade_proposal';
import MsgTextProposal from '@/models/msg/governance/msg_text_proposal';
import type { Categories } from '@/models/msg/types';

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

  public json: object;

  constructor(payload: object) {
    this.category = 'governance';
    this.type = R.pathOr('', ['type'], payload);
    this.content = R.pathOr(MsgTextProposal.fromJson({}), ['content'], payload);
    this.initialDeposit = R.pathOr([], ['initialDeposit'], payload);
    this.proposer = R.pathOr('', ['proposer'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSubmitProposal {
    const contentDetailsRaw = R.pathOr<MsgSubmitProposal['content']>(
      MsgTextProposal.fromJson({}),
      ['content'],
      json
    );
    const contentType = '@type' in contentDetailsRaw ? (contentDetailsRaw['@type'] as string) : '';
    let content: MsgSubmitProposal['content'] | null = null;

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
      type: R.pathOr('', ['@type'], json),
      initialDeposit: R.pathOr<MsgCoin[]>([], ['initial_deposit'], json).map((x) => ({
        denom: x?.denom ?? '',
        amount: x?.amount ?? '0',
      })),
      proposer: R.pathOr('', ['proposer'], json),
    };
  }
}

export default MsgSubmitProposal;
