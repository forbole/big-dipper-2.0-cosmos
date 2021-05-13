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
  MsgWithdrawValidatorCommission,
  MsgUnblockUser,
  MsgSaveProfile,
  MsgDtagTransferRequest,
  MsgDtagRefuseTransfer,
  MsgDtagCancelTransfer,
  MsgDtagAcceptTransfer,
  MsgDeleteProfile,
  MsgCreateRelationship,
  MsgBlockUser,
} from '@models';

import {
  Tag,
} from '@components';
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
    return MsgDelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return MsgRedelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return MsgUndelegate;
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return MsgCreateValidator;
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return MsgEditValidator;
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return MsgSend;
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return MsgMultiSend;
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    return MsgVerifyInvariant;
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return MsgUnjail;
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return MsgFundCommunityPool;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return MsgSetWithdrawAddress;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return MsgWithdrawDelegatorReward;
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission') {
    return MsgWithdrawValidatorCommission;
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return MsgDeposit;
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return MsgVote;
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return MsgSubmitProposal;
  }

  // ========================
  // profiles
  // ========================
  if (type === '/desmos.profiles.v1beta1.MsgSaveProfile') {
    return MsgSaveProfile;
  }

  if (type === '/desmos.profiles.v1beta1.MsgDeleteProfile') {
    return MsgDeleteProfile;
  }

  if (type === '/desmos.profiles.v1beta1.MsgCreateRelationship') {
    return MsgCreateRelationship;
  }

  if (type === '/desmos.profiles.v1beta1.MsgRequestDTagTransfer') {
    return MsgDtagTransferRequest;
  }

  if (type === '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer') {
    return MsgDtagAcceptTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgCancelDTagTransfer') {
    return MsgDtagCancelTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer') {
    return MsgDtagRefuseTransfer;
  }

  if (type === '/desmos.profiles.v1beta1.MsgBlockUser') {
    return MsgBlockUser;
  }

  if (type === '/desmos.profiles.v1beta1.MsgUnblockUser') {
    return MsgUnblockUser;
  }

  return MsgUnknown;
};

export const getMessageByType = (message: (
  MsgCreateValidator
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
  | MsgWithdrawDelegatorReward
  | MsgWithdrawValidatorCommission
  | MsgUnblockUser
  | MsgSaveProfile
  | MsgDtagTransferRequest
  | MsgDtagRefuseTransfer
  | MsgDtagCancelTransfer
  | MsgDtagAcceptTransfer
  | MsgDeleteProfile
  | MsgCreateRelationship
  | MsgBlockUser
  ), t:any) => {
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
      tagTheme: 'two',
      tagDisplay: 'txRedelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    results = {
      content: Undelegate,
      tagTheme: 'three',
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
      tagTheme: 'four',
      tagDisplay: 'txSendLabel',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    results = {
      content: Multisend,
      tagTheme: 'four',
      tagDisplay: 'txMultisendLabel',
    };
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    results = {
      content: VerifyInvariant,
      tagTheme: 'five',
      tagDisplay: 'txVerifyInvariantLabel',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    results = {
      content: Unjail,
      tagTheme: 'eight',
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
      tagTheme: 'two',
      tagDisplay: 'txDepositLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    results = {
      content: Vote,
      tagTheme: 'two',
      tagDisplay: 'txVoteLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    results = {
      content: SubmitProposal,
      tagTheme: 'two',
      tagDisplay: 'txSubmitProposalLabel',
    };
  }

  // ========================
  // profiles
  // ========================
  if (type === '/desmos.profiles.v1beta1.MsgSaveProfile') {
    results = {
      content: Unknown,
      tagTheme: 'one',
      tagDisplay: 'txSaveProfileLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgDeleteProfile') {
    results = {
      content: Unknown,
      tagTheme: 'one',
      tagDisplay: 'txDeleteProfileLabel',
    };
  }

  if (type === '/desmos.profiles.v1beta1.MsgCreateRelationship') {
    results = {
      content: Unknown,
      tagTheme: 'one',
      tagDisplay: 'txCreateRelationshipLabel',
    };
  }

  // if (results.tagDisplay === 'txUnknownLabel' && type) {
  //   const tagSplit = type?.split('.');
  //   results.tagDisplay = tagSplit[tagSplit.length - 1];
  //   results.unknown = true;
  // }

  return {
    type: <Tag
      value={results.unknown ? results.tagDisplay : t(results.tagDisplay)}
      theme={results.tagTheme}
    />,
    message: <results.content message={message as any} />,
  };
};
