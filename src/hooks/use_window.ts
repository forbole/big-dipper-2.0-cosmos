import {
  useState, useEffect,
} from 'react';

export const useWindowUrl = () => {
  const isClient = typeof window === 'object';
  const [url, setUrl] = useState('');

  useEffect((): any => {
    if (!isClient) {
      return false;
    }
    setUrl(window.location.href);
  }, []);

  return {
    url,
  };
};
