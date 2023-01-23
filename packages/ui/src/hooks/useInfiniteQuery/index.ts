import {
  InfiniteQuery,
  Summary,
  SummaryVars,
  UseInfiniteQueryParams,
} from '@/hooks/useInfiniteQuery/types';
import useShallowMemo from '@/hooks/useShallowMemo';
import { makeVar, ReactiveVar, useQuery } from '@apollo/client';
import * as R from 'ramda';
import { useEffect, useMemo } from 'react';

/* A constant that is used to determine how many items to fetch at a time. */
export const ITEMS_PER_PAGE = 100;
export const DEFAULT_VARIABLES = {};

const summaryVars: SummaryVars = {};

/**
 * It creates a reactive variable that holds a summary of the query results
 * @param {string} cursor - The cursor to the summary.
 * @param {object} variables - The variables that will be passed to the GraphQL query.
 * @returns A ReactiveVar<Summary>
 */
export function makeSummaryVar(cursor: string, initial: Summary): ReactiveVar<Summary> {
  if (!(cursor in summaryVars)) summaryVars[cursor] = makeVar<Summary>(initial);
  const summaryVar = summaryVars[cursor];
  const { variables: prevVariables } = summaryVar();
  if (!R.equals(prevVariables, initial.variables)) summaryVar({ variables: initial.variables });
  return summaryVar;
}

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

  const summaryVar = makeSummaryVar(cursor, { variables });
  const prev = summaryVar();

  const isCompleted = !loading && !error;
  const itemCount = offset + (items?.length ?? 0);
  const isNoMore = items?.length < itemsPerPage;
  const hasItem = items?.length > 0;
  useEffect(() => {
    if (!isCompleted) return;

    if (prev.maxFetched === undefined || prev.maxFetched < itemCount) {
      summaryVar({ ...prev, maxFetched: itemCount });
    }

    if (
      (isNoMore && (prev.itemCount === undefined || hasItem || prev.itemCount > itemCount)) ||
      (prev.itemCount !== undefined && prev.itemCount < itemCount)
    ) {
      summaryVar({ ...prev, itemCount });
    }
  }, [isCompleted, itemCount, isNoMore, cursor, hasItem, summaryVar, prev]);

  return { loading, error, items, refetch, itemsPerPage, cursor };
};

export default useInfiniteQuery;
