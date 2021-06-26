import * as MODELS from '@models';
import {
  Tag,
} from '@components';
import {
  MessageType, MessageComponentType,
} from './types';
import * as COMPONENTS from './components';

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
};

// const getDataByType = (type: string) => {
//   const defaultTypeToModel = {
//     // ========================
//   // staking
//   // ========================
//     '/cosmos.staking.v1beta1.MsgDelegate': {
//       model: MODELS.MsgDelegate,
//       content: COMPONENTS.Delegate,
//       tagTheme: 'one',
//       tagDisplay: 'txDelegateLabel',
//     },
//     '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
//       model: MODELS.MsgRedelegate,
//       content: COMPONENTS.Redelegate,
//       tagTheme: 'one',
//       tagDisplay: 'txRedelegateLabel',
//     },
//     '/cosmos.staking.v1beta1.MsgUndelegate': {
//       model: MODELS.MsgUndelegate,
//       content: COMPONENTS.Undelegate,
//       tagTheme: 'one',
//       tagDisplay: 'txUndelegateLabel',
//     },
//     '/cosmos.staking.v1beta1.MsgCreateValidator': {
//       model: MODELS.MsgCreateValidator,
//       content: COMPONENTS.CreateValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txCreateValidatorLabel',
//     },
//     '/cosmos.staking.v1beta1.MsgEditValidator': {
//       model: MODELS.MsgEditValidator,
//       content: COMPONENTS.EditValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txEditValidatorLabel',
//     },
//   };
// };

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

// export const getMessageByType = (message: MessageType, viewRaw: boolean, t:any) => {
//   const { type } = message;

//   let results: {
//     content: MessageComponentType;
//     tagDisplay: string;
//     tagTheme?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'zero';
//     unknown?: boolean;
//   } = {
//     content: COMPONENTS.Unknown,
//     tagDisplay: 'txUnknownLabel',
//     tagTheme: 'zero',
//   };

//   // ========================
//   // staking
//   // ========================
//   if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
//     results = {
//       content: COMPONENTS.Delegate,
//       tagTheme: 'one',
//       tagDisplay: 'txDelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
//     results = {
//       content: COMPONENTS.Redelegate,
//       tagTheme: 'one',
//       tagDisplay: 'txRedelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
//     results = {
//       content: COMPONENTS.Undelegate,
//       tagTheme: 'one',
//       tagDisplay: 'txUndelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
//     results = {
//       content: COMPONENTS.CreateValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txCreateValidatorLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
//     results = {
//       content: COMPONENTS.EditValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txEditValidatorLabel',
//     };
//   }

//   // ========================
//   // bank
//   // ========================

//   if (type === '/cosmos.bank.v1beta1.MsgSend') {
//     results = {
//       content: COMPONENTS.Send,
//       tagTheme: 'two',
//       tagDisplay: 'txSendLabel',
//     };
//   }

//   if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
//     results = {
//       content: COMPONENTS.Multisend,
//       tagTheme: 'two',
//       tagDisplay: 'txMultisendLabel',
//     };
//   }

//   // ========================
//   // crisis
//   // ========================

//   if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
//     results = {
//       content: COMPONENTS.VerifyInvariant,
//       tagTheme: 'three',
//       tagDisplay: 'txVerifyInvariantLabel',
//     };
//   }

//   // ========================
//   // slashing
//   // ========================

//   if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
//     results = {
//       content: COMPONENTS.Unjail,
//       tagTheme: 'five',
//       tagDisplay: 'txUnjailLabel',
//     };
//   }

//   // ========================
//   // distribution
//   // ========================
//   if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
//     results = {
//       content: COMPONENTS.Fund,
//       tagTheme: 'six',
//       tagDisplay: 'txFundLabel',
//     };
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
//     results = {
//       content: COMPONENTS.SetWithdrawalAddress,
//       tagTheme: 'six',
//       tagDisplay: 'txsetRewardAddressLabel',
//     };
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
//     results = {
//       content: COMPONENTS.WithdrawReward,
//       tagTheme: 'six',
//       tagDisplay: 'txWithdrawRewardLabel',
//     };
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission') {
//     results = {
//       content: COMPONENTS.WithdrawCommission,
//       tagTheme: 'six',
//       tagDisplay: 'txWithdrawCommissionLabel',
//     };
//   }

//   // ========================
//   // governance
//   // ========================

//   if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
//     results = {
//       content: COMPONENTS.DepositProposal,
//       tagTheme: 'seven',
//       tagDisplay: 'txDepositLabel',
//     };
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgVote') {
//     results = {
//       content: COMPONENTS.Vote,
//       tagTheme: 'seven',
//       tagDisplay: 'txVoteLabel',
//     };
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
//     results = {
//       content: COMPONENTS.SubmitProposal,
//       tagTheme: 'seven',
//       tagDisplay: 'txSubmitProposalLabel',
//     };
//   }

//   // ========================
//   // profiles
//   // ========================
//   if (type === '/desmos.profiles.v1beta1.MsgSaveProfile') {
//     results = {
//       content: COMPONENTS.SaveProfile,
//       tagTheme: 'four',
//       tagDisplay: 'txSaveProfileLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgDeleteProfile') {
//     results = {
//       content: COMPONENTS.DeleteProfile,
//       tagTheme: 'four',
//       tagDisplay: 'txDeleteProfileLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgCreateRelationship') {
//     results = {
//       content: COMPONENTS.CreateRelationship,
//       tagTheme: 'four',
//       tagDisplay: 'txCreateRelationshipLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgRequestDTagTransfer') {
//     results = {
//       content: COMPONENTS.DtagTransferRequest,
//       tagTheme: 'four',
//       tagDisplay: 'txRequestDTagTransferLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer') {
//     results = {
//       content: COMPONENTS.DtagAcceptTransfer,
//       tagTheme: 'four',
//       tagDisplay: 'txAcceptDTagTransferLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgCancelDTagTransfer') {
//     results = {
//       content: COMPONENTS.DtagCancelTransfer,
//       tagTheme: 'four',
//       tagDisplay: 'txCancelDTagTransferLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer') {
//     results = {
//       content: COMPONENTS.DtagRefuseTransfer,
//       tagTheme: 'four',
//       tagDisplay: 'txRefuseDTagTransferLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgBlockUser') {
//     results = {
//       content: COMPONENTS.BlockUser,
//       tagTheme: 'four',
//       tagDisplay: 'txBlockUserLabel',
//     };
//   }

//   if (type === '/desmos.profiles.v1beta1.MsgUnblockUser') {
//     results = {
//       content: COMPONENTS.UnBlockUser,
//       tagTheme: 'four',
//       tagDisplay: 'txUnblockUserLabel',
//     };
//   }

//   // If user asks to view the raw data
//   if (viewRaw) {
//     results.content = COMPONENTS.Unknown;
//   }

//   return {
//     type: <Tag
//       value={results.unknown ? results.tagDisplay : t(`message_labels:${results.tagDisplay}`)}
//       theme={results.tagTheme}
//     />,
//     message: <results.content message={message as any} />,
//   };
// };
