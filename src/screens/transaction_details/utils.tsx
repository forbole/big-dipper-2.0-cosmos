import * as MODELS from '@models';
import {
  Tag,
} from '@components';
import {
  MessageType, MessageComponentType,
} from './types';
import * as COMPONENTS from './components';

const getDataByType = (type: string) => {
  // =====================================
  // DO NOT UPDATE IF THIS IS A FORK.
  // Please use `customTypeToModel` below
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
  };

  // =====================================
  // Update your chain's message types here
  // =====================================
  const customTypeToModel = {
    // ========================
    // profiles
    // ========================
    '/desmos.profiles.v1beta1.MsgSaveProfile': {
      model: MODELS.MsgSaveProfile,
      content: COMPONENTS.SaveProfile,
      tagTheme: 'four',
      tagDisplay: 'txSaveProfileLabel',
    },
    '/desmos.profiles.v1beta1.MsgDeleteProfile': {
      model: MODELS.MsgDeleteProfile,
      content: COMPONENTS.DeleteProfile,
      tagTheme: 'four',
      tagDisplay: 'txDeleteProfileLabel',
    },
    '/desmos.profiles.v1beta1.MsgCreateRelationship': {
      model: MODELS.MsgCreateRelationship,
      content: COMPONENTS.CreateRelationship,
      tagTheme: 'four',
      tagDisplay: 'txCreateRelationshipLabel',
    },
    '/desmos.profiles.v1beta1.MsgRequestDTagTransfer': {
      model: MODELS.MsgDtagTransferRequest,
      content: COMPONENTS.DtagTransferRequest,
      tagTheme: 'four',
      tagDisplay: 'txRequestDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer': {
      model: MODELS.MsgDtagAcceptTransfer,
      content: COMPONENTS.DtagAcceptTransfer,
      tagTheme: 'four',
      tagDisplay: 'txAcceptDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgCancelDTagTransfer': {
      model: MODELS.MsgDtagCancelTransfer,
      content: COMPONENTS.DtagCancelTransfer,
      tagTheme: 'four',
      tagDisplay: 'txCancelDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer': {
      model: MODELS.MsgDtagRefuseTransfer,
      content: COMPONENTS.DtagRefuseTransfer,
      tagTheme: 'four',
      tagDisplay: 'txRefuseDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgBlockUser': {
      model: MODELS.MsgBlockUser,
      content: COMPONENTS.BlockUser,
      tagTheme: 'four',
      tagDisplay: 'txBlockUserLabel',
    },
    '/desmos.profiles.v1beta1.MsgUnblockUser': {
      model: MODELS.MsgUnblockUser,
      content: COMPONENTS.UnBlockUser,
      tagTheme: 'four',
      tagDisplay: 'txUnblockUserLabel',
    },
    // ========================
    // ibc client
    // ========================
    '/ibc.core.client.v1.MsgCreateClient': {
      model: MODELS.MsgCreateClient,
      content: COMPONENTS.CreateClient,
      tagTheme: 'eleven',
      tagDisplay: 'txCreateClientLabel',
    },
    '/ibc.core.client.v1.MsgUpdateClient': {
      model: MODELS.MsgUpdateClient,
      content: COMPONENTS.UpdateClient,
      tagTheme: 'eleven',
      tagDisplay: 'txUpdateClientLabel',
    },
    '/ibc.core.client.v1.MsgUpgradeClient': {
      model: MODELS.MsgUpgradeClient,
      content: COMPONENTS.UpgradeClient,
      tagTheme: 'eleven',
      tagDisplay: 'txUpgradeClientLabel',
    },
    '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
      model: MODELS.MsgSubmitMisbehaviour,
      content: COMPONENTS.SubmitMisbehaviour,
      tagTheme: 'eleven',
      tagDisplay: 'txSubmitMisbehaviourLabel',
    },
    '/ibc.core.client.v1.Height': {
      model: MODELS.MsgHeight,
      content: COMPONENTS.Height,
      tagTheme: 'eleven',
      tagDisplay: 'txHeightLabel',
    },
    // ========================
    // ibc channel
    // ========================
    '/ibc.core.channel.v1.MsgRecvPacket': {
      model: MODELS.MsgRecvPacket,
      content: COMPONENTS.RecvPacket,
      tagTheme: 'eleven',
      tagDisplay: 'txRecvPacketLabel',
    },
    '/ibc.core.channel.v1.Channel': {
      model: MODELS.Channel,
      content: COMPONENTS.Channel,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelLabel',
    },
    '/ibc.core.channel.v1.Counterparty': {
      model: MODELS.Counterparty,
      content: COMPONENTS.Counterparty,
      tagTheme: 'eleven',
      tagDisplay: 'txCounterpartyLabel',
    },
    '/ibc.core.channel.v1.Packet': {
      model: MODELS.Packet,
      content: COMPONENTS.Packet,
      tagTheme: 'eleven',
      tagDisplay: 'txPacketLabel',
    },
    '/ibc.core.channel.v1.MsgAcknowledgement': {
      model: MODELS.MsgAcknowledgement,
      content: COMPONENTS.Acknowledgement,
      tagTheme: 'eleven',
      tagDisplay: 'txAcknowledgementLabel',
    },
    '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
      model: MODELS.MsgChannelCloseConfirm,
      content: COMPONENTS.ChannelCloseConfirm,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelCloseConfirmLabel',
    },
    '/ibc.core.channel.v1.MsgChannelCloseInit': {
      model: MODELS.MsgChannelCloseInit,
      content: COMPONENTS.ChannelCloseInit,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelCloseInitLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenAck': {
      model: MODELS.MsgChannelOpenAck,
      content: COMPONENTS.ChannelOpenAck,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelOpenAckLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
      model: MODELS.MsgChannelOpenConfirm,
      content: COMPONENTS.ChannelOpenConfirm,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelOpenConfirmLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenInit': {
      model: MODELS.MsgChannelOpenInit,
      content: COMPONENTS.ChannelOpenInit,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelOpenInitLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenTry': {
      model: MODELS.MsgChannelOpenTry,
      content: COMPONENTS.ChannelOpenTry,
      tagTheme: 'eleven',
      tagDisplay: 'txChannelOpenTryLabel',
    },
    '/ibc.core.channel.v1.MsgTimeout': {
      model: MODELS.MsgTimeout,
      content: COMPONENTS.Timeout,
      tagTheme: 'eleven',
      tagDisplay: 'txTimeoutLabel',
    },
    '/ibc.core.channel.v1.MsgTimeoutOnClose': {
      model: MODELS.MsgTimeoutOnClose,
      content: COMPONENTS.TimeoutOnClose,
      tagTheme: 'eleven',
      tagDisplay: 'txTimeoutOnCloseLabel',
    },
    // ========================
    // ibc connection
    // ========================
    '/ibc.core.connection.v1.MsgConnectionOpenAck': {
      model: MODELS.MsgConnectionOpenAck,
      content: COMPONENTS.ConnectionOpenAck,
      tagTheme: 'twelve',
      tagDisplay: 'txConnectionOpenAckLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
      model: MODELS.MsgConnectionOpenConfirm,
      content: COMPONENTS.ConnectionOpenConfirm,
      tagTheme: 'twelve',
      tagDisplay: 'txConnectionOpenConfirmLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenInit': {
      model: MODELS.MsgConnectionOpenInit,
      content: COMPONENTS.ConnectionOpenInit,
      tagTheme: 'twelve',
      tagDisplay: 'txConnectionOpenInitLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenTry': {
      model: MODELS.MsgConnectionOpenTry,
      content: COMPONENTS.ConnectionOpenTry,
      tagTheme: 'twelve',
      tagDisplay: 'txConnectionOpenTryLabel',
    },
    '/ibc.core.connection.v1.ConnectionEnd': {
      model: MODELS.ConnectionEnd,
      content: COMPONENTS.ConnectionEnd,
      tagTheme: 'twelve',
      tagDisplay: 'txConnectionEndLabel',
    },
    '/ibc.core.connection.v1.Counterparty': {
      model: MODELS.Counterparty,
      content: COMPONENTS.Counterparty,
      tagTheme: 'twelve',
      tagDisplay: 'txCounterpartyLabel',
    },
    '/ibc.core.connection.v1.Version': {
      model: MODELS.Version,
      content: COMPONENTS.Version,
      tagTheme: 'twelve',
      tagDisplay: 'txVersionLabel',
    },
    // ========================
    // ibc transfer
    // ========================
    '/ibc.applications.transfer.v1.MsgTransfer': {
      model: MODELS.MsgTransfer,
      content: COMPONENTS.Transfer,
      tagTheme: 'eleven',
      tagDisplay: 'txTransferLabel',
    },
  };

  if (defaultTypeToModel[type]) return defaultTypeToModel[type];
  if (customTypeToModel[type]) return customTypeToModel[type];
  return null;
};

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string) => {
  const data = getDataByType(type);
  if (data) {
    return data.model;
  }

  return MODELS.MsgUnknown;
};

/**
 * Helper function to correctly display the correct UI
 * @param type Model type
 */
export const getMessageByType = (message: MessageType, viewRaw: boolean, t:any) => {
  const { type } = message;
  let results: {
    content: MessageComponentType;
    tagDisplay: string;
    tagTheme?: TagTheme;
    unknown?: boolean;
  } = {
    content: COMPONENTS.Unknown,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content,
      tagDisplay: data.tagDisplay,
      tagTheme: data.tagTheme,
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = COMPONENTS.Unknown;
  }

  return {
    type: <Tag
      value={t(`message_labels:${results.tagDisplay}`)}
      theme={results.tagTheme}
    />,
    message: <results.content message={message as any} />,
  };
};
