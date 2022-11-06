import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationDefinitionNode, OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import { useMemo } from 'react';
import chainConfig from 'ui/chainConfig';

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

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

let wsLink: GraphQLWsLink;
let link: ApolloLink = httpLink;

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GRAPHQL_WS) {
  wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS,
    })
  );
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

function createApolloClient() {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache({}),
  });

  client.defaultOptions = defaultOptions;

  return client;
}

export function initializeApollo(initialState?: NormalizedCacheObject) {
  // eslint-disable-next-line
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
