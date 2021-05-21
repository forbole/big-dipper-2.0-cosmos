import React from 'react';
import { useProposal } from './hooks';
import { ProposalState } from './types';

const initialState: ProposalState = {
  tab: 0,
  rawData: {
    exists: true,
    loading: true,
    deposits: [],
    votes: [],
    tallyParams: {
      quorumPercent: 0,
      bondedTokens: 0,
    },
    voteCount: {
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
    },
    voteTally: {
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
      total: 0,
    },
    overview: {
      title: '',
      id: 0,
      description: '',
      status: '',
      submitTime: '',
      depositEndTime: '',
      votingEndTime: null,
      votingStartTime: null,
    },
  },
};

const ProposalContext = React.createContext<ProposalState>(initialState);

const ProposalProvider: React.FC = (props: {children: (options: {
  exists: boolean;
  loading: boolean;
}) => React.ReactNode }) => {
  const { children } = props;

  const {
    rawData,
    uiData,
    handleTabChange,
    tab,
  } = useProposal(initialState);

  return (
    <ProposalContext.Provider
      value={{
        rawData,
        uiData,
        handleTabChange,
        tab,
      }}
    >
      {children({
        exists: rawData.exists,
        loading: rawData.loading,
      })}
    </ProposalContext.Provider>
  );
};

const useProposalContext = () => React.useContext(ProposalContext);

export {
  useProposalContext,
  ProposalProvider,
  ProposalContext,
};
