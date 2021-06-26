import * as MODELS from '@models';

export type OverviewType = {
  hash: string;
  height: number;
  timestamp: string;
  fee: TokenUnit;
  gasUsed: number;
  gasWanted: number;
  success: boolean;
  memo: string;
  error: string;
}

// ==============================================
// initialized message types for ui display
// ==============================================
export type DefaultMessageType = (
  MODELS.MsgCreateValidator
  | MODELS.MsgDelegate
  | MODELS.MsgDeposit
  | MODELS.MsgEditValidator
  | MODELS.MsgFundCommunityPool
  | MODELS.MsgMultiSend
  | MODELS.MsgRedelegate
  | MODELS.MsgSend
  | MODELS.MsgSetWithdrawAddress
  | MODELS.MsgSubmitProposal
  | MODELS.MsgUndelegate
  | MODELS.MsgUnjail
  | MODELS.MsgVerifyInvariant
  | MODELS.MsgVote
  | MODELS.MsgUnknown
  | MODELS.MsgWithdrawDelegatorReward
  | MODELS.MsgWithdrawValidatorCommission
)

export type CustomMessagetype = (
  MODELS.MsgUnblockUser
  | MODELS.MsgSaveProfile
  | MODELS.MsgDtagTransferRequest
  | MODELS.MsgDtagRefuseTransfer
  | MODELS.MsgDtagCancelTransfer
  | MODELS.MsgDtagAcceptTransfer
  | MODELS.MsgDeleteProfile
  | MODELS.MsgCreateRelationship
  | MODELS.MsgBlockUser
)
export type MessageType = DefaultMessageType | CustomMessagetype;

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
