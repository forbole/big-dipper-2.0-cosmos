import { InfiniteQuery, UseInfiniteQueryParams } from '@/hooks/useInfiniteQuery/types';
import { makeVar, useQuery } from '@apollo/client';
import * as R from 'ramda';
import { useEffect, useMemo } from 'react';
import useShallowMemo from '../useShallowMemo';

/* A constant that is used to determine how many items to fetch at a time. */
export const ITEMS_PER_PAGE = 100;
export const DEFAULT_VARIABLES = {};

const variablesVar = makeVar<{ [cursor: string]: object }>({});
export const maxFetchedVar = makeVar<{ [cursor: string]: number }>({});
export const itemCountVar = makeVar<{ [cursor: string]: number }>({});

const useInfiniteQuery = <TData, TVariables, TItem>({
  cursor,
  document,
  formatter,
  variables = DEFAULT_VARIABLES,
  offset = 0,
  skip = false,
  itemsPerPage = ITEMS_PER_PAGE,
}: UseInfiniteQueryParams<TData, TVariables, TItem>): InfiniteQuery<TData, TVariables, TItem> => {
  /* Fetch data by offset. */
  const anchorVariables = useShallowMemo({
    ...variables,
    offset,
    limit: itemsPerPage,
  } as TVariables);
  const { data, error, loading, refetch } = useQuery(document, {
    variables: anchorVariables,
    skip,
  });

  /* Refetch when loading is stop and there is an error. */
  const shouldRefetch = !!error && !loading;
  useEffect(() => {
    if (shouldRefetch) refetch();
  }, [shouldRefetch, refetch]);

  /* Using the `useMemo` hook to memoize the `formatter` function. */
  const items = useMemo(() => formatter(data), [data, formatter]);

  // Reset the item count and max fetched when the variables change.
  const prevVariables = variablesVar();
  if (!R.equals(prevVariables[cursor], variables)) {
    variablesVar({ ...prevVariables, [cursor]: variables });
    maxFetchedVar(R.omit([cursor], maxFetchedVar()));
    itemCountVar(R.omit([cursor], itemCountVar()));
  }

  const isCompleted = !loading && !error;
  const newItemCount = offset + (items?.length ?? 0);
  const isNoMore = items?.length < itemsPerPage;
  const hasItem = items?.length > 0;
  useEffect(() => {
    if (!isCompleted) return;

    const prevMaxFetched = maxFetchedVar();
    if (prevMaxFetched[cursor] === undefined || prevMaxFetched[cursor] < newItemCount) {
      maxFetchedVar({ ...prevMaxFetched, [cursor]: newItemCount });
    }

    const prevItemCount = itemCountVar();
    if (
      (isNoMore &&
        (prevItemCount[cursor] === undefined || hasItem || prevItemCount[cursor] > newItemCount)) ||
      (prevItemCount[cursor] !== undefined && prevItemCount[cursor] < newItemCount)
    ) {
      itemCountVar({ ...prevItemCount, [cursor]: newItemCount });
    }
  }, [isCompleted, newItemCount, isNoMore, cursor, hasItem]);

  return { loading, error, items, refetch, itemsPerPage, cursor };
};

export default useInfiniteQuery;
