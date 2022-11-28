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

  const id = useRef<NodeJS.Timeout>();

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    clearInterval(id.current);
    id.current = delay !== null ? setInterval(tick, delay) : undefined;
    return () => clearInterval(id.current);
  }, [delay]);
};
