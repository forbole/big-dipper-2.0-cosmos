import * as COMPONENTS from '@/components/msg';
import Tag from '@/components/tag';
import * as MODELS from '@/models';
import type { Log } from '@/models/msg/types';
import isKeyOf from '@/utils/isKeyOf';
import type { TFunction } from '@/hooks/useAppTranslation';
import * as R from 'ramda';
import { FC } from 'react';

// =====================================
// DO NOT UPDATE IF THIS IS A FORK.
// ONLY COSMOS SDK DEFAULT MESSAGES HERE.
// Please use `customTypeToModel` below for custom message types
// =====================================
const defaultTypeToModel = {
  // ========================
  // staking
  // ========================
  '/cosmos.staking.v1beta1.MsgDelegate': {
    model: MODELS.MsgDelegate,
    content: COMPONENTS.Delegate,
    tagTheme: 'one',
    tagDisplay: 'txDelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    model: MODELS.MsgRedelegate,
    content: COMPONENTS.Redelegate,
    tagTheme: 'one',
    tagDisplay: 'txRedelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    model: MODELS.MsgUndelegate,
    content: COMPONENTS.Undelegate,
    tagTheme: 'one',
    tagDisplay: 'txUndelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    model: MODELS.MsgCreateValidator,
    content: COMPONENTS.CreateValidator,
    tagTheme: 'one',
    tagDisplay: 'txCreateValidatorLabel',
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    model: MODELS.MsgEditValidator,
    content: COMPONENTS.EditValidator,
    tagTheme: 'one',
    tagDisplay: 'txEditValidatorLabel',
  },
  // ========================
  // bank
  // ========================
  '/cosmos.bank.v1beta1.MsgSend': {
    model: MODELS.MsgSend,
    content: COMPONENTS.Send,
    tagTheme: 'two',
    tagDisplay: 'txSendLabel',
  },
  '/cosmos.bank.v1beta1.MsgMultiSend': {
    model: MODELS.MsgMultiSend,
    content: COMPONENTS.Multisend,
    tagTheme: 'two',
    tagDisplay: 'txMultisendLabel',
  },
  // ========================
  // crisis
  // ========================
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant': {
    model: MODELS.MsgVerifyInvariant,
    content: COMPONENTS.VerifyInvariant,
    tagTheme: 'three',
    tagDisplay: 'txVerifyInvariantLabel',
  },
  // ========================
  // slashing
  // ========================
  '/cosmos.slashing.v1beta1.MsgUnjail': {
    model: MODELS.MsgUnjail,
    content: COMPONENTS.Unjail,
    tagTheme: 'five',
    tagDisplay: 'txUnjailLabel',
  },
  // ========================
  // distribution
  // ========================
  '/cosmos.distribution.v1beta1.MsgFundCommunityPool': {
    model: MODELS.MsgFundCommunityPool,
    content: COMPONENTS.Fund,
    tagTheme: 'six',
    tagDisplay: 'txFundLabel',
  },
  '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
    model: MODELS.MsgSetWithdrawAddress,
    content: COMPONENTS.SetWithdrawalAddress,
    tagTheme: 'six',
    tagDisplay: 'txsetRewardAddressLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
    model: MODELS.MsgWithdrawDelegatorReward,
    content: COMPONENTS.WithdrawReward,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawRewardLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': {
    model: MODELS.MsgWithdrawValidatorCommission,
    content: COMPONENTS.WithdrawCommission,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawCommissionLabel',
  },
  // ========================
  // governance
  // ========================
  '/cosmos.gov.v1beta1.MsgDeposit': {
    model: MODELS.MsgDeposit,
    content: COMPONENTS.DepositProposal,
    tagTheme: 'seven',
    tagDisplay: 'txDepositLabel',
  },
  '/cosmos.gov.v1beta1.MsgVote': {
    model: MODELS.MsgVote,
    content: COMPONENTS.Vote,
    tagTheme: 'seven',
    tagDisplay: 'txVoteLabel',
  },
  '/cosmos.gov.v1beta1.MsgSubmitProposal': {
    model: MODELS.MsgSubmitProposal,
    content: COMPONENTS.SubmitProposal,
    tagTheme: 'seven',
    tagDisplay: 'txSubmitProposalLabel',
  },
  // ========================
  // ibc client
  // ========================
  '/ibc.core.client.v1.MsgCreateClient': {
    model: MODELS.MsgCreateClient,
    content: COMPONENTS.CreateClient,
    tagTheme: 'nine',
    tagDisplay: 'txCreateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpdateClient': {
    model: MODELS.MsgUpdateClient,
    content: COMPONENTS.UpdateClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpdateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpgradeClient': {
    model: MODELS.MsgUpgradeClient,
    content: COMPONENTS.UpgradeClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpgradeClientLabel',
  },
  '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
    model: MODELS.MsgSubmitMisbehaviour,
    content: COMPONENTS.SubmitMisbehaviour,
    tagTheme: 'nine',
    tagDisplay: 'txSubmitMisbehaviourLabel',
  },
  '/ibc.core.client.v1.Height': {
    model: MODELS.MsgHeight,
    content: COMPONENTS.Height,
    tagTheme: 'nine',
    tagDisplay: 'txHeightLabel',
  },
  // ========================
  // ibc channel
  // ========================
  '/ibc.core.channel.v1.MsgRecvPacket': {
    model: MODELS.MsgReceivePacket,
    content: COMPONENTS.ReceivePacket,
    tagTheme: 'nine',
    tagDisplay: 'txRecvPacketLabel',
  },
  '/ibc.core.channel.v1.Channel': {
    model: MODELS.MsgChannel,
    content: COMPONENTS.Channel,
    tagTheme: 'nine',
    tagDisplay: 'txChannelLabel',
  },
  '/ibc.core.channel.v1.Counterparty': {
    model: MODELS.MsgCounterpartyChannel,
    content: COMPONENTS.CounterpartyChannel,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.channel.v1.Packet': {
    model: MODELS.MsgPacket,
    content: COMPONENTS.Packet,
    tagTheme: 'nine',
    tagDisplay: 'txPacketLabel',
  },
  '/ibc.core.channel.v1.MsgAcknowledgement': {
    model: MODELS.MsgAcknowledgement,
    content: COMPONENTS.Acknowledgement,
    tagTheme: 'nine',
    tagDisplay: 'txAcknowledgementLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
    model: MODELS.MsgChannelCloseConfirm,
    content: COMPONENTS.ChannelCloseConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseInit': {
    model: MODELS.MsgChannelCloseInit,
    content: COMPONENTS.ChannelCloseInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenAck': {
    model: MODELS.MsgChannelOpenAck,
    content: COMPONENTS.ChannelOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenAckLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
    model: MODELS.MsgChannelOpenConfirm,
    content: COMPONENTS.ChannelOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenInit': {
    model: MODELS.MsgChannelOpenInit,
    content: COMPONENTS.ChannelOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenTry': {
    model: MODELS.MsgChannelOpenTry,
    content: COMPONENTS.ChannelOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenTryLabel',
  },
  '/ibc.core.channel.v1.MsgTimeout': {
    model: MODELS.MsgTimeout,
    content: COMPONENTS.Timeout,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutLabel',
  },
  '/ibc.core.channel.v1.MsgTimeoutOnClose': {
    model: MODELS.MsgTimeoutOnClose,
    content: COMPONENTS.TimeoutOnClose,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutOnCloseLabel',
  },
  // ========================
  // ibc connection
  // ========================
  '/ibc.core.connection.v1.MsgConnectionOpenAck': {
    model: MODELS.MsgConnectionOpenAck,
    content: COMPONENTS.ConnectionOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenAckLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
    model: MODELS.MsgConnectionOpenConfirm,
    content: COMPONENTS.ConnectionOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenConfirmLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenInit': {
    model: MODELS.MsgConnectionOpenInit,
    content: COMPONENTS.ConnectionOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenInitLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenTry': {
    model: MODELS.MsgConnectionOpenTry,
    content: COMPONENTS.ConnectionOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenTryLabel',
  },
  '/ibc.core.connection.v1.ConnectionEnd': {
    model: MODELS.MsgConnectionEnd,
    content: COMPONENTS.ConnectionEnd,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionEndLabel',
  },
  '/ibc.core.connection.v1.Counterparty': {
    model: MODELS.MsgCounterpartyConnection,
    content: COMPONENTS.CounterpartyConnection,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.connection.v1.Version': {
    model: MODELS.MsgVersion,
    content: COMPONENTS.Version,
    tagTheme: 'nine',
    tagDisplay: 'txVersionLabel',
  },
  // ========================
  // ibc transfer
  // ========================
  '/ibc.applications.transfer.v1.MsgTransfer': {
    model: MODELS.MsgTransfer,
    content: COMPONENTS.Transfer,
    tagTheme: 'ten',
    tagDisplay: 'txTransferLabel',
  },
  // ========================
  // authz
  // ========================
  '/cosmos.authz.v1beta1.MsgGrant': {
    model: MODELS.MsgGrant,
    content: COMPONENTS.Grant,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgGrant',
  },
  '/cosmos.authz.v1beta1.MsgRevoke': {
    model: MODELS.MsgRevoke,
    content: COMPONENTS.Revoke,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgRevoke',
  },
  '/cosmos.authz.v1beta1.MsgExec': {
    model: MODELS.MsgExec,
    content: COMPONENTS.Exec,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgExec',
  },
  // ========================
  // feegrant
  // ========================
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    model: MODELS.MsgGrantAllowance,
    content: COMPONENTS.GrantAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgGrantAllowance',
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    model: MODELS.MsgRevokeAllowance,
    content: COMPONENTS.RevokeAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgRevokeAllowance',
  },
  // ========================
  // vesting
  // ========================
  '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': {
    model: MODELS.MsgCreateVestingAccount,
    content: COMPONENTS.CreateVestingAccount,
    tagTheme: 'fifteen',
    tagDisplay: 'MsgCreateVestingAccount',
  },
  '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount': {
    model: MODELS.MsgCreatePeriodicVestingAccount,
    content: COMPONENTS.CreatePeriodicVestingAccount,
    tagTheme: 'fifteen',
    tagDisplay: 'MsgCreatePeriodicVestingAccount',
  },
};
type DefaultTypeToModel = typeof defaultTypeToModel;

// =====================================
// Update your chain's message types here
// =====================================
const customTypeToModel = {
  // ========================
  // profiles
  // ========================
  '/desmos.profiles.v3.MsgSaveProfile': {
    model: MODELS.MsgSaveProfile,
    content: COMPONENTS.SaveProfile,
    tagTheme: 'four',
    tagDisplay: 'txSaveProfileLabel',
  },
  '/desmos.profiles.v3.MsgDeleteProfile': {
    model: MODELS.MsgDeleteProfile,
    content: COMPONENTS.DeleteProfile,
    tagTheme: 'four',
    tagDisplay: 'txDeleteProfileLabel',
  },
  '/desmos.profiles.v3.MsgCreateRelationship': {
    model: MODELS.MsgCreateRelationship,
    content: COMPONENTS.CreateRelationship,
    tagTheme: 'four',
    tagDisplay: 'txCreateRelationshipLabel',
  },
  '/desmos.profiles.v3.MsgRequestDTagTransfer': {
    model: MODELS.MsgDtagTransferRequest,
    content: COMPONENTS.DtagTransferRequest,
    tagTheme: 'four',
    tagDisplay: 'txRequestDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgAcceptDTagTransfer': {
    model: MODELS.MsgDtagAcceptTransfer,
    content: COMPONENTS.DtagAcceptTransfer,
    tagTheme: 'four',
    tagDisplay: 'txAcceptDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgCancelDTagTransfer': {
    model: MODELS.MsgDtagCancelTransfer,
    content: COMPONENTS.DtagCancelTransfer,
    tagTheme: 'four',
    tagDisplay: 'txCancelDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgRefuseDTagTransfer': {
    model: MODELS.MsgDtagRefuseTransfer,
    content: COMPONENTS.DtagRefuseTransfer,
    tagTheme: 'four',
    tagDisplay: 'txRefuseDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgBlockUser': {
    model: MODELS.MsgBlockUser,
    content: COMPONENTS.BlockUser,
    tagTheme: 'four',
    tagDisplay: 'txBlockUserLabel',
  },
  '/desmos.profiles.v3.MsgUnblockUser': {
    model: MODELS.MsgUnblockUser,
    content: COMPONENTS.UnBlockUser,
    tagTheme: 'four',
    tagDisplay: 'txUnblockUserLabel',
  },
  '/desmos.profiles.v3.MsgLinkChainAccount': {
    model: MODELS.MsgLinkChainAccount,
    content: COMPONENTS.LinkChainAccount,
    tagTheme: 'four',
    tagDisplay: 'txLinkChainAccount',
  },
  '/desmos.profiles.v3.MsgUnlinkChainAccount': {
    model: MODELS.MsgUnlinkChainAccount,
    content: COMPONENTS.UnlinkChainAccount,
    tagTheme: 'four',
    tagDisplay: 'txMsgUnlinkChainAccount',
  },
  '/desmos.profiles.v3.MsgLinkApplication': {
    model: MODELS.MsgLinkApplication,
    content: COMPONENTS.LinkApplication,
    tagTheme: 'four',
    tagDisplay: 'txMsgLinkApplication',
  },
  '/desmos.profiles.v3.MsgUnlinkApplication': {
    model: MODELS.MsgUnlinkApplication,
    content: COMPONENTS.UnlinkApplication,
    tagTheme: 'four',
    tagDisplay: 'txMsgUnlinkApplication',
  },
  '/desmos.profiles.v3.MsgSetDefaultExternalAddress': {
    model: MODELS.MsgSetDefaultExternalAddress,
    content: COMPONENTS.SetDefaultExternalAddress,
    tagTheme: 'four',
    tagDisplay: 'txMsgSetDefaultExternalAddress',
  },
  // ========================
  // posts
  // ========================
  '/desmos.posts.v2.MsgCreatePost': {
    model: MODELS.MsgCreatePost,
    content: COMPONENTS.CreatePost,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreatePost',
  },
  '/desmos.posts.v3.MsgCreatePost': {
    model: MODELS.MsgCreatePost,
    content: COMPONENTS.CreatePost,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreatePost',
  },
  '/desmos.posts.v2.MsgEditPost': {
    model: MODELS.MsgEditPost,
    content: COMPONENTS.EditPost,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditPost',
  },
  '/desmos.posts.v3.MsgEditPost': {
    model: MODELS.MsgEditPost,
    content: COMPONENTS.EditPost,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditPost',
  },
  '/desmos.posts.v2.MsgDeletePost': {
    model: MODELS.MsgDeletePost,
    content: COMPONENTS.DeletePost,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeletePost',
  },
  '/desmos.posts.v3.MsgDeletePost': {
    model: MODELS.MsgDeletePost,
    content: COMPONENTS.DeletePost,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeletePost',
  },
  '/desmos.posts.v3.MsgMovePost': {
    model: MODELS.MsgMovePost,
    content: COMPONENTS.MovePost,
    tagTheme: 'four',
    tagDisplay: 'txMsgMovePost',
  },
  '/desmos.posts.v3.MsgRequestPostOwnerTransfer': {
    model: MODELS.MsgRequestPostOwnerTransfer,
    content: COMPONENTS.RequestPostOwnerTransfer,
    tagTheme: 'four',
    tagDisplay: 'txMsgRequestPostOwnerTransfer',
  },
  '/desmos.posts.v3.MsgCancelPostOwnerTransferRequest': {
    model: MODELS.MsgCancelPostOwnerTransferRequest,
    content: COMPONENTS.CancelPostOwnerTransferRequest,
    tagTheme: 'four',
    tagDisplay: 'txMsgCancelPostOwnerTransferRequest',
  },
  '/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest': {
    model: MODELS.MsgAcceptPostOwnerTransferRequest,
    content: COMPONENTS.AcceptPostOwnerTransferRequest,
    tagTheme: 'four',
    tagDisplay: 'txMsgAcceptPostOwnerTransferRequest',
  },
  '/desmos.posts.v3.MsgRefusePostOwnerTransferRequest': {
    model: MODELS.MsgRefusePostOwnerTransferRequest,
    content: COMPONENTS.RefusePostOwnerTransferRequest,
    tagTheme: 'four',
    tagDisplay: 'txMsgRefusePostOwnerTransferRequest',
  },
  '/desmos.posts.v2.MsgAddPostAttachment': {
    model: MODELS.MsgAddPostAttachment,
    content: COMPONENTS.AddPostAttachment,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddPostAttachment',
  },
  '/desmos.posts.v3.MsgAddPostAttachment': {
    model: MODELS.MsgAddPostAttachment,
    content: COMPONENTS.AddPostAttachment,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddPostAttachment',
  },
  '/desmos.posts.v2.MsgRemovePostAttachment': {
    model: MODELS.MsgRemovePostAttachment,
    content: COMPONENTS.RemovePostAttachment,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemovePostAttachment',
  },
  '/desmos.posts.v3.MsgRemovePostAttachment': {
    model: MODELS.MsgRemovePostAttachment,
    content: COMPONENTS.RemovePostAttachment,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemovePostAttachment',
  },
  '/desmos.posts.v2.MsgAnswerPoll': {
    model: MODELS.MsgAnswerPoll,
    content: COMPONENTS.AnswerPoll,
    tagTheme: 'four',
    tagDisplay: 'txMsgAnswerPoll',
  },
  '/desmos.posts.v3.MsgAnswerPoll': {
    model: MODELS.MsgAnswerPoll,
    content: COMPONENTS.AnswerPoll,
    tagTheme: 'four',
    tagDisplay: 'txMsgAnswerPoll',
  },
  // ========================
  // reactions
  // ========================
  '/desmos.reactions.v1.MsgAddReaction': {
    model: MODELS.MsgAddReaction,
    content: COMPONENTS.AddReaction,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddReaction',
  },
  '/desmos.reactions.v1.MsgRemoveReaction': {
    model: MODELS.MsgRemoveReaction,
    content: COMPONENTS.RemoveReaction,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemoveReaction',
  },
  '/desmos.reactions.v1.MsgAddRegisteredReaction': {
    model: MODELS.MsgAddRegisteredReaction,
    content: COMPONENTS.AddRegisteredReaction,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddRegisteredReaction',
  },
  '/desmos.reactions.v1.MsgEditRegisteredReaction': {
    model: MODELS.MsgEditRegisteredReaction,
    content: COMPONENTS.EditRegisteredReaction,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditRegisteredReaction',
  },
  '/desmos.reactions.v1.MsgRemoveRegisteredReaction': {
    model: MODELS.MsgRemoveRegisteredReaction,
    content: COMPONENTS.RemoveRegisteredReaction,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemoveRegisteredReaction',
  },
  '/desmos.reactions.v1.MsgSetReactionsParams': {
    model: MODELS.MsgSetReactionsParams,
    content: COMPONENTS.SetReactionsParams,
    tagTheme: 'four',
    tagDisplay: 'txMsgSetReactionsParams',
  },
  // ========================
  // reports
  // ========================
  '/desmos.reports.v1.MsgCreateReport': {
    model: MODELS.MsgCreateReport,
    content: COMPONENTS.CreateReport,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreateReport',
  },
  '/desmos.reports.v1.MsgDeleteReport': {
    model: MODELS.MsgDeleteReport,
    content: COMPONENTS.DeleteReport,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeleteReport',
  },
  '/desmos.reports.v1.MsgSupportStandardReason': {
    model: MODELS.MsgSupportStandardReason,
    content: COMPONENTS.SupportStandardReason,
    tagTheme: 'four',
    tagDisplay: 'txMsgSupportStandardReason',
  },
  '/desmos.reports.v1.MsgAddReason': {
    model: MODELS.MsgAddReason,
    content: COMPONENTS.AddReason,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddReason',
  },
  '/desmos.reports.v1.MsgRemoveReason': {
    model: MODELS.MsgRemoveReason,
    content: COMPONENTS.RemoveReason,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemoveReason',
  },
  // ========================
  // subspaces
  // ========================
  '/desmos.subspaces.v3.MsgCreateSubspace': {
    model: MODELS.MsgCreateSubspace,
    content: COMPONENTS.CreateSubspace,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreateSubspace',
  },
  '/desmos.subspaces.v3.MsgEditSubspace': {
    model: MODELS.MsgEditSubspace,
    content: COMPONENTS.EditSubspace,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditSubspace',
  },
  '/desmos.subspaces.v3.MsgDeleteSubspace': {
    model: MODELS.MsgDeleteSubspace,
    content: COMPONENTS.DeleteSubspace,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeleteSubspace',
  },
  '/desmos.subspaces.v3.MsgCreateSection': {
    model: MODELS.MsgCreateSection,
    content: COMPONENTS.CreateSection,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreateSection',
  },
  '/desmos.subspaces.v3.MsgEditSection': {
    model: MODELS.MsgEditSection,
    content: COMPONENTS.EditSection,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditSection',
  },
  '/desmos.subspaces.v3.MsgMoveSection': {
    model: MODELS.MsgMoveSection,
    content: COMPONENTS.MoveSection,
    tagTheme: 'four',
    tagDisplay: 'txMsgMoveSection',
  },
  '/desmos.subspaces.v3.MsgDeleteSection': {
    model: MODELS.MsgDeleteSection,
    content: COMPONENTS.DeleteSection,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeleteSection',
  },
  '/desmos.subspaces.v3.MsgCreateUserGroup': {
    model: MODELS.MsgCreateUserGroup,
    content: COMPONENTS.CreateUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreateUserGroup',
  },
  '/desmos.subspaces.v3.MsgEditUserGroup': {
    model: MODELS.MsgEditUserGroup,
    content: COMPONENTS.EditUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgEditUserGroup',
  },
  '/desmos.subspaces.v3.MsgMoveUserGroup': {
    model: MODELS.MsgMoveUserGroup,
    content: COMPONENTS.MoveUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgMoveUserGroup',
  },
  '/desmos.subspaces.v3.MsgSetUserGroupPermissions': {
    model: MODELS.MsgSetUserGroupPermissions,
    content: COMPONENTS.SetUserGroupPermissions,
    tagTheme: 'four',
    tagDisplay: 'txMsgSetUserGroupPermissions',
  },
  '/desmos.subspaces.v3.MsgDeleteUserGroup': {
    model: MODELS.MsgDeleteUserGroup,
    content: COMPONENTS.DeleteUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgDeleteUserGroup',
  },
  '/desmos.subspaces.v3.MsgAddUserToUserGroup': {
    model: MODELS.MsgAddUserToUserGroup,
    content: COMPONENTS.AddUserToUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgAddUserToUserGroup',
  },
  '/desmos.subspaces.v3.MsgRemoveUserFromUserGroup': {
    model: MODELS.MsgRemoveUserFromUserGroup,
    content: COMPONENTS.RemoveUserFromUserGroup,
    tagTheme: 'four',
    tagDisplay: 'txMsgRemoveUserFromUserGroup',
  },
  '/desmos.subspaces.v3.MsgSetUserPermissions': {
    model: MODELS.MsgSetUserPermissions,
    content: COMPONENTS.SetUserPermissions,
    tagTheme: 'four',
    tagDisplay: 'txMsgSetUserPermissions',
  },
  // ========================
  // tokenfactory
  // ========================
    '/desmos.tokenfactory.v1.MsgCreateDenom': {
    model: MODELS.MsgCreateDenom,
    content: COMPONENTS.CreateDenom,
    tagTheme: 'four',
    tagDisplay: 'txMsgCreateDenom',
  },
    '/desmos.tokenfactory.v1.MsgMint': {
    model: MODELS.MsgMint,
    content: COMPONENTS.Mint,
    tagTheme: 'four',
    tagDisplay: 'txMsgMint',
  },
    '/desmos.tokenfactory.v1.MsgBurn': {
    model: MODELS.MsgBurn,
    content: COMPONENTS.Burn,
    tagTheme: 'four',
    tagDisplay: 'txMsgBurn',
  },
    '/desmos.tokenfactory.v1.MsgSetDenomMetadata': {
    model: MODELS.MsgSetDenomMetadata,
    content: COMPONENTS.SetDenomMetadata,
    tagTheme: 'four',
    tagDisplay: 'txMsgSetDenomMetadata',
  },
    '/desmos.tokenfactory.v1.MsgUpdateParams': {
    model: MODELS.MsgUpdateParams,
    content: COMPONENTS.UpdateParams,
    tagTheme: 'four',
    tagDisplay: 'txMsgUpdateParams',
  },
};
type CustomTypeToModel = typeof customTypeToModel;

type TypeToModel = DefaultTypeToModel & CustomTypeToModel extends infer R1
  ? { [K in keyof R1]: R1[K] }
  : never;

type Data = TypeToModel[keyof TypeToModel];

const getDataByType = (type: string): Data | null => {
  if (isKeyOf(type, defaultTypeToModel) && defaultTypeToModel[type])
    return defaultTypeToModel[type];

  if (isKeyOf(type, customTypeToModel) && customTypeToModel[type]) return customTypeToModel[type];

  return null;
};

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string): Data['model'] => {
  const data = getDataByType(type);
  if (data) {
    return data.model;
  }

  return MODELS.MsgUnknown as Data['model'];
};

/**
 * Helper function to correctly display the correct UI
 * @param type Model type
 */
export const getMessageByType = (message: unknown, viewRaw: boolean, t: TFunction) => {
  const { type } = (message as { type: string }) ?? {};
  type resultType = {
    content: FC<{ message: unknown }>;
    tagDisplay: string;
    tagTheme: TagTheme;
  };
  let results: resultType = {
    content: COMPONENTS.Unknown as resultType['content'],
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content as resultType['content'],
      tagDisplay: data.tagDisplay,
      tagTheme: data.tagTheme as resultType['tagTheme'],
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = COMPONENTS.Unknown as resultType['content'];
  }

  return {
    type: <Tag value={t(`message_labels:${results.tagDisplay}`)} theme={results.tagTheme} />,
    message: <results.content message={message} />,
  };
};

export const convertMsgsToModels = (
  transaction?: {
    messages?: Array<{
      '@type': string;
    }>;
    logs?: Array<Log>;
  } | null
) => {
  const messages =
    transaction?.messages?.map((msg: object, i: number) => {
      const model = getMessageModelByType(R.pathOr<string>('', ['@type'], msg));
      if (model === MODELS.MsgWithdrawDelegatorReward) {
        const log = transaction?.logs?.[i];
        return MODELS.MsgWithdrawDelegatorReward.fromJson(msg, log);
      }
      if (model === MODELS.MsgWithdrawValidatorCommission) {
        const log = transaction?.logs?.[i];
        return MODELS.MsgWithdrawValidatorCommission.fromJson(msg, log);
      }
      return model.fromJson(msg);
    }) ?? [];

  return messages;
};
