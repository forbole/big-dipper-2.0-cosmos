import Delegate from 'ui/components/msg/staking/delegate';
import Unknown from 'ui/components/msg/unknown';
import Redelegate from 'ui/components/msg/staking/redelegate';
import Undelegate from 'ui/components/msg/staking/undelegate';
import CreateValidator from 'ui/components/msg/staking/create_validator';
import EditValidator from 'ui/components/msg/staking/edit_validator';
import Send from 'ui/components/msg/bank/send';
import Multisend from 'ui/components/msg/bank/multisend';
import VerifyInvariant from 'ui/components/msg/crisis/verify_invariant';
import Unjail from 'ui/components/msg/slashing/unjail';
import Fund from 'ui/components/msg/distribution/fund';
import SetWithdrawalAddress from 'ui/components/msg/distribution/set_withdrawal_address';
import WithdrawReward from 'ui/components/msg/distribution/withdraw_reward';
import DepositProposal from 'ui/components/msg/governance/deposit_proposal';
import Vote from 'ui/components/msg/governance/vote';
import SubmitProposal from 'ui/components/msg/governance/submit_proposal';
import WithdrawCommission from 'ui/components/msg/distribution/withdraw_commission';
import Transfer from 'ui/components/msg/ibc_transfer/transfer';
import Grant from 'ui/components/msg/authz/grant';
import Revoke from 'ui/components/msg/authz/revoke';
import GrantAllowance from 'ui/components/msg/feegrant/grant_allowance';
import RevokeAllowance from 'ui/components/msg/feegrant/revoke_allowance';
import CreateVestingAccount from 'ui/components/msg/vesting/create_vesting_account';
import CreateClient from 'ui/components/msg/ibc/client_create_client';
import UpdateClient from 'ui/components/msg/ibc/client_update_client';
import UpgradeClient from 'ui/components/msg/ibc/client_upgrade_client';
import SubmitMisbehaviour from 'ui/components/msg/ibc/client_submit_misbehaviour';
import Height from 'ui/components/msg/ibc/client_height';
import Acknowledgement from 'ui/components/msg/ibc/channel_acknowledgement';
import Channel from 'ui/components/msg/ibc/channel';
import ChannelCloseConfirm from 'ui/components/msg/ibc/channel_close_confirm';
import ChannelCloseInit from 'ui/components/msg/ibc/channel_close_init';
import ChannelOpenAck from 'ui/components/msg/ibc/channel_open_ack';
import ChannelOpenConfirm from 'ui/components/msg/ibc/channel_open_confirm';
import ChannelOpenInit from 'ui/components/msg/ibc/channel_open_init';
import ChannelOpenTry from 'ui/components/msg/ibc/channel_open_try';
import CounterpartyChannel from 'ui/components/msg/ibc/channel_counterparty';
import Packet from 'ui/components/msg/ibc/channel_packet';
import ReceivePacket from 'ui/components/msg/ibc/channel_receive_packet';
import Timeout from 'ui/components/msg/ibc/channel_timeout';
import TimeoutOnClose from 'ui/components/msg/ibc/channel_timeout_on_close';
import ConnectionEnd from 'ui/components/msg/ibc/connection_end';
import ConnectionOpenAck from 'ui/components/msg/ibc/connection_open_ack';
import ConnectionOpenConfirm from 'ui/components/msg/ibc/connection_open_confirm';
import ConnectionOpenInit from 'ui/components/msg/ibc/connection_open_init';
import ConnectionOpenTry from 'ui/components/msg/ibc/connection_open_try';
import CounterpartyConnection from 'ui/components/msg/ibc/connection_counterparty';
import Version from 'ui/components/msg/ibc/connection_version';
import * as MODELS from '@models';
import type { Categories } from '@models/sifchain/msg/types';
import Tag from 'ui/components/tag';
import isKeyOf from 'ui/utils/isKeyOf';
import { Translate } from 'next-translate';
import CreatePeriodicVestingAccount from './vesting/create_periodic_vesting_account';
import AddLiquidity from './clp/add_liquidity';
import CreatePool from './clp/create_pool';
import DecommissionPool from './clp/decommission_pool';
import RemoveLiquidity from './clp/remove_liquidity';
import Swap from './clp/swap';
import CreateDistribution from './dispensation/create_distribution';
import CreateUserClaim from './dispensation/create_user_claim';
import RunDistribution from './dispensation/run_distribution';
import Burn from './ethbridge/burn';
import CreateEthBridgeClaim from './ethbridge/create_eth_bridge_claim';
import Lock from './ethbridge/lock';
import RescueCeth from './ethbridge/rescue_ceth';
import UpdateCethReceiverAccount from './ethbridge/update_ceth_receiver_account';
import UpdateWhiteListValidator from './ethbridge/update_whitelist_validator';
import Deregister from './tokenregistry/deregister';
import Register from './tokenregistry/register';
import SetRegistry from './tokenregistry/set_registry';

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
    content: Delegate,
    tagTheme: 'one',
    tagDisplay: 'txDelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    model: MODELS.MsgRedelegate,
    content: Redelegate,
    tagTheme: 'one',
    tagDisplay: 'txRedelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    model: MODELS.MsgUndelegate,
    content: Undelegate,
    tagTheme: 'one',
    tagDisplay: 'txUndelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    model: MODELS.MsgCreateValidator,
    content: CreateValidator,
    tagTheme: 'one',
    tagDisplay: 'txCreateValidatorLabel',
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    model: MODELS.MsgEditValidator,
    content: EditValidator,
    tagTheme: 'one',
    tagDisplay: 'txEditValidatorLabel',
  },
  // ========================
  // bank
  // ========================
  '/cosmos.bank.v1beta1.MsgSend': {
    model: MODELS.MsgSend,
    content: Send,
    tagTheme: 'two',
    tagDisplay: 'txSendLabel',
  },
  '/cosmos.bank.v1beta1.MsgMultiSend': {
    model: MODELS.MsgMultiSend,
    content: Multisend,
    tagTheme: 'two',
    tagDisplay: 'txMultisendLabel',
  },
  // ========================
  // crisis
  // ========================
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant': {
    model: MODELS.MsgVerifyInvariant,
    content: VerifyInvariant,
    tagTheme: 'three',
    tagDisplay: 'txVerifyInvariantLabel',
  },
  // ========================
  // slashing
  // ========================
  '/cosmos.slashing.v1beta1.MsgUnjail': {
    model: MODELS.MsgUnjail,
    content: Unjail,
    tagTheme: 'five',
    tagDisplay: 'txUnjailLabel',
  },
  // ========================
  // distribution
  // ========================
  '/cosmos.distribution.v1beta1.MsgFundCommunityPool': {
    model: MODELS.MsgFundCommunityPool,
    content: Fund,
    tagTheme: 'six',
    tagDisplay: 'txFundLabel',
  },
  '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
    model: MODELS.MsgSetWithdrawAddress,
    content: SetWithdrawalAddress,
    tagTheme: 'six',
    tagDisplay: 'txsetRewardAddressLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
    model: MODELS.MsgWithdrawDelegatorReward,
    content: WithdrawReward,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawRewardLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': {
    model: MODELS.MsgWithdrawValidatorCommission,
    content: WithdrawCommission,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawCommissionLabel',
  },
  // ========================
  // governance
  // ========================
  '/cosmos.gov.v1beta1.MsgDeposit': {
    model: MODELS.MsgDeposit,
    content: DepositProposal,
    tagTheme: 'seven',
    tagDisplay: 'txDepositLabel',
  },
  '/cosmos.gov.v1beta1.MsgVote': {
    model: MODELS.MsgVote,
    content: Vote,
    tagTheme: 'seven',
    tagDisplay: 'txVoteLabel',
  },
  '/cosmos.gov.v1beta1.MsgSubmitProposal': {
    model: MODELS.MsgSubmitProposal,
    content: SubmitProposal,
    tagTheme: 'seven',
    tagDisplay: 'txSubmitProposalLabel',
  },
  // ========================
  // ibc client
  // ========================
  '/ibc.core.client.v1.MsgCreateClient': {
    model: MODELS.MsgCreateClient,
    content: CreateClient,
    tagTheme: 'nine',
    tagDisplay: 'txCreateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpdateClient': {
    model: MODELS.MsgUpdateClient,
    content: UpdateClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpdateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpgradeClient': {
    model: MODELS.MsgUpgradeClient,
    content: UpgradeClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpgradeClientLabel',
  },
  '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
    model: MODELS.MsgSubmitMisbehaviour,
    content: SubmitMisbehaviour,
    tagTheme: 'nine',
    tagDisplay: 'txSubmitMisbehaviourLabel',
  },
  '/ibc.core.client.v1.Height': {
    model: MODELS.MsgHeight,
    content: Height,
    tagTheme: 'nine',
    tagDisplay: 'txHeightLabel',
  },
  // ========================
  // ibc channel
  // ========================
  '/ibc.core.channel.v1.MsgRecvPacket': {
    model: MODELS.MsgReceivePacket,
    content: ReceivePacket,
    tagTheme: 'nine',
    tagDisplay: 'txRecvPacketLabel',
  },
  '/ibc.core.channel.v1.Channel': {
    model: MODELS.MsgChannel,
    content: Channel,
    tagTheme: 'nine',
    tagDisplay: 'txChannelLabel',
  },
  '/ibc.core.channel.v1.Counterparty': {
    model: MODELS.MsgCounterpartyChannel,
    content: CounterpartyChannel,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.channel.v1.Packet': {
    model: MODELS.MsgPacket,
    content: Packet,
    tagTheme: 'nine',
    tagDisplay: 'txPacketLabel',
  },
  '/ibc.core.channel.v1.MsgAcknowledgement': {
    model: MODELS.MsgAcknowledgement,
    content: Acknowledgement,
    tagTheme: 'nine',
    tagDisplay: 'txAcknowledgementLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
    model: MODELS.MsgChannelCloseConfirm,
    content: ChannelCloseConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseInit': {
    model: MODELS.MsgChannelCloseInit,
    content: ChannelCloseInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenAck': {
    model: MODELS.MsgChannelOpenAck,
    content: ChannelOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenAckLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
    model: MODELS.MsgChannelOpenConfirm,
    content: ChannelOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenInit': {
    model: MODELS.MsgChannelOpenInit,
    content: ChannelOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenTry': {
    model: MODELS.MsgChannelOpenTry,
    content: ChannelOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenTryLabel',
  },
  '/ibc.core.channel.v1.MsgTimeout': {
    model: MODELS.MsgTimeout,
    content: Timeout,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutLabel',
  },
  '/ibc.core.channel.v1.MsgTimeoutOnClose': {
    model: MODELS.MsgTimeoutOnClose,
    content: TimeoutOnClose,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutOnCloseLabel',
  },
  // ========================
  // ibc connection
  // ========================
  '/ibc.core.connection.v1.MsgConnectionOpenAck': {
    model: MODELS.MsgConnectionOpenAck,
    content: ConnectionOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenAckLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
    model: MODELS.MsgConnectionOpenConfirm,
    content: ConnectionOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenConfirmLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenInit': {
    model: MODELS.MsgConnectionOpenInit,
    content: ConnectionOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenInitLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenTry': {
    model: MODELS.MsgConnectionOpenTry,
    content: ConnectionOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenTryLabel',
  },
  '/ibc.core.connection.v1.ConnectionEnd': {
    model: MODELS.MsgConnectionEnd,
    content: ConnectionEnd,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionEndLabel',
  },
  '/ibc.core.connection.v1.Counterparty': {
    model: MODELS.MsgCounterpartyConnection,
    content: CounterpartyConnection,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.connection.v1.Version': {
    model: MODELS.MsgVersion,
    content: Version,
    tagTheme: 'nine',
    tagDisplay: 'txVersionLabel',
  },
  // ========================
  // ibc transfer
  // ========================
  '/ibc.applications.transfer.v1.MsgTransfer': {
    model: MODELS.MsgTransfer,
    content: Transfer,
    tagTheme: 'ten',
    tagDisplay: 'txTransferLabel',
  },
  // ========================
  // authz
  // ========================
  '/cosmos.authz.v1beta1.MsgGrant': {
    model: MODELS.MsgGrant,
    content: Grant,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgGrant',
  },
  '/cosmos.authz.v1beta1.MsgRevoke': {
    model: MODELS.MsgRevoke,
    content: Revoke,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgRevoke',
  },
  // ========================
  // feegrant
  // ========================
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    model: MODELS.MsgGrantAllowance,
    content: GrantAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgGrantAllowance',
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    model: MODELS.MsgRevokeAllowance,
    content: RevokeAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgRevokeAllowance',
  },
  // ========================
  // vesting
  // ========================
  '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': {
    model: MODELS.MsgCreateVestingAccount,
    content: CreateVestingAccount,
    tagTheme: 'fifteen',
    tagDisplay: 'MsgCreateVestingAccount',
  },
  '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount': {
    model: MODELS.MsgCreatePeriodicVestingAccount,
    content: CreatePeriodicVestingAccount,
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
  // clp
  // ========================
  '/sifnode.clp.v1.MsgRemoveLiquidity': {
    model: MODELS.MsgRemoveLiquidity,
    content: RemoveLiquidity,
    tagTheme: 'four',
    tagDisplay: 'MsgRemoveLiquidity',
  },
  '/sifnode.clp.v1.MsgCreatePool': {
    model: MODELS.MsgCreatePool,
    content: CreatePool,
    tagTheme: 'four',
    tagDisplay: 'MsgCreatePool',
  },
  '/sifnode.clp.v1.MsgAddLiquidity': {
    model: MODELS.MsgAddLiquidity,
    content: AddLiquidity,
    tagTheme: 'four',
    tagDisplay: 'MsgAddLiquidity',
  },
  '/sifnode.clp.v1.MsgSwap': {
    model: MODELS.MsgSwap,
    content: Swap,
    tagTheme: 'four',
    tagDisplay: 'MsgSwap',
  },
  '/sifnode.clp.v1.MsgDecommissionPool': {
    model: MODELS.MsgDecommissionPool,
    content: DecommissionPool,
    tagTheme: 'four',
    tagDisplay: 'MsgDecommissionPool',
  },
  // ========================
  // dispensation
  // ========================
  '/sifnode.dispensation.v1.MsgCreateDistribution': {
    model: MODELS.MsgCreateDistribution,
    content: CreateDistribution,
    tagTheme: 'eleven',
    tagDisplay: 'MsgCreateDistribution',
  },
  '/sifnode.dispensation.v1.MsgCreateUserClaim': {
    model: MODELS.MsgCreateUserClaim,
    content: CreateUserClaim,
    tagTheme: 'eleven',
    tagDisplay: 'MsgCreateUserClaim',
  },
  '/sifnode.dispensation.v1.MsgRunDistribution': {
    model: MODELS.MsgRunDistribution,
    content: RunDistribution,
    tagTheme: 'eleven',
    tagDisplay: 'MsgRunDistribution',
  },
  // ========================
  // ethbridge
  // ========================
  '/sifnode.ethbridge.v1.MsgLock': {
    model: MODELS.MsgLock,
    content: Lock,
    tagTheme: 'twelve',
    tagDisplay: 'MsgLock',
  },
  '/sifnode.ethbridge.v1.MsgBurn': {
    model: MODELS.MsgBurn,
    content: Burn,
    tagTheme: 'twelve',
    tagDisplay: 'MsgBurn',
  },
  '/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim': {
    model: MODELS.MsgCreateEthBridgeClaim,
    content: CreateEthBridgeClaim,
    tagTheme: 'twelve',
    tagDisplay: 'MsgCreateEthBridgeClaim',
  },
  '/sifnode.ethbridge.v1.MsgUpdateWhitelistValidator': {
    model: MODELS.MsgUpdateWhitelistValidator,
    content: UpdateWhiteListValidator,
    tagTheme: 'twelve',
    tagDisplay: 'MsgUpdateWhitelistValidator',
  },
  '/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount': {
    model: MODELS.MsgUpdateCethReceiverAccount,
    content: UpdateCethReceiverAccount,
    tagTheme: 'twelve',
    tagDisplay: 'MsgUpdateCethReceiverAccount',
  },
  '/sifnode.ethbridge.v1.MsgRescueCeth': {
    model: MODELS.MsgRescueCeth,
    content: RescueCeth,
    tagTheme: 'twelve',
    tagDisplay: 'MsgRescueCeth',
  },
  // ========================
  // tokenregistry
  // ========================
  '/sifnode.tokenregistry.v1.MsgRegister': {
    model: MODELS.MsgRegister,
    content: Register,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgRegister',
  },
  '/sifnode.tokenregistry.v1.MsgDeregister': {
    model: MODELS.MsgDeregister,
    content: Deregister,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgDeregister',
  },
  '/sifnode.tokenregistry.v1.MsgSetRegistry': {
    model: MODELS.MsgSetRegistry,
    content: SetRegistry,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgSetRegistry',
  },
};
type CustomTypeToModel = typeof customTypeToModel;

type TypeToModel = DefaultTypeToModel & CustomTypeToModel;

const getDataByType = (type: string): TypeToModel[keyof TypeToModel] | null => {
  if (isKeyOf(type, defaultTypeToModel) && defaultTypeToModel[type])
    return defaultTypeToModel[type];

  if (isKeyOf(type, customTypeToModel) && customTypeToModel[type]) return customTypeToModel[type];

  return null;
};

type Data = ReturnType<typeof getDataByType>;

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string): typeof MODELS[keyof typeof MODELS] => {
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
export const getMessageByType = (
  message: { category: Categories; type: string; json: JSON },
  viewRaw: boolean,
  t: Translate
) => {
  const { type } = message;
  type resultType = {
    content: React.FC<{ message: any }>;
    tagDisplay: Data extends { tagDisplay: unknown } ? Data['tagDisplay'] : 'txUnknownLabel';
    tagTheme: Data extends { tagTheme: unknown } ? Data['tagTheme'] : 'zero';
  };
  let results: resultType = {
    content: Unknown,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content as resultType['content'],
      tagDisplay: data.tagDisplay as resultType['tagDisplay'],
      tagTheme: data.tagTheme as resultType['tagTheme'],
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = Unknown;
  }

  return {
    type: <Tag value={t(`message_labels:${results.tagDisplay}`)} theme={results.tagTheme} />,
    message: <results.content message={message} />,
  };
};

export const convertMsgsToModels = (transaction?: {
  messages?: Array<{ '@type': string }>;
  logs?: unknown[];
}) => {
  const messages =
    transaction?.messages?.map((msg, i) => {
      const model = getMessageModelByType(msg?.['@type']);
      if (
        model === MODELS.MsgWithdrawDelegatorReward ||
        model === MODELS.MsgWithdrawValidatorCommission
      ) {
        const log = transaction?.logs?.[i] ?? null;
        return model.fromJson(msg, log);
      }
      return model.fromJson(msg);
    }) ?? [];

  return messages;
};
