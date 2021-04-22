import React from 'react';

export interface AccountState {
  rawData: {
    exists: boolean;
    loading: boolean;
    profile: {
      operatorAddress: string;
      selfDelegateAddress: string;
      description: string;
      status: number;
      jailed: boolean;
      website: string;
      condition: number;
      commission: number;
    }
    votingPower: {
      height: number;
      overall: number;
      self: number;
    }
    staking: {
      delegations: {
        amount: number;
        delegatorAddress: string;
      }[];
      redelegations: {
        to: string;
        from: string;
        linkedUntil: string;
        amount: number;
        delegatorAddress: string;
      }[];
      unbondings: {
        amount: number;
        linkedUntil: string;
        delegatorAddress: string;
      }[],
    }
  }
  uiData?: {
    profile: {
      operatorAddress: string;
      selfDelegateAddress: string;
      website: string;
      commission: string;
      validator: {
        moniker: string;
        imageUrl?: string;
      }
      status: string;
      description: string;
      condition: string;
    }
    votingPower: {
      height: string;
      votingPower: string;
      votingPowerPercentRaw: number;
      votingPowerPercent: string;
      totalVotingPower: string;
    }
    staking: {
      delegations: {
        address: React.ReactNode;
        amount: string;
        amountRaw: number;
      }[];
      redelegations: {
        address: React.ReactNode;
        to: React.ReactNode;
        from: React.ReactNode;
        linkedUntil: string;
        amount: string;
        amountRaw: number;

      }[];
      unbondings: {
        address: React.ReactNode;
        amount: string;
        linkedUntil: string;
        amountRaw: number;
      }[];
    }
  }
}
