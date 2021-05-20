import React from 'react';

export interface ProposalState {
  handleTabChange?: (event:any, newvalue:number) => void;
  tab: number;
  rawData: {
    exists: boolean;
    loading: boolean;
    content?: JSON;
    overview: {
      title: string;
      id: number;
      description: string;
      status: string;
      submitTime: string;
      depositEndTime: string;
      votingStartTime: string | null;
      votingEndTime: string | null;
    }
    deposits: {
      depositor: string;
      amount: number;
    }[];
    votes: {
      vote: string;
      voter: string;
    }[];
    voteTally: {
      yes: number;
      no: number;
      abstain: number;
      veto: number;
    }
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
    }[];
    votes: {
      vote: string;
      voter: React.ReactNode;
    }[];
  }
}
