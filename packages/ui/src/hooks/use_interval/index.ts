import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // initial call
  useEffect(() => {
    savedCallback.current();
  }, []);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    const id = delay !== null ? setInterval(tick, delay) : undefined;
    return () => clearInterval(id);
  }, [delay]);
};
