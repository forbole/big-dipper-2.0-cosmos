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
    }
  }
  uiData?: {
    overview: {
      title: string;
      id: string;
      description: string;
      status: React.ReactNode;
    }
  }
}
