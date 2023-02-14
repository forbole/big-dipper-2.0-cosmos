import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import { useScreenSize } from '@/hooks/use_screen_size';

type MobileState = {
  isMenu?: boolean;
  isNetwork?: boolean;
};

export const useMobile = () => {
  // ==========================
  // globals
  // ==========================
  const [state, setState] = useState<MobileState>({
    isMenu: false,
    isNetwork: false,
  });

  const handleSetState = useCallback((stateChange: (prevState: MobileState) => MobileState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const openNetwork = useCallback(() => {
    // make sure everything else is closed first
    if (state.isMenu) {
      handleSetState((prevState) => ({ ...prevState, isMenu: false }));
    }
    handleSetState((prevState) => ({
      ...prevState,
      isNetwork: true,
    }));
  }, [handleSetState, state.isMenu]);

  /**
   * Helper that will check and turn off any open tabs
   */
  const closeAll = useCallback(() => {
    handleSetState((prevState) => ({
      ...prevState,
      isNetwork: false,
      isMenu: false,
    }));
  }, [handleSetState]);

  // closes menu if opened and opens menu if
  // closed and hamburger icon is clicked
  const toggleNavMenus = useCallback(
    (toggle?: boolean) => {
      if (toggle === false || state.isNetwork || state.isMenu) {
        closeAll();
      } else {
        // if initial state is closed then we open navbar
        handleSetState((prevState) => ({ ...prevState, isMenu: true }));
      }
    },
    [closeAll, handleSetState, state.isMenu, state.isNetwork]
  );

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
