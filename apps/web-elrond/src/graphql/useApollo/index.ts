import chainConfig from '@/chainConfig';
import {
    ApolloClient,
    DefaultOptions,
    InMemoryCache,
    NormalizedCacheObject
} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { useEffect, useState } from 'react';

const { chainType } = chainConfig();

/* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';


/* A global variable that stores the Apollo Client. */
let globalApolloClient: ApolloClient<NormalizedCacheObject>;

/* Setting the default options for the Apollo Client. */
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
};

export function profileApi() {
  if (/^testnet/i.test(chainType)) {
    return 'https://gql.morpheus.desmos.network/v1/graphql';
  }
  return 'https://gql.mainnet.desmos.network/v1/graphql';
}

export const BIG_DIPPER_NETWORKS = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/';

/**
 * It creates a new Apollo Client, and sets the default options for it
 * @param initialState - The initial state of the cache.
 * @returns A function that takes an initial state and returns an Apollo Client.
 */
function createApolloClient(initialState = {}) {
  /* Restoring the cache from the initial state. */
  const cache = new InMemoryCache().restore(initialState);

  const link = new RestLink({ uri: BIG_DIPPER_NETWORKS });

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
  if (ssrMode) return createApolloClient(initialState);

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
