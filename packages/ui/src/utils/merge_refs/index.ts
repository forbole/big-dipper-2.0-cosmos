/* eslint-disable no-restricted-syntax */

import React from 'react';

/**
 * helper function to merge multiple refs
 * @param refs
 */
export const mergeRefs = <T>(...refs: Array<React.MutableRefObject<T> | React.RefCallback<T>>) => {
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
