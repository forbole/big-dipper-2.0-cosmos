import {
  InfiniteQuery,
  Summary,
  SummaryVars,
  UseInfiniteQueryParams,
} from '@/hooks/useInfiniteQuery/types';
import useShallowMemo from '@/hooks/useShallowMemo';
import { makeVar, OperationVariables, ReactiveVar, useQuery } from '@apollo/client';
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
  if (!(cursor in summaryVars)) {
    summaryVars[cursor] = makeVar<Summary>(initial);
    return summaryVars[cursor];
  }

  const summaryVar = summaryVars[cursor];
  const { variables: prevVariables } = summaryVar();
  if (!R.equals(prevVariables, initial.variables)) {
    summaryVar({ variables: initial.variables });
  }
  return summaryVar;
}

const useInfiniteQuery = <TData, TVariables, TItem>({
  cursor,
  document,
  dataMapper: mapDataToModel,
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
  } as OperationVariables);
  const { data, error, loading, refetch } = useQuery(document, {
    variables: anchorVariables,
    skip,
  });

  /* Refetch when loading is stop and there is an error. */
  const shouldRefetch = !!error && !loading;
  useEffect(() => {
    if (shouldRefetch) refetch();
  }, [shouldRefetch, refetch]);

  /* Using the `useMemo` hook to memoize the `mapDataToModel` function. */
  const items = useMemo(() => mapDataToModel(data), [data, mapDataToModel]);

  const summaryVar = makeSummaryVar(cursor, { variables });
  const { maxFetched, itemCount } = summaryVar();

  const isCompleted = !loading && !error;
  const newItemCount = offset + (items?.length ?? 0);
  const isNoMore = items?.length < itemsPerPage;
  const hasItem = items?.length > 0;
  useEffect(() => {
    if (!isCompleted) return;

    if (maxFetched === undefined || maxFetched < newItemCount) {
      summaryVar({ ...summaryVar(), maxFetched: newItemCount });
    }

    if (
      (isNoMore && (itemCount === undefined || hasItem || itemCount > newItemCount)) ||
      (itemCount !== undefined && itemCount < newItemCount)
    ) {
      summaryVar({ ...summaryVar(), itemCount: newItemCount });
    }
  }, [isCompleted, newItemCount, isNoMore, cursor, hasItem, summaryVar, maxFetched, itemCount]);

  return { loading, error, items, refetch, itemsPerPage, cursor };
};

export default useInfiniteQuery;
