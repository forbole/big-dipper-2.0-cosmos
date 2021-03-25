import { useState } from 'react';

export const useVotes = () => {
  const [state, setState] = useState({
    tab: 0,
  });

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  return {
    state,
    handleTabChange,
  };
};
