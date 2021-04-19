import React from 'react';

export interface AccountState {
  rawData: {
    exists: boolean;
    loading: boolean;
    account: {
      address: string;
      withdrawalAddress: string;
    }
    balance: {
      available: number;
      delegate: number;
      unbonding: number;
      reward: number;
      commission?: number;
      total: number;
    }
    staking: {
      delegations: {
        validator: string;
        commission: number;
        amount: number;
        reward: number;
      }[];
      redelegations: {
        to: string;
        from: string;
        linkedUntil: string;
        amount: number;
      }[];
      unbondings: {
        validator: string;
        commission: number;
        amount: number;
        linkedUntil: string;
      }[],
    }
  }
  uiData?: {
    account: {
      address: string;
      withdrawalAddress: string;
    }
    balance: {
      chart: {
        key: string;
        display: string;
        value: number;
      }[]
      total: string;
    }
    staking: {
      delegations: {
        validatorMoniker: string;
        validator: React.ReactNode;
        commission: string;
        amount: string;
        reward: string;
      }[];
      redelegations: {
        to: React.ReactNode;
        from: React.ReactNode;
        linkedUntil: string;
        amount: string;
      }[];
      unbondings: {
        validator: React.ReactNode;
        commission: string;
        amount: string;
        linkedUntil: string;
      }[];
    }
  }
}
