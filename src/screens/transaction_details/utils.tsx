// import {
//   MsgSend,
//   MsgMultiSend,
//   MsgVerifyInvariant,
//   MsgFundCommunityPool,
//   MsgSetWithdrawAddress,
//   MsgWithdrawDelegatorReward,
//   MsgDeposit,
//   MsgVote,
//   MsgUnjail,
//   MsgCreateValidator,
//   MsgDelegate,
//   MsgEditValidator,
//   MsgRedelegate,
//   MsgUndelegate,
//   MsgSubmitProposal,
//   MsgUnknown,
//   MsgWithdrawValidatorCommission,
//   MsgUnblockUser,
//   MsgSaveProfile,
//   MsgDtagTransferRequest,
//   MsgDtagRefuseTransfer,
//   MsgDtagCancelTransfer,
//   MsgDtagAcceptTransfer,
//   MsgDeleteProfile,
//   MsgCreateRelationship,
//   MsgBlockUser,
// } from '@models';

import * as MODELS from '@models';
import {
  Tag,
} from '@components';
import { MessageType } from './types';
import {
  Delegate,
  Unknown,
  Redelegate,
  Undelegate,
  CreateValidator,
  EditValidator,
  Send,
  Multisend,
  VerifyInvariant,
  Unjail,
  Fund,
  SetWithdrawalAddress,
  WithdrawReward,
  DepositProposal,
  Vote,
  WithdrawCommission,
  SubmitProposal,
  SaveProfile,
  DeleteProfile,
  CreateRelationship,
  DtagTransferRequest,
  DtagAcceptTransfer,
  DtagCancelTransfer,
  DtagRefuseTransfer,
  BlockUser,
  UnBlockUser,
} from './components';

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string) => {
  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return MODELS.MsgDelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return MODELS.MsgRedelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return MODELS.MsgUndelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return MODELS.MsgCreateValidator;
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return MODELS.MsgEditValidator;
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return MODELS.MsgSend;
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return MODELS.MsgMultiSend;
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    return MODELS.MsgVerifyInvariant;
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return MODELS.MsgUnjail;
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return MODELS.MsgFundCommunityPool;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return MODELS.MsgSetWithdrawAddress;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return MODELS.MsgWithdrawDelegatorReward;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission') {
    return MODELS.MsgWithdrawValidatorCommission;
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return MODELS.MsgDeposit;
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return MODELS.MsgVote;
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return MODELS.MsgSubmitProposal;
  }

  // ========================
  // profiles
  // ========================
  if (type === '/desmos.profiles.v1beta1.MsgSaveProfile') {
    return MODELS.MsgSaveProfile;
  }

  if (type === '/desmos.profiles.v1beta1.MsgDeleteProfile') {
    return MODELS.MsgDeleteProfile;
  }

  if (type === '/desmos.profiles.v1beta1.MsgCreateRelationship') {
    return MODELS.MsgCreateRelationship;
  }

  if (type === '/desmos.profiles.v1beta1.MsgRequestDTagTransfer') {
    return MODELS.MsgDtagTransferRequest;
  }

  if (type === '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer') {
    return MODELS.MsgDtagAcceptTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgCancelDTagTransfer') {
    return MODELS.MsgDtagCancelTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer') {
    return MODELS.MsgDtagRefuseTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgBlockUser') {
    return MODELS.MsgBlockUser;
  }

  if (type === '/desmos.profiles.v1beta1.MsgUnblockUser') {
    return MODELS.MsgUnblockUser;
  }

  return MODELS.MsgUnknown;
};

export const getMessageByType = (message: MessageType, viewRaw: boolean, t:any) => {
  const { type } = message;

  let results: {
    content: (
      typeof Delegate
    | typeof Unknown
    | typeof Redelegate
    | typeof Undelegate
    | typeof CreateValidator
    | typeof EditValidator
    | typeof Send
    | typeof Multisend
    | typeof VerifyInvariant
    | typeof Unjail
    | typeof Fund
    | typeof SetWithdrawalAddress
    | typeof WithdrawReward
    | typeof DepositProposal
    | typeof Vote
    | typeof WithdrawCommission
    | typeof SubmitProposal
    );
    tagDisplay: string;
    tagTheme?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'zero';
    unknown?: boolean;
  } = {
    content: Unknown,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    results = {
      content: Delegate,
      tagTheme: 'one',
      tagDisplay: 'txDelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    results = {
      content: Redelegate,
      tagTheme: 'one',
      tagDisplay: 'txRedelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    results = {
      content: Undelegate,
      tagTheme: 'one',
      tagDisplay: 'txUndelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    results = {
      content: CreateValidator,
      tagTheme: 'one',
      tagDisplay: 'txCreateValidatorLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    results = {
      content: EditValidator,
      tagTheme: 'one',
      tagDisplay: 'txEditValidatorLabel',
    };
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    results = {
      content: Send,
      tagTheme: 'two',
      tagDisplay: 'txSendLabel',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    results = {
      content: Multisend,
      tagTheme: 'two',
      tagDisplay: 'txMultisendLabel',
    };
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    results = {
      content: VerifyInvariant,
      tagTheme: 'three',
      tagDisplay: 'txVerifyInvariantLabel',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    results = {
      content: Unjail,
      tagTheme: 'five',
      tagDisplay: 'txUnjailLabel',
    };
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    results = {
      content: Fund,
      tagTheme: 'six',
      tagDisplay: 'txFundLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    results = {
      content: SetWithdrawalAddress,
      tagTheme: 'six',
      tagDisplay: 'txsetRewardAddressLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    results = {
      content: WithdrawReward,
      tagTheme: 'six',
      tagDisplay: 'txWithdrawRewardLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission') {
    results = {
      content: WithdrawCommission,
      tagTheme: 'six',
      tagDisplay: 'txWithdrawCommissionLabel',
    };
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    results = {
      content: DepositProposal,
      tagTheme: 'seven',
      tagDisplay: 'txDepositLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    results = {
      content: Vote,
      tagTheme: 'seven',
      tagDisplay: 'txVoteLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    results = {
      content: SubmitProposal,
      tagTheme: 'seven',
      tagDisplay: 'txSubmitProposalLabel',
    };
  }

  // ========================
  // profiles
  // ========================
  if (type === '/desmos.profiles.v1beta1.MsgSaveProfile') {
    results = {
      content: SaveProfile,
      tagTheme: 'four',
      tagDisplay: 'txSaveProfileLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgDeleteProfile') {
    results = {
      content: DeleteProfile,
      tagTheme: 'four',
      tagDisplay: 'txDeleteProfileLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgCreateRelationship') {
    results = {
      content: CreateRelationship,
      tagTheme: 'four',
      tagDisplay: 'txCreateRelationshipLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgRequestDTagTransfer') {
    results = {
      content: DtagTransferRequest,
      tagTheme: 'four',
      tagDisplay: 'txRequestDTagTransferLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer') {
    results = {
      content: DtagAcceptTransfer,
      tagTheme: 'four',
      tagDisplay: 'txAcceptDTagTransferLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgCancelDTagTransfer') {
    results = {
      content: DtagCancelTransfer,
      tagTheme: 'four',
      tagDisplay: 'txCancelDTagTransferLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer') {
    results = {
      content: DtagRefuseTransfer,
      tagTheme: 'four',
      tagDisplay: 'txRefuseDTagTransferLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgBlockUser') {
    results = {
      content: BlockUser,
      tagTheme: 'four',
      tagDisplay: 'txBlockUserLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgUnblockUser') {
    results = {
      content: UnBlockUser,
      tagTheme: 'four',
      tagDisplay: 'txUnblockUserLabel',
    };
  }

  // if (results.tagDisplay === 'txUnknownLabel' && type) {
  //   const tagSplit = type?.split('.');
  //   results.tagDisplay = tagSplit[tagSplit.length - 1];
  //   results.unknown = true;
  // }

  // If user asks to view the raw data
  if (viewRaw) {
    results.content = Unknown;
  }

  return {
    type: <Tag
      value={results.unknown ? results.tagDisplay : t(`message_labels:${results.tagDisplay}`)}
      theme={results.tagTheme}
    />,
    message: <results.content message={message as any} />,
  };
};
