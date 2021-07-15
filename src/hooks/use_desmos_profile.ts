import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';

type Options = {
  selfDelegateAddress: string;
}

export const useDesmosProfile = (options?: Options) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    if (options) {
      // call right away
    } else {
      // set loading false?
    }
  }, [options.selfDelegateAddress]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return {
    profile: state.data,
  };
};
