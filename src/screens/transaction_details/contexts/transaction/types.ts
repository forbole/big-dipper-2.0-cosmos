import React from 'react';

export interface TransactionState {
  rawData: {
    exists: boolean;
    loading: boolean;
    transaction: {
      hash: string;
      height: number;
      timestamp: string;
      fee: number;
      gasUsed: number;
      gasWanted: number;
      success: boolean;
      memo: string;
    }
    messages: any[];
  }
  uiData: {
    transaction: {
      label: string;
      detail: string | React.ReactNode;
      className?: string;
    }[];
  }
  onMessageFilterCallback?: (value: string) => void;
}
