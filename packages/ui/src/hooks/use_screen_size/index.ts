import { useEffect, useState } from 'react';
import { useStyles } from 'tss-react/mui';

const isClient = typeof window === 'object';

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>(getSize());
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const { theme } = useStyles();

  useEffect(() => {
    if (!isClient) {
      return () => false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const width = windowSize?.width ?? 0;
    // is mobile
    if (width < theme?.breakpoints?.values?.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // is tablet
    if (width >= theme?.breakpoints?.values?.md && width < theme?.breakpoints?.values?.lg) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }

    // is desktop
    if (width >= theme?.breakpoints?.values?.lg) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [theme?.breakpoints?.values?.lg, theme?.breakpoints?.values?.md, windowSize?.width]);

  return {
    windowSize,
    isDesktop,
    isTablet,
    isMobile,
  };
};

function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  };
}
