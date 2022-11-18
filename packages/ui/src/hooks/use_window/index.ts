import { useState, useEffect } from 'react';

export const useWindowOrigin = () => {
  const isClient = typeof window === 'object';
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (!isClient) return;
    setLocation(window.location.origin);
  }, [isClient]);

  return { location };
};
