import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Helper hook to handle values that may need to be story throughout multiple sessions
 * @param key key value that exist in localstorage
 * @param initialValue initial value to be set if none is found
 */
export const usePersistedState = <P>(
  key: string,
  initialValue: P
): [P, Dispatch<SetStateAction<P>>] => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const retrievePersistedValue = () => {
      try {
        const persistedString = localStorage.getItem(key);
        if (persistedString === null) {
          return;
        }
        const persistedValue = JSON.parse(persistedString);
        setValue(persistedValue);
      } catch (err) {
        // Does nothing
      }
    };

    retrievePersistedValue();
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
