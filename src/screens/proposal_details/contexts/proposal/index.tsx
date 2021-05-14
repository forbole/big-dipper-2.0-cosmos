import React from 'react';
import { useProposal } from './hooks';
import { ProposalState } from './types';

const initialState: ProposalState = {
  rawData: {
    exists: true,
    loading: true,
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
  } = useProposal(initialState);

  return (
    <ProposalContext.Provider
      value={{
        rawData,
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
