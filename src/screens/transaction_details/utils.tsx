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
    // gamm
    // ========================
    '/osmosis.gamm.v1beta1.MsgCreatePool': {
      model: MODELS.MsgCreatePool,
      content: COMPONENTS.CreatePool,
      tagTheme: 'eight',
      tagDisplay: 'txCreatePoolLabel',
    },
    '/osmosis.gamm.v1beta1.MsgJoinPool': {
      model: MODELS.MsgJoinPool,
      content: COMPONENTS.JoinPool,
      tagTheme: 'eight',
      tagDisplay: 'txJoinPoolLabel',
    },
    '/osmosis.gamm.v1beta1.MsgExitPool': {
      model: MODELS.MsgExitPool,
      content: COMPONENTS.ExitPool,
      tagTheme: 'eight',
      tagDisplay: 'txExitPoolLabel',
    },
    '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn': {
      model: MODELS.MsgSwapExactAmountIn,
      content: COMPONENTS.SwapExactAmountIn,
      tagTheme: 'eight',
      tagDisplay: 'txSwapExactAmountInLabel',
    },
    '/osmosis.gamm.v1beta1.MsgSwapExactAmountOut': {
      model: MODELS.MsgSwapExactAmountOut,
      content: COMPONENTS.SwapExactAmountOut,
      tagTheme: 'eight',
      tagDisplay: 'txSwapExactAmountOutLabel',
    },
    '/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn': {
      model: MODELS.MsgJoinSwapExternAmountIn,
      content: COMPONENTS.JoinSwapExternAmountIn,
      tagTheme: 'eight',
      tagDisplay: 'txJoinSwapExternAmountInLabel',
    },
    '/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut': {
      model: MODELS.MsgJoinSwapShareAmountOut,
      content: COMPONENTS.JoinSwapShareAmountOut,
      tagTheme: 'eight',
      tagDisplay: 'txJoinSwapShareAmountOutLabel',
    },
    '/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn': {
      model: MODELS.MsgExitSwapShareAmountIn,
      content: COMPONENTS.ExitSwapShareAmountIn,
      tagTheme: 'eight',
      tagDisplay: 'txExitSwapShareAmountInLabel',
    },
    '/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut': {
      model: MODELS.MsgExitSwapExternAmountOut,
      content: COMPONENTS.ExitSwapExternAmountOut,
      tagTheme: 'eight',
      tagDisplay: 'txExitSwapExternAmountOutLabel',
    },
    // ========================
    // incentives
    // ========================
    '/osmosis.incentives.MsgCreateGauge': {
      model: MODELS.MsgCreateGauge,
      content: COMPONENTS.CreateGauge,
      tagTheme: 'ten',
      tagDisplay: 'txCreateGaugeLabel',
    },
    '/osmosis.incentives.MsgAddToGauge': {
      model: MODELS.MsgAddToGauge,
      content: COMPONENTS.AddToGauge,
      tagTheme: 'ten',
      tagDisplay: 'txAddToGaugeLabel',
    },
    // ========================
    // lockup
    // ========================
    '/osmosis.lockup.MsgLockTokens': {
      model: MODELS.MsgLockTokens,
      content: COMPONENTS.LockTokens,
      tagTheme: 'nine',
      tagDisplay: 'txLockTokensLabel',
    },
    '/osmosis.lockup.MsgBeginUnlockingAll': {
      model: MODELS.MsgBeginUnlockingAll,
      content: COMPONENTS.BeginUnlockingAll,
      tagTheme: 'nine',
      tagDisplay: 'txBeginUnlockingAllLabel',
    },
    '/osmosis.lockup.MsgBeginUnlocking': {
      model: MODELS.MsgBeginUnlocking,
      content: COMPONENTS.BeginUnlocking,
      tagTheme: 'nine',
      tagDisplay: 'txBeginUnlockingLabel',
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
    tagTheme?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'zero';
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
