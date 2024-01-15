export const MsgTypeList = {
  Staking: {
    Delegate: {
      msg: 'cosmos.staking.v1beta1.MsgDelegate',
      display: 'Delegate',
    },
    Redelegate: {
      msg: 'cosmos.staking.v1beta1.MsgBeginRedelegate',
      display: 'Redelegate',
    },
    Undelegate: {
      msg: 'cosmos.staking.v1beta1.MsgUndelegate',
      display: 'Undelegate',
    },
    CreateValidator: {
      msg: 'cosmos.staking.v1beta1.MsgCreateValidator',
      display: 'Create Validator',
    },
    EditValidator: {
      msg: 'cosmos.staking.v1beta1.MsgEditValidator',
      display: 'Edit Validator',
    },
  },
  Bank: {
    Send: {
      msg: 'cosmos.bank.v1beta1.MsgSend',
      display: 'Send',
    },
    MultiSend: {
      msg: 'cosmos.bank.v1beta1.MsgMultiSend',
      display: 'Multi Send',
    },
  },
  Crisis: {
    VerifyInvariant: {
      msg: 'cosmos.crisis.v1beta1.MsgVerifyInvariant',
      display: 'Verify Invariant',
    },
  },
  Distribution: {
    FundCommunityPool: {
      msg: 'cosmos.distribution.v1beta1.MsgFundCommunityPool',
      display: 'Fund Community Pool',
    },
    SetWithdrawAddress: {
      msg: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
      display: 'Set Withdraw Address',
    },
    WithdrawDelegatorReward: {
      msg: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      display: 'Withdraw Delegator Reward',
    },
    WithdrawValidatorCommission: {
      msg: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
      display: 'Withdraw Validator Commission',
    },
  },
  Governance: {
    Deposit: {
      msg: 'cosmos.gov.v1beta1.MsgDeposit, cosmos.gov.v1.MsgDeposit',
      display: 'Deposit',
    },
    SubmitProposal: {
      msg: 'cosmos.gov.v1beta1.MsgSubmitProposal, cosmos.gov.v1.MsgSubmitProposal',
      display: 'Submit Proposal',
    },
    Vote: {
      msg: 'cosmos.gov.v1beta1.MsgVote, cosmos.gov.v1.MsgVote',
      display: 'Vote',
    },
  },
  Slashing: {
    Unjail: {
      msg: 'cosmos.slashing.v1beta1.MsgUnjail',
      dsplay: 'Unjail',
    },
  },
};
