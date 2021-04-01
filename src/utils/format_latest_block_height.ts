import {
  LatestBlockHeightOffsetQuery,
} from '@graphql/types';

export const formatLatestBlockHeight = (data: LatestBlockHeightOffsetQuery) => {
  return data.height[0]?.height ?? null;
};
