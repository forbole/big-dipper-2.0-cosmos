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

// return getMessageModelByType(x?.['@type']).fromJson(x);

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
const getMessageModelByType = (type: string) => {
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
