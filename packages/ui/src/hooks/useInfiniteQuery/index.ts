import { InfiniteQuery, UseInfiniteQueryParams } from '@/hooks/useInfiniteQuery/types';
import { makeVar, useQuery, useReactiveVar } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import useShallowMemo from '../useShallowMemo';

/* A constant that is used to determine how many items to fetch at a time. */
export const ITEMS_PER_PAGE = 100;
export const DEFAULT_VARIABLES = {};

export const itemCountsVar = makeVar<Record<string, number>>({});

const useInfiniteQuery = <TData, TVariables, TItem>({
  document,
  formatter,
  variables = DEFAULT_VARIABLES,
  offset = 0,
  skip = false,
  itemsPerPage = ITEMS_PER_PAGE,
}: UseInfiniteQueryParams<TData, TVariables, TItem>): Omit<
  InfiniteQuery<TData, TVariables, TItem>,
  'itemCount'
> => {
  /* Fetch data by offset. */
  const cursor = useShallowMemo(JSON.stringify(variables));
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

  const items = useMemo(() => formatter(data), [data, formatter]);

  const hasItems = items?.length > 0;
  const isNoMore = !loading && !error && items?.length < itemsPerPage;
  const newItemCount = offset + (items?.length ?? 0);
  useEffect(() => {
    if (isNoMore) {
      const itemCounts = itemCountsVar();

      if (!(cursor in itemCounts)) {
        itemCountsVar({ ...itemCounts, [cursor]: newItemCount });
      } else if (newItemCount < itemCounts[cursor]) {
        itemCountsVar({ ...itemCounts, [cursor]: newItemCount });
      } else if (hasItems && newItemCount > itemCounts[cursor]) {
        itemCountsVar({ ...itemCounts, [cursor]: newItemCount });
      }
    }
  }, [cursor, hasItems, isNoMore, newItemCount]);

  return { loading, error, items, refetch, itemsPerPage, cursor };
};

const useInfiniteQueryWithItemCount = <TData, TVariables, TItem>(
  props: UseInfiniteQueryParams<TData, TVariables, TItem>
): InfiniteQuery<TData, TVariables, TItem> => {
  const result = useInfiniteQuery(props);
  const itemCounts = useReactiveVar(itemCountsVar);
  const itemCount = itemCounts[result.cursor];
  return { ...result, itemCount };
};

export default useInfiniteQueryWithItemCount;
