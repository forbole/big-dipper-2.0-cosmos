import * as R from 'ramda';

export const mergeStateChange = (prevState:any, change: any) => {
  return R.mergeDeepLeft(change, prevState);
};
