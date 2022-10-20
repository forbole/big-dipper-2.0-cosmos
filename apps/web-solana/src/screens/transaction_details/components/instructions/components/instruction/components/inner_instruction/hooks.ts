import { useState } from 'react';
import * as R from 'ramda';
import { InnerInstructionState } from './types';

export const useInnerInstruction = () => {
  const [state, setState] = useState<InnerInstructionState>({
    raw: false,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const toggleRaw = () => {
    handleSetState({
      raw: !state.raw,
    });
  };

  return {
    state,
    toggleRaw,
  };
};
