import {
  MsgSend,
  MsgMultiSend,
  MsgVerifyInvariant,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  // MsgCommunityPoolSpendProposal,
  // MsgParameterChangeProposal,
  // MsgSoftwareUpgradeProposal,
  // MsgTextProposal,
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
} from '@models';

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
  ProposalDisplay,
  Vote,
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

  return MsgUnknown;
};

export const getMessageByType = (type:string) => {
  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return {
      content: Delegate,
      tagTheme: 'two',
      tagDisplay: 'txDelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return {
      content: Redelegate,
      tagTheme: 'two',
      tagDisplay: 'txRedelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return {
      content: Undelegate,
      tagTheme: 'two',
      tagDisplay: 'txUndelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return {
      content: CreateValidator,
      tagTheme: 'two',
      tagDisplay: 'txCreateValidatorLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return {
      content: EditValidator,
      tagTheme: 'two',
      tagDisplay: 'txEditValidatorLabel',
    };
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return {
      content: Send,
      tagTheme: 'two',
      tagDisplay: 'txSendLabel',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return {
      content: Multisend,
      tagTheme: 'two',
      tagDisplay: 'txMultisendLabel',
    };
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    return {
      content: VerifyInvariant,
      tagTheme: 'two',
      tagDisplay: 'txVerifyInvariantLabel',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return {
      content: Unjail,
      tagTheme: 'two',
      tagDisplay: 'txUnjailLabel',
    };
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return {
      content: Fund,
      tagTheme: 'two',
      tagDisplay: 'txFundLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return {
      content: SetWithdrawalAddress,
      tagTheme: 'two',
      tagDisplay: 'txsetRewardAddressLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return {
      content: WithdrawReward,
      tagTheme: 'two',
      tagDisplay: 'txWithdrawRewardLabel',
    };
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return {
      content: DepositProposal,
      tagTheme: 'two',
      tagDisplay: 'txDepositLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return {
      content: Vote,
      tagTheme: 'two',
      tagDisplay: 'txVoteLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return {
      content: SubmitProposal,
      tagTheme: 'two',
      tagDisplay: 'txSubmitProposalLabel',
    };
  }

  let tagDisplay = 'txUnknownLabel';
  // if unknown but has a type we display it
  if (type) {
    const tagSplit = type?.split('.');
    tagDisplay = tagSplit[tagSplit.length - 1];
  }

  return {
    content: Unknown,
    tagTheme: 'two',
    // tagTheme: 'unknown',
    tagDisplay,
  };
};
