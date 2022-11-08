/* eslint-disable no-restricted-syntax */

import React from 'react';

/**
 * helper function to merge multiple refs
 * @param refs
 */
export const mergeRefs = (...refs: Array<React.MutableRefObject<any> | React.RefCallback<any>>) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];
  return (inst: unknown) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
