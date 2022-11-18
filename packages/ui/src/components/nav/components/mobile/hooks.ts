import { useState, useEffect, useCallback } from 'react';
import * as R from 'ramda';
import { useScreenSize } from 'ui/hooks';

export const useMobile = () => {
  // ==========================
  // globals
  // ==========================
  const { isDesktop } = useScreenSize();

  const [state, setState] = useState<{
    isMenu?: boolean;
    isNetwork?: boolean;
  }>({
    isMenu: false,
    isNetwork: false,
  });

  const handleSetState = useCallback((stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  const openNetwork = useCallback(() => {
    // make sure everything else is closed first
    if (state.isMenu) {
      handleSetState({ isMenu: false });
    }
    handleSetState({
      isNetwork: true,
    });
  }, [handleSetState, state.isMenu]);

  /**
   * Helper that will check and turn off any open tabs
   */
  const closeAll = useCallback(() => {
    handleSetState({
      isNetwork: false,
      isMenu: false,
    });
  }, [handleSetState]);

  // closes menu if opened and opens menu if
  // closed and hamburger icon is clicked
  const toggleNavMenus = useCallback(() => {
    if (state.isNetwork || state.isMenu) {
      closeAll();
    } else {
      // if initial state is closed then we open navbar
      handleSetState({
        isMenu: true,
      });
    }
  }, [closeAll, handleSetState, state.isMenu, state.isNetwork]);

  useEffect(() => {
    if (isDesktop) {
      closeAll();
    }
  }, [closeAll, isDesktop]);

  return {
    toggleNavMenus,
    closeAll,
    openNetwork,
    isNetwork: state.isNetwork,
    isMenu: state.isMenu,
    isOpen: (state.isNetwork || state.isMenu) ?? false,
  };
};
