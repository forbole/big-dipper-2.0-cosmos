import * as COMPONENTS from '@/components/msg';
import Tag from '@/components/tag';
import * as MODELS from '@/models';
import type { Log } from '@/models/msg/types';
import isKeyOf from '@/utils/isKeyOf';
import { TFunction } from 'next-i18next';
import * as R from 'ramda';
import { ComponentProps, FC } from 'react';

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
    tagTheme: 'six',
    tagDisplay: 'txDelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    model: MODELS.MsgRedelegate,
    content: COMPONENTS.Redelegate,
    tagTheme: 'six',
    tagDisplay: 'txRedelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    model: MODELS.MsgUndelegate,
    content: COMPONENTS.Undelegate,
    tagTheme: 'six',
    tagDisplay: 'txUndelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    model: MODELS.MsgCreateValidator,
    content: COMPONENTS.CreateValidator,
    tagTheme: 'six',
    tagDisplay: 'txCreateValidatorLabel',
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    model: MODELS.MsgEditValidator,
    content: COMPONENTS.EditValidator,
    tagTheme: 'six',
    tagDisplay: 'txEditValidatorLabel',
  },
  // ========================
  // bank
  // ========================
  '/cosmos.bank.v1beta1.MsgSend': {
    model: MODELS.MsgSend,
    content: COMPONENTS.Send,
    tagTheme: 'six',
    tagDisplay: 'txSendLabel',
  },
  '/cosmos.bank.v1beta1.MsgMultiSend': {
    model: MODELS.MsgMultiSend,
    content: COMPONENTS.Multisend,
    tagTheme: 'six',
    tagDisplay: 'txMultisendLabel',
  },
  // ========================
  // crisis
  // ========================
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant': {
    model: MODELS.MsgVerifyInvariant,
    content: COMPONENTS.VerifyInvariant,
    tagTheme: 'six',
    tagDisplay: 'txVerifyInvariantLabel',
  },
  // ========================
  // slashing
  // ========================
  '/cosmos.slashing.v1beta1.MsgUnjail': {
    model: MODELS.MsgUnjail,
    content: COMPONENTS.Unjail,
    tagTheme: 'six',
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
    tagTheme: 'six',
    tagDisplay: 'txDepositLabel',
  },
  '/cosmos.gov.v1beta1.MsgVote': {
    model: MODELS.MsgVote,
    content: COMPONENTS.Vote,
    tagTheme: 'six',
    tagDisplay: 'txVoteLabel',
  },
  '/cosmos.gov.v1beta1.MsgSubmitProposal': {
    model: MODELS.MsgSubmitProposal,
    content: COMPONENTS.SubmitProposal,
    tagTheme: 'six',
    tagDisplay: 'txSubmitProposalLabel',
  },
  // ========================
  // ibc client
  // ========================
  '/ibc.core.client.v1.MsgCreateClient': {
    model: MODELS.MsgCreateClient,
    content: COMPONENTS.CreateClient,
    tagTheme: 'six',
    tagDisplay: 'txCreateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpdateClient': {
    model: MODELS.MsgUpdateClient,
    content: COMPONENTS.UpdateClient,
    tagTheme: 'six',
    tagDisplay: 'txUpdateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpgradeClient': {
    model: MODELS.MsgUpgradeClient,
    content: COMPONENTS.UpgradeClient,
    tagTheme: 'six',
    tagDisplay: 'txUpgradeClientLabel',
  },
  '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
    model: MODELS.MsgSubmitMisbehaviour,
    content: COMPONENTS.SubmitMisbehaviour,
    tagTheme: 'six',
    tagDisplay: 'txSubmitMisbehaviourLabel',
  },
  '/ibc.core.client.v1.Height': {
    model: MODELS.MsgHeight,
    content: COMPONENTS.Height,
    tagTheme: 'six',
    tagDisplay: 'txHeightLabel',
  },
  // ========================
  // ibc channel
  // ========================
  '/ibc.core.channel.v1.MsgRecvPacket': {
    model: MODELS.MsgReceivePacket,
    content: COMPONENTS.ReceivePacket,
    tagTheme: 'six',
    tagDisplay: 'txRecvPacketLabel',
  },
  '/ibc.core.channel.v1.Channel': {
    model: MODELS.MsgChannel,
    content: COMPONENTS.Channel,
    tagTheme: 'six',
    tagDisplay: 'txChannelLabel',
  },
  '/ibc.core.channel.v1.Counterparty': {
    model: MODELS.MsgCounterpartyChannel,
    content: COMPONENTS.CounterpartyChannel,
    tagTheme: 'six',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.channel.v1.Packet': {
    model: MODELS.MsgPacket,
    content: COMPONENTS.Packet,
    tagTheme: 'six',
    tagDisplay: 'txPacketLabel',
  },
  '/ibc.core.channel.v1.MsgAcknowledgement': {
    model: MODELS.MsgAcknowledgement,
    content: COMPONENTS.Acknowledgement,
    tagTheme: 'six',
    tagDisplay: 'txAcknowledgementLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
    model: MODELS.MsgChannelCloseConfirm,
    content: COMPONENTS.ChannelCloseConfirm,
    tagTheme: 'six',
    tagDisplay: 'txChannelCloseConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseInit': {
    model: MODELS.MsgChannelCloseInit,
    content: COMPONENTS.ChannelCloseInit,
    tagTheme: 'six',
    tagDisplay: 'txChannelCloseInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenAck': {
    model: MODELS.MsgChannelOpenAck,
    content: COMPONENTS.ChannelOpenAck,
    tagTheme: 'six',
    tagDisplay: 'txChannelOpenAckLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
    model: MODELS.MsgChannelOpenConfirm,
    content: COMPONENTS.ChannelOpenConfirm,
    tagTheme: 'six',
    tagDisplay: 'txChannelOpenConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenInit': {
    model: MODELS.MsgChannelOpenInit,
    content: COMPONENTS.ChannelOpenInit,
    tagTheme: 'six',
    tagDisplay: 'txChannelOpenInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenTry': {
    model: MODELS.MsgChannelOpenTry,
    content: COMPONENTS.ChannelOpenTry,
    tagTheme: 'six',
    tagDisplay: 'txChannelOpenTryLabel',
  },
  '/ibc.core.channel.v1.MsgTimeout': {
    model: MODELS.MsgTimeout,
    content: COMPONENTS.Timeout,
    tagTheme: 'six',
    tagDisplay: 'txTimeoutLabel',
  },
  '/ibc.core.channel.v1.MsgTimeoutOnClose': {
    model: MODELS.MsgTimeoutOnClose,
    content: COMPONENTS.TimeoutOnClose,
    tagTheme: 'six',
    tagDisplay: 'txTimeoutOnCloseLabel',
  },
  // ========================
  // ibc connection
  // ========================
  '/ibc.core.connection.v1.MsgConnectionOpenAck': {
    model: MODELS.MsgConnectionOpenAck,
    content: COMPONENTS.ConnectionOpenAck,
    tagTheme: 'six',
    tagDisplay: 'txConnectionOpenAckLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
    model: MODELS.MsgConnectionOpenConfirm,
    content: COMPONENTS.ConnectionOpenConfirm,
    tagTheme: 'six',
    tagDisplay: 'txConnectionOpenConfirmLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenInit': {
    model: MODELS.MsgConnectionOpenInit,
    content: COMPONENTS.ConnectionOpenInit,
    tagTheme: 'six',
    tagDisplay: 'txConnectionOpenInitLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenTry': {
    model: MODELS.MsgConnectionOpenTry,
    content: COMPONENTS.ConnectionOpenTry,
    tagTheme: 'six',
    tagDisplay: 'txConnectionOpenTryLabel',
  },
  '/ibc.core.connection.v1.ConnectionEnd': {
    model: MODELS.MsgConnectionEnd,
    content: COMPONENTS.ConnectionEnd,
    tagTheme: 'six',
    tagDisplay: 'txConnectionEndLabel',
  },
  '/ibc.core.connection.v1.Counterparty': {
    model: MODELS.MsgCounterpartyConnection,
    content: COMPONENTS.CounterpartyConnection,
    tagTheme: 'six',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.connection.v1.Version': {
    model: MODELS.MsgVersion,
    content: COMPONENTS.Version,
    tagTheme: 'six',
    tagDisplay: 'txVersionLabel',
  },
  // ========================
  // ibc transfer
  // ========================
  '/ibc.applications.transfer.v1.MsgTransfer': {
    model: MODELS.MsgTransfer,
    content: COMPONENTS.Transfer,
    tagTheme: 'six',
    tagDisplay: 'txTransferLabel',
  },
  // ========================
  // authz
  // ========================
  '/cosmos.authz.v1beta1.MsgGrant': {
    model: MODELS.MsgGrant,
    content: COMPONENTS.Grant,
    tagTheme: 'six',
    tagDisplay: 'MsgGrant',
  },
  '/cosmos.authz.v1beta1.MsgRevoke': {
    model: MODELS.MsgRevoke,
    content: COMPONENTS.Revoke,
    tagTheme: 'six',
    tagDisplay: 'MsgRevoke',
  },
  '/cosmos.authz.v1beta1.MsgExec': {
    model: MODELS.MsgExec,
    content: COMPONENTS.Exec,
    tagTheme: 'six',
    tagDisplay: 'MsgExec',
  },
  // ========================
  // feegrant
  // ========================
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    model: MODELS.MsgGrantAllowance,
    content: COMPONENTS.GrantAllowance,
    tagTheme: 'six',
    tagDisplay: 'MsgGrantAllowance',
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    model: MODELS.MsgRevokeAllowance,
    content: COMPONENTS.RevokeAllowance,
    tagTheme: 'six',
    tagDisplay: 'MsgRevokeAllowance',
  },
  // ========================
  // vesting
  // ========================
  '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': {
    model: MODELS.MsgCreateVestingAccount,
    content: COMPONENTS.CreateVestingAccount,
    tagTheme: 'six',
    tagDisplay: 'MsgCreateVestingAccount',
  },
  '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount': {
    model: MODELS.MsgCreatePeriodicVestingAccount,
    content: COMPONENTS.CreatePeriodicVestingAccount,
    tagTheme: 'six',
    tagDisplay: 'MsgCreatePeriodicVestingAccount',
  },
};
type DefaultTypeToModel = typeof defaultTypeToModel;

// =====================================
// Update your chain's message types here
// The tagTheme six the color of the tag.
// =====================================
const customTypeToModel = {
  // ========================
  // profiles
  // ========================
  '/desmos.profiles.v3.MsgSaveProfile': {
    model: MODELS.MsgSaveProfile,
    content: COMPONENTS.SaveProfile,
    tagTheme: 'six',
    tagDisplay: 'txSaveProfileLabel',
  },
  '/desmos.profiles.v3.MsgDeleteProfile': {
    model: MODELS.MsgDeleteProfile,
    content: COMPONENTS.DeleteProfile,
    tagTheme: 'six',
    tagDisplay: 'txDeleteProfileLabel',
  },
  '/desmos.profiles.v3.MsgCreateRelationship': {
    model: MODELS.MsgCreateRelationship,
    content: COMPONENTS.CreateRelationship,
    tagTheme: 'six',
    tagDisplay: 'txCreateRelationshipLabel',
  },
  '/desmos.profiles.v3.MsgRequestDTagTransfer': {
    model: MODELS.MsgDtagTransferRequest,
    content: COMPONENTS.DtagTransferRequest,
    tagTheme: 'six',
    tagDisplay: 'txRequestDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgAcceptDTagTransfer': {
    model: MODELS.MsgDtagAcceptTransfer,
    content: COMPONENTS.DtagAcceptTransfer,
    tagTheme: 'six',
    tagDisplay: 'txAcceptDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgCancelDTagTransfer': {
    model: MODELS.MsgDtagCancelTransfer,
    content: COMPONENTS.DtagCancelTransfer,
    tagTheme: 'six',
    tagDisplay: 'txCancelDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgRefuseDTagTransfer': {
    model: MODELS.MsgDtagRefuseTransfer,
    content: COMPONENTS.DtagRefuseTransfer,
    tagTheme: 'six',
    tagDisplay: 'txRefuseDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgBlockUser': {
    model: MODELS.MsgBlockUser,
    content: COMPONENTS.BlockUser,
    tagTheme: 'six',
    tagDisplay: 'txBlockUserLabel',
  },
  '/desmos.profiles.v3.MsgUnblockUser': {
    model: MODELS.MsgUnblockUser,
    content: COMPONENTS.UnBlockUser,
    tagTheme: 'six',
    tagDisplay: 'txUnblockUserLabel',
  },
  '/coreum.asset.ft.v1.MsgIssue': {
    model: MODELS.MsgIssue,
    content: COMPONENTS.Issue,
    tagTheme: 'six',
    tagDisplay: 'msgIssueLabel',
  },
  '/coreum.asset.ft.v1.MsgMint': {
    model: MODELS.MsgMint,
    content: COMPONENTS.Mint,
    tagTheme: 'six',
    tagDisplay: 'msgMintLabel',
  },
  '/coreum.asset.ft.v1.MsgBurn': {
    model: MODELS.MsgBurn,
    content: COMPONENTS.Burn,
    tagTheme: 'six',
    tagDisplay: 'msgBurnLabel',
  },
  '/coreum.asset.ft.v1.MsgFreeze': {
    model: MODELS.MsgFreeze,
    content: COMPONENTS.Freeze,
    tagTheme: 'six',
    tagDisplay: 'msgFreezeLabel',
  },
  '/coreum.asset.ft.v1.MsgUnfreeze': {
    model: MODELS.MsgUnfreeze,
    content: COMPONENTS.Unfreeze,
    tagTheme: 'six',
    tagDisplay: 'msgUnfreezeLabel',
  },
  '/coreum.asset.ft.v1.MsgGloballyFreeze': {
    model: MODELS.MsgGloballyFreeze,
    content: COMPONENTS.GloballyFreeze,
    tagTheme: 'six',
    tagDisplay: 'msgGloballyFreezeLabel',
  },
  '/coreum.asset.ft.v1.MsgGloballyUnfreeze': {
    model: MODELS.MsgGloballyUnfreeze,
    content: COMPONENTS.GloballyUnfreeze,
    tagTheme: 'six',
    tagDisplay: 'msgGloballyUnfreezeLabel',
  },
  '/coreum.asset.ft.v1.MsgSetWhitelistedLimit': {
    model: MODELS.MsgSetWhitelistedLimit,
    content: COMPONENTS.SetWhitelistedLimit,
    tagTheme: 'six',
    tagDisplay: 'msgSetWhitelistedLimitLabel',
  },
  '/coreum.asset.nft.v1.MsgBurn': {
    model: MODELS.MsgNftBurn,
    content: COMPONENTS.NftBurn,
    tagTheme: 'six',
    tagDisplay: 'msgNftBurnLabel',
  },
  '/coreum.asset.nft.v1.MsgMint': {
    model: MODELS.MsgNftMint,
    content: COMPONENTS.NftMint,
    tagTheme: 'six',
    tagDisplay: 'msgNftMintLabel',
  },
  '/coreum.asset.nft.v1.MsgIssueClass': {
    model: MODELS.MsgNftIssueClass,
    content: COMPONENTS.NftIssueClass,
    tagTheme: 'six',
    tagDisplay: 'msgNftIssueClassLabel',
  },
  '/coreum.asset.nft.v1.MsgFreeze': {
    model: MODELS.MsgNftFreeze,
    content: COMPONENTS.NftFreeze,
    tagTheme: 'six',
    tagDisplay: 'msgNftFreezeLabel',
  },
  '/coreum.asset.nft.v1.MsgUnfreeze': {
    model: MODELS.MsgNftUnfreeze,
    content: COMPONENTS.NftUnfreeze,
    tagTheme: 'six',
    tagDisplay: 'msgNftUnfreezeLabel',
  },
  '/coreum.asset.nft.v1.MsgAddToWhitelist': {
    model: MODELS.MsgNftAddToWhitelist,
    content: COMPONENTS.NftAddToWhitelist,
    tagTheme: 'six',
    tagDisplay: 'msgNftAddToWhitelistLabel',
  },
  '/coreum.asset.nft.v1.MsgRemoveFromWhitelist': {
    model: MODELS.MsgNftRemoveFromWhitelist,
    content: COMPONENTS.NftRemoveFromWhitelist,
    tagTheme: 'six',
    tagDisplay: 'msgNftRemoveFromWhitelistLabel',
  },
  '/coreum.nft.v1beta1.MsgSend': {
    model: MODELS.MsgNftSend,
    content: COMPONENTS.NftSend,
    tagTheme: 'six',
    tagDisplay: 'msgNftSendLabel',
  },
  '/coreum.asset.ft.v1.MsgUpgradeTokenV1': {
    model: MODELS.MsgUpgradeToken,
    content: COMPONENTS.UpgradeToken,
    tagTheme: 'six',
    tagDisplay: 'msgUpgradeTokenLabel',
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
export const getMessageByType = <TMessage,>(message: TMessage, viewRaw: boolean, t: TFunction) => {
  const { type } = (message as { type: string }) ?? {};

  type ResultType = {
    content: FC<{ message: TMessage }>;
    tagDisplay: Data['tagDisplay'];
    tagTheme: TagTheme;
  };

  let results: ResultType = {
    content: COMPONENTS.Unknown as unknown as FC<{ message: TMessage }>,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content as unknown as FC<{ message: TMessage }>,
      tagDisplay: data.tagDisplay,
      tagTheme: data.tagTheme as ResultType['tagTheme'],
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = COMPONENTS.Unknown as unknown as FC<{ message: TMessage }>;
  }

  const Content = results.content;

  return {
    type: <Tag value={t(`message_labels:${results.tagDisplay}`)} theme={results.tagTheme} />,
    message: <Content message={message as unknown as ComponentProps<typeof Content>['message']} />,
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
