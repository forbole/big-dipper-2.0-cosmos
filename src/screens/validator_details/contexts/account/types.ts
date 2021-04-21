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
        delegator: React.ReactNode;
        amount: string;
        amountRaw: number;
      }[];
  //     redelegations: {
  //       to: React.ReactNode;
  //       from: React.ReactNode;
  //       linkedUntil: string;
  //       amount: string;
  //     }[];
  //     unbondings: {
  //       validator: React.ReactNode;
  //       commission: string;
  //       amount: string;
  //       linkedUntil: string;
  //     }[];
    }
  }
}
