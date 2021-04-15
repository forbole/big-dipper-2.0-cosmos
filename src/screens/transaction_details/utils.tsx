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
// } from '@models';

// import {
//   Tag,
// } from '@components';
// import {
//   Delegate,
//   Unknown,
//   Redelegate,
//   Undelegate,
//   CreateValidator,
//   EditValidator,
//   Send,
//   Multisend,
//   VerifyInvariant,
//   Unjail,
//   Fund,
//   SetWithdrawalAddress,
//   WithdrawReward,
//   DepositProposal,
//   // ProposalDisplay,
//   Vote,
//   SubmitProposal,
// } from './components';

// /**
//  * Helper function that helps get model by type
//  * @param type Model type
//  */
// export const getMessageModelByType = (type: string) => {
//   // ========================
//   // staking
//   // ========================
//   if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
//     return MsgDelegate;
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
//     return MsgRedelegate;
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
//     return MsgUndelegate;
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
//     return MsgCreateValidator;
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
//     return MsgEditValidator;
//   }

//   // ========================
//   // bank
//   // ========================

//   if (type === '/cosmos.bank.v1beta1.MsgSend') {
//     return MsgSend;
//   }

//   if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
//     return MsgMultiSend;
//   }

//   // ========================
//   // crisis
//   // ========================

//   if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
//     return MsgVerifyInvariant;
//   }

//   // ========================
//   // slashing
//   // ========================

//   if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
//     return MsgUnjail;
//   }

//   // ========================
//   // distribution
//   // ========================
//   if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
//     return MsgFundCommunityPool;
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
//     return MsgSetWithdrawAddress;
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
//     return MsgWithdrawDelegatorReward;
//   }

//   // ========================
//   // governance
//   // ========================

//   if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
//     return MsgDeposit;
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgVote') {
//     return MsgVote;
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
//     return MsgSubmitProposal;
//   }

//   return MsgUnknown;
// };

// export const getMessageByType = (message: (MsgCreateValidator
//   | MsgDelegate
//   | MsgDeposit
//   | MsgEditValidator
//   | MsgFundCommunityPool
//   | MsgMultiSend
//   | MsgRedelegate
//   | MsgSend
//   | MsgSetWithdrawAddress
//   | MsgSubmitProposal
//   | MsgUndelegate
//   | MsgUnjail
//   | MsgVerifyInvariant
//   | MsgVote
//   | MsgUnknown
//   | MsgWithdrawDelegatorReward), t:any) => {
//   const { type } = message;

//   let results: {
//     content: React.ReactNode;
//     tagDisplay: string;
//     tagTheme?: 'one' | 'two' | 'three' | 'four' | 'five';
//   } = {
//     content: Unknown,
//     tagDisplay: 'txUnknownLabel',
//   };

//   // ========================
//   // staking
//   // ========================
//   if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
//     results = {
//       content: Delegate,
//       tagTheme: 'one',
//       tagDisplay: 'txDelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
//     results = {
//       content: Redelegate,
//       tagTheme: 'two',
//       tagDisplay: 'txRedelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
//     results = {
//       content: Undelegate,
//       tagTheme: 'three',
//       tagDisplay: 'txUndelegateLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
//     results = {
//       content: CreateValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txCreateValidatorLabel',
//     };
//   }

//   if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
//     results = {
//       content: EditValidator,
//       tagTheme: 'one',
//       tagDisplay: 'txEditValidatorLabel',
//     };
//   }

//   // ========================
//   // bank
//   // ========================

//   if (type === '/cosmos.bank.v1beta1.MsgSend') {
//     results = {
//       content: Send,
//       tagTheme: 'four',
//       tagDisplay: 'txSendLabel',
//     };
//   }

//   if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
//     results = {
//       content: Multisend,
//       tagTheme: 'four',
//       tagDisplay: 'txMultisendLabel',
//     };
//   }

//   // ========================
//   // crisis
//   // ========================

//   if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
//     results = {
//       content: VerifyInvariant,
//       tagTheme: 'two',
//       tagDisplay: 'txVerifyInvariantLabel',
//     };
//   }

//   // ========================
//   // slashing
//   // ========================

//   if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
//     results = {
//       content: Unjail,
//       tagTheme: 'two',
//       tagDisplay: 'txUnjailLabel',
//     };
//   }

//   // ========================
//   // distribution
//   // ========================
//   if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
//     results = {
//       content: Fund,
//       tagTheme: 'two',
//       tagDisplay: 'txFundLabel',
//     };
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
//     results = {
//       content: SetWithdrawalAddress,
//       tagTheme: 'two',
//       tagDisplay: 'txsetRewardAddressLabel',
//     };
//   }

//   if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
//     results = {
//       content: WithdrawReward,
//       tagTheme: 'two',
//       tagDisplay: 'txWithdrawRewardLabel',
//     };
//   }

//   // ========================
//   // governance
//   // ========================

//   if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
//     results = {
//       content: DepositProposal,
//       tagTheme: 'two',
//       tagDisplay: 'txDepositLabel',
//     };
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgVote') {
//     results = {
//       content: Vote,
//       tagTheme: 'two',
//       tagDisplay: 'txVoteLabel',
//     };
//   }

//   if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
//     results = {
//       content: SubmitProposal,
//       tagTheme: 'two',
//       tagDisplay: 'txSubmitProposalLabel',
//     };
//   }

//   if (results.tagDisplay === 'txUnknownLabel' && type) {
//     const tagSplit = type?.split('.');
//     results.tagDisplay = tagSplit[tagSplit.length - 1];
//   }

//   const { content: Content } = results;

//   return {
//     type: <Tag value={t(results.tagDisplay)} theme={results.tagTheme} />,
//     // message: <Content message={message as any} />,
//   };
// };
