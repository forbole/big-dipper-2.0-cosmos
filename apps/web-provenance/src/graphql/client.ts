import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import webSocketImpl from 'isomorphic-ws';
import { Kind, OperationTypeNode } from 'graphql';
import { useMemo } from 'react';

const defaultOptions: any = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_WS ?? 'ss://localhost:3000',
  options: {
    reconnect: true,
  },
  webSocketImpl,
});

let link: ApolloLink = httpLink;

if (typeof window !== 'undefined') {
  link = split(
    ({ query }) => {
      const node = getMainDefinition(query);
      return (
        node.kind === Kind.OPERATION_DEFINITION && node.operation === OperationTypeNode.SUBSCRIPTION
      );
    },
    wsLink,
    httpLink
  );
}

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {},
  });

  return forward(operation);
});

function createApolloClient() {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: concat(authMiddleware, link),
    cache: new InMemoryCache({}),
  });

  client.defaultOptions = defaultOptions;

  return client;
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo(initialState?: NormalizedCacheObject) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({
      ...existingCache,
      ...initialState,
    });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
