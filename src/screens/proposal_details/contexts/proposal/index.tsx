import React from 'react';
import { useProposal } from './hooks';
import { ProposalState } from './types';

const initialState: ProposalState = {
  item: {},
};

const ProposalContext = React.createContext<ProposalState>(initialState);

const ProposalProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    item,
  } = useProposal();

  return (
    <ProposalContext.Provider
      value={{
        item,
      }}
    >
      {children}
    </ProposalContext.Provider>
  );
};

const useProposalContext = () => React.useContext(ProposalContext);

export {
  useProposalContext,
  ProposalProvider,
  ProposalContext,
};
