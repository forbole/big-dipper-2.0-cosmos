import * as MODELS from '@models';
import * as COMPONENTS from './components';

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

// ==============================================
// message react components
// ==============================================
export type DefaultMessageComponentType = (
  typeof COMPONENTS.Delegate
    | typeof COMPONENTS.Unknown
    | typeof COMPONENTS.Redelegate
    | typeof COMPONENTS.Undelegate
    | typeof COMPONENTS.CreateValidator
    | typeof COMPONENTS.EditValidator
    | typeof COMPONENTS.Send
    | typeof COMPONENTS.Multisend
    | typeof COMPONENTS.VerifyInvariant
    | typeof COMPONENTS.Unjail
    | typeof COMPONENTS.Fund
    | typeof COMPONENTS.SetWithdrawalAddress
    | typeof COMPONENTS.WithdrawReward
    | typeof COMPONENTS.DepositProposal
    | typeof COMPONENTS.Vote
    | typeof COMPONENTS.WithdrawCommission
    | typeof COMPONENTS.SubmitProposal
)

export type CustomMessageComponentType = (
  typeof COMPONENTS.SaveProfile
    | typeof COMPONENTS.DeleteProfile
    | typeof COMPONENTS.CreateRelationship
    | typeof COMPONENTS.DtagTransferRequest
    | typeof COMPONENTS.DtagAcceptTransfer
    | typeof COMPONENTS.DtagCancelTransfer
    | typeof COMPONENTS.DtagRefuseTransfer
    | typeof COMPONENTS.BlockUser
    | typeof COMPONENTS.UnBlockUser
)

export type MessageComponentType = DefaultMessageComponentType | CustomMessageComponentType;

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
