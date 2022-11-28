import { useEffect, useState } from 'react';

const isClient = typeof window === 'object';

export const useWindowOrigin = () => {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (!isClient) return;
    setLocation(window.location.origin);
  }, []);

  return { location };
};
