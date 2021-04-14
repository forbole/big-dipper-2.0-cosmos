import numeral from 'numeral';
import * as R from 'ramda';
import {
  MsgCreateValidator,
  MsgDelegate,
  MsgDeposit,
  MsgEditValidator,
  MsgFundCommunityPool,
  MsgMultiSend,
  MsgRedelegate,
  MsgSend,
  MsgSetWithdrawAddress,
  MsgSubmitProposal,
  MsgUndelegate,
  MsgUnjail,
  MsgVerifyInvariant,
  MsgVote,
  MsgWithdrawDelegatorReward,
  MsgUnknown,
} from '@models';
import { getMessageModelByType } from '@utils';

class ActivityDetail {
  public hash: string;
  public height: number;
  public fee: {
    amount: number;
  }
  public gasUsed: number;
  public gasWanted: number;
  public success: boolean;
  public memo: string;
  public timestamp: string;
  public messages: (MsgCreateValidator
  | MsgDelegate
  | MsgDeposit
  | MsgEditValidator
  | MsgFundCommunityPool
  | MsgMultiSend
  | MsgRedelegate
  | MsgSend
  | MsgSetWithdrawAddress
  | MsgSubmitProposal
  | MsgUndelegate
  | MsgUnjail
  | MsgVerifyInvariant
  | MsgVote
  | MsgUnknown
  | MsgWithdrawDelegatorReward)[];

  constructor(payload) {
    this.hash = payload.hash;
    this.height = payload.height;
    this.fee = payload.fee;
    this.gasUsed = payload.gasUsed;
    this.gasWanted = payload.gasWanted;
    this.success = payload.success;
    this.memo = payload.memo;
    this.timestamp = payload.timestamp;
    this.messages = payload.messages;
  }

  static fromJson(json: any) {
    return new ActivityDetail({
      hash: json.hash,
      height: json.height,
      fee: {
        amount: numeral(R.pathOr(0, ['fee', 'amount', 0, 'amount'], json)).value(),
      },
      gasUsed: json.gas_used,
      gasWanted: json.gas_wanted,
      success: json.success,
      memo: json.memo,
      timestamp: json?.block?.timestamp,
      messages: R.pathOr([], ['messages'], json).map((x) => {
        return getMessageModelByType(x?.['@type']).fromJson(x);
      }),
    });
  }
}

export default ActivityDetail;

const getMessageByType = (type:string) => {
  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return {
      content: Delegate,
      tagType: 'staking',
      tagDisplay: 'txDelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return {
      content: Redelegate,
      tagType: 'redelegate',
      tagDisplay: 'txRedelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return {
      content: Undelegate,
      tagType: 'undelegate',
      tagDisplay: 'txUndelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return {
      content: CreateValidator,
      tagType: 'staking',
      tagDisplay: 'txCreateValidatorLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return {
      content: EditValidator,
      tagType: 'staking',
      tagDisplay: 'txEditValidatorLabel',
    };
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return {
      content: Send,
      tagType: 'bank',
      tagDisplay: 'txSendLabel',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return {
      content: Multisend,
      tagType: 'bank',
      tagDisplay: 'txMultisendLabel',
    };
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    return {
      content: VerifyInvariant,
      tagType: 'crisis',
      tagDisplay: 'txVerifyInvariantLabel',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return {
      content: Unjail,
      tagType: 'slashing',
      tagDisplay: 'txUnjailLabel',
    };
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return {
      content: Fund,
      tagType: 'distribution',
      tagDisplay: 'txFundLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return {
      content: SetWithdrawalAddress,
      tagType: 'distribution',
      tagDisplay: 'txsetRewardAddressLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return {
      content: WithdrawReward,
      tagType: 'distribution',
      tagDisplay: 'txWithdrawRewardLabel',
    };
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return {
      content: DepositProposal,
      tagType: 'governance',
      tagDisplay: 'txDepositLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return {
      content: Vote,
      tagType: 'governance',
      tagDisplay: 'txVoteLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return {
      content: SubmitProposal,
      tagType: 'governance',
      tagDisplay: 'txSubmitProposalLabel',
    };
  }

  let tagDisplay = 'txUnknownLabel';
  if (type) {
    const tagSplit = type?.split('.');
    tagDisplay = tagSplit[tagSplit.length - 1];
  }

  return {
    content: Unknown,
    tagType: 'unknown',
    tagDisplay,
  };
};
