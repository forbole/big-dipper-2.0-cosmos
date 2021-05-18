import React from 'react';
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
} from '@models';

export interface TransactionState {
  viewRaw: boolean;
  toggleMessageDisplay?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rawData: {
    exists: boolean;
    loading: boolean;
    filterBy: string;
    transaction: {
      hash: string;
      height: number;
      timestamp: string;
      fee: number;
      gasUsed: number;
      gasWanted: number;
      success: boolean;
      memo: string;
      error: '',
    }
    messages: (MsgCreateValidator
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
      | MsgWithdrawDelegatorReward)[];
  }
  uiData: {
    transaction: {
      label: string;
      detail: string | React.ReactNode;
      className?: string;
    }[];
    messages: {
      type: React.ReactNode;
      message: React.ReactNode;
    }[];
  }
  onMessageFilterCallback?: (value: string) => void;
}
