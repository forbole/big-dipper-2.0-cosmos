/* eslint-disable no-restricted-syntax */

import { MutableRefObject, RefCallback } from 'react';

/**
 * helper function to merge multiple refs
 * @param refs
 */
export const mergeRefs = <T>(...refs: Array<MutableRefObject<T> | RefCallback<T>>) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];
  return (inst: T) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
