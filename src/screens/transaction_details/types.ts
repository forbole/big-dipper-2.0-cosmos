import {
  MsgSend,
  MsgMultiSend,
  MsgVerifyInvariant,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgDeposit,
  MsgVote,
  MsgUnjail,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgRedelegate,
  MsgUndelegate,
  MsgSubmitProposal,
  MsgUnknown,
} from '@models';

export type OverviewType = {
  hash: string;
  height: number;
  timestamp: string;
  fee: number;
  gasUsed: number;
  gasWanted: number;
  success: boolean;
  memo: string;
  error: string;
}

export type MessageType = (MsgCreateValidator
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
  | MsgWithdrawDelegatorReward);

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  messages: {
    filterBy: string;
    viewRaw: boolean;
    items: MessageType[];
  }
}
