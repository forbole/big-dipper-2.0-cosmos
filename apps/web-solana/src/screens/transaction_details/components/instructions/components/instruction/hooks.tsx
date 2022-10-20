import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { InstructionState } from './types';
import { InstructionType } from '../../../../types';
import { formatInstructions } from './utils';

export const useInstruction = (instructions: InstructionType[]) => {
  const [state, setState] = useState<InstructionState>({
    hide: true,
    raw: false,
    instructions: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    intitialInstructionsFormat();
  }, []);

  const intitialInstructionsFormat = async () => {
    const formattedinstructions = await formatInstructions(instructions);
    handleSetState({
      instructions: formattedinstructions,
    });
  };

  const toggleHide = () => {
    handleSetState({
      hide: !state.hide,
    });
  };

  const toggleRaw = () => {
    handleSetState({
      raw: !state.raw,
    });
  };

  return {
    state,
    toggleHide,
    toggleRaw,
  };
};
