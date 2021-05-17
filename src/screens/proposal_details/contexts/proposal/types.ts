import React from 'react';

export interface ProposalState {
  rawData: {
    exists: boolean;
    loading: boolean;
    overview: {
      title: string;
      id: number;
      description: string;
      status: string;
      submitTime: string;
      depositEndTime: string;
      votingStartTime: string | null;
      votingEndTime: string | null;
      content?: JSON;
    }
    deposits: {
      depositor: string;
      amount: number;
    }[]
  }
  uiData?: {
    overview: {
      title: string;
      id: string;
      description: string;
      status: React.ReactNode;
      submitTime: string;
      depositEndTime: string;
      votingEndTime?: string;
      votingStartTime?: string;
      type: string;
    }
    deposits: {
      depositor: React.ReactNode;
      amount: string;
    }[]
  }
}
