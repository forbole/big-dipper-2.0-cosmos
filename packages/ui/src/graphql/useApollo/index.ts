import chainConfig from '@/chainConfig';
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  NormalizedCacheObject,
  split
} from '@apollo/client';
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import webSocketImpl from 'isomorphic-ws';
import { useEffect, useState } from 'react';

const { chainType, endpoints, extra } = chainConfig();

/* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';

/* A global variable that stores the Apollo Client. */
let globalApolloClient: ApolloClient<NormalizedCacheObject>;

const urlEndpoints = [
  process.env.NEXT_PUBLIC_GRAPHQL_URL,
  endpoints.graphql,
  'http://localhost:3000/v1/graphql',
];

const wsEndpoints = [
  process.env.NEXT_PUBLIC_GRAPHQL_WS,
  endpoints.graphqlWebsocket,
  'ws://localhost:3000/websocket',
];

/* Setting the default options for the Apollo Client. */
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

/* Creating a new HttpLink object. */
function httpBatchLink(uri?: string) {
  return new BatchHttpLink({
    uri,
    batchMax: 25,
    batchInterval: 200,
  });
}

/**
 * It creates a WebSocketLink object that connects to the GraphQL server via a WebSocket connection
 * @returns A WebSocketLink object.
 */
function createWebSocketLink(uri?: string) {
  // older version of Hasura doesn't support graphql-ws
  if (extra.graphqlWs) {
    return new GraphQLWsLink(
      createClient({
        url: uri ?? '',
        lazy: true,
        retryAttempts: Number.MAX_VALUE,
        retryWait: (_count) => new Promise((r) => setTimeout(() => r(), 1000)),
        shouldRetry() {
          return true;
        },
        connectionAckWaitTimeout: 30000,
        webSocketImpl,
      })
    );
  }

  return new WebSocketLink({
    uri: uri ?? '',
    options: {
      lazy: true,
      reconnect: true,
      reconnectionAttempts: Number.MAX_VALUE,
      timeout: 30000,
    },
    webSocketImpl,
  });
}

export function profileApi() {
  if (/^testnet/i.test(chainType)) {
    return 'https://gql.morpheus.desmos.network/v1/graphql';
  }
  return 'https://gql.mainnet.desmos.network/v1/graphql';
}

/**
 * It creates a new Apollo Client, and sets the default options for it
 * @param initialState - The initial state of the cache.
 * @returns A function that takes an initial state and returns an Apollo Client.
 */
function createApolloClient(initialState = {}) {
  /* Restoring the cache from the initial state. */
  const cache = new InMemoryCache().restore(initialState);

  const defaultLink = split(
    /* Checking if the query is a subscription. */
    ({ query }) => {
      const node = getMainDefinition(query);
      const isSubscription = (
        node.kind === Kind.OPERATION_DEFINITION &&
        node.operation === OperationTypeNode.SUBSCRIPTION
      )
      return isSubscription;
    },
    createWebSocketLink(wsEndpoints.find((u) => u)),
    httpBatchLink(urlEndpoints.find((u) => u))
  );
  
  const link = split(({ operationName }) => /^DesmosProfile/.test(operationName),
    httpBatchLink(profileApi()),
    defaultLink,
  );

  /* Creating a new Apollo Client. */
  const client = new ApolloClient({
    ssrMode,
    link,
    cache,
  });

  /* Setting the default options for the Apollo Client. */
  client.defaultOptions = defaultOptions;

  return client;
}

/**
 * If we're on the server, we create a new Apollo Client. If we're on the client, we create a new
 * Apollo Client if one doesn't already exist
 * @param {NormalizedCacheObject} [initialState] - This is the initial state of the Apollo Client. It
 * is used to hydrate the cache.
 * @returns A function that takes in an initialState and returns a new ApolloClient.
 */
export function initializeApollo(initialState?: NormalizedCacheObject) {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return createApolloClient(initialState);

  /* Checking if the globalApolloClient is already created. If it is not, it creates it. */
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }

  return globalApolloClient;
}

/**
 * It initializes the Apollo Client with the initial state and returns the store
 * @param {NormalizedCacheObject} initialState - This is the initial state of the Apollo Client.
 * @returns The Apollo Client instance.
 */
function useApollo(initialState?: NormalizedCacheObject) {
  /* Setting the initial state of the Apollo Client. */
  const [store, setStore] = useState(() => initializeApollo(initialState));

  useEffect(() => {
    /* Setting the store with the new initial state. */
    setStore(initializeApollo(initialState));
  }, []);

  return store;
}

export default useApollo;
