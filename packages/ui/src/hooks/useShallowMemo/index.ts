import * as R from 'ramda';
import { useRef } from 'react';

/**
 * It returns the same value as the previous render if the value hasn't changed
 * @param {V} value - The value to memoize.
 * @returns The current value of the ref.
 */
const useShallowMemo = <V, K = keyof unknown>(value: V, key?: K): V => {
  const ref = useRef(new Map<K | undefined, V>([[key, value]]));
  if (!R.equals(ref.current.get(key), value)) {
    ref.current.set(key, value);
  }
  return ref.current.get(key) ?? value;
};

export default useShallowMemo;
