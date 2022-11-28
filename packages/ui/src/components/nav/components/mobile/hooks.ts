import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import { useScreenSize } from '@/hooks';

export const useMobile = () => {
  // ==========================
  // globals
  // ==========================
  const [state, setState] = useState<{
    isMenu?: boolean;
    isNetwork?: boolean;
  }>({
    isMenu: false,
    isNetwork: false,
  });

  const handleSetState = useCallback((stateChange: Partial<typeof state>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
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

  const { isDesktop } = useScreenSize();

  useEffect(() => {
    if (isDesktop) {
      closeAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  return {
    toggleNavMenus,
    closeAll,
    openNetwork,
    isNetwork: state.isNetwork,
    isMenu: state.isMenu,
    isOpen: (state.isNetwork || state.isMenu) ?? false,
  };
};
