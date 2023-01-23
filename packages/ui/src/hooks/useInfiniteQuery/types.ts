import { ApolloError, ApolloQueryResult, TypedDocumentNode } from '@apollo/client';

export type Data<TItem> = {
  loading: boolean;
  error: ApolloError | undefined;
  items: TItem[];
};

export type UseData<TItem> = (index: number, skip?: boolean) => Data<TItem>;

export interface InfiniteQuery<TData, TVariables, TItem> {
  loading: boolean;
  error: ApolloError | undefined;
  items: TItem[];
  itemsPerPage: number;
  cursor: string;
  refetch: (variables?: Partial<TVariables> | undefined) => Promise<ApolloQueryResult<TData>>;
}

export type UseInfiniteQuery<TData, TVariables, TItem> = (
  document: TypedDocumentNode<TData, TVariables>,
  formatter: (data: TData | undefined) => TItem[],
  getOffsetVariables: (data: TData | undefined) => TVariables
) => InfiniteQuery<TData, TVariables, TItem>;

export interface UseInfiniteQueryParams<TData, TVariables, TItem> {
  cursor: string;
  document: TypedDocumentNode<TData, TVariables>;
  formatter: (data: TData | undefined) => TItem[];
  variables?: Partial<TVariables>;
  offset?: number;
  skip?: boolean;
  itemsPerPage?: number;
}
