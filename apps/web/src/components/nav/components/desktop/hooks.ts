import {
  useState, useEffect,
} from 'react';
import { useScreenSize } from '@hooks';

export const useDesktop = () => {
  const { isDesktop } = useScreenSize();
  const [isMenu, setMenu] = useState(false);
  const [isNetwork, setNetwork] = useState(false);

  useEffect(() => {
    // if window size shrinks to tablet/mobile we will close any open tabs
    if (!isDesktop) {
      turnOffAll();
    }
  }, [isDesktop]);

  const toggleMenu = () => {
    setMenu(!isMenu);
  };

  const toggleNetwork = () => {
    setNetwork(!isNetwork);
  };

  /**
   * Helper that will check and turn off any open tabs
   */
  const turnOffAll = () => {
    setMenu(false);
    setNetwork(false);
  };

  return {
    isMenu,
    setMenu,
    toggleMenu,
    toggleNetwork,
    isNetwork,
    turnOffAll,
  };
};
