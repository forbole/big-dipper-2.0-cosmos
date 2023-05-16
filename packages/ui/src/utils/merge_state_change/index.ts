import * as R from 'ramda';

/**
 * Util function to merge 2 objects together
 * Mostly used for recoil state changes
 * @param prevState prevstate object
 * @param change change object
 * @returns newly merged object replacing prev state items with new state items
 */
export const mergeStateChange = <T extends object>(prevState: T, change: Partial<T>) =>
  R.mergeDeepLeft(change, prevState) as unknown as T;
