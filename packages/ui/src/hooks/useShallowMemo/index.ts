import * as R from 'ramda';
import { useRef } from 'react';

/**
 * It returns the same value as the previous render if the value hasn't changed
 * @param {V} value - The value to memoize.
 * @returns The current value of the ref.
 */
const useShallowMemo = <V, K>(value: V, key?: K): V => {
  const ref = useRef(new Map<K | undefined, V>([[key, value]]));
  if (!R.equals(ref.current.get(key), value)) {
    ref.current.set(key, value);
  }
  const val = ref.current.get(key);
  if (!val) throw new Error('Value is undefined');
  return val;
};

export default useShallowMemo;
