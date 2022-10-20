import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useScreenSize } from '@hooks';

export const useMobile = () => {
  // ==========================
  // globals
  // ==========================
  const { isDesktop } = useScreenSize();

  const [state, setState] = useState<{
    isMenu?: boolean;
    isNetwork?: boolean
  }>({
    isMenu: false,
    isNetwork: false,
  });

  useEffect(() => {
    if (isDesktop) {
      closeAll();
    }
  }, [isDesktop]);

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // closes menu if opened and opens menu if
  // closed and hamburger icon is clicked
  const toggleNavMenus = () => {
    if ((state.isNetwork) || (state.isMenu)) {
      closeAll();
    } else {
      // if initial state is closed then we open navbar
      handleSetState({
        isMenu: true,
      });
    }
  };

  const openNetwork = () => {
    // make sure everything else is closed first
    if (state.isMenu) {
      handleSetState({ isMenu: false });
    }
    handleSetState({
      isNetwork: true,
    });
  };

  /**
   * Helper that will check and turn off any open tabs
   */
  const closeAll = () => {
    handleSetState({
      isNetwork: false,
      isMenu: false,
    });
  };

  return {
    toggleNavMenus,
    closeAll,
    openNetwork,
    isNetwork: state.isNetwork,
    isMenu: state.isMenu,
    isOpen: state.isNetwork || state.isMenu,
  };
};
