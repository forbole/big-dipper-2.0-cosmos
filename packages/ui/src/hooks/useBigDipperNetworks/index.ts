import chainConfig from '@/chainConfig';
import { ChainIdQuery, useChainIdQuery } from '@/graphql/types/general_types';
import { BigDipperNetwork, zBigDipperNetwork } from '@/models/bigDipperNetwork';
import { gql, makeVar, useQuery, useReactiveVar } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import z from 'zod';

const { network } = chainConfig();

// Define a GraphQL query to fetch the networks data
export const query = gql`
  query Rest {
    networks @rest(type: "BigDipperNetworks", path: "networks.json") {
      name
      logo
      links
    }
  }
`;

// Define a Zod schema for the query data
export const zQuery = z.object({
  networks: z
    .array(
      z.object({
        name: z.coerce.string().default('').catch(''),
        logo: z.coerce.string().default('').catch(''),
        links: z
          .array(
            z.object({
              chain_id: z.coerce.string().default('').catch(''),
              name: z.coerce.string().default('').catch(''),
              url: z.coerce.string().default('').catch(''),
            })
          )
          .catch([]),
      })
    )
    .optional(),
});
export type Query = z.infer<typeof zQuery>;

// Sort the networks data alphabetically by name
const mapQueryToModel = (data?: Query) =>
  zQuery
    .parse(data)
    ?.networks?.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'accent' }))
    .map((l) => zBigDipperNetwork.parse(l)) ?? [];

// Get the chain ID from a GraphQL query response
const mapChainIdToModel = (data?: ChainIdQuery) => data?.genesis?.[0]?.chainId ?? '';

// Create a reactive variable to hold the Big Dipper network data
const networksVar = makeVar<BigDipperNetwork[]>([]);
const selectedNameVar = makeVar<BigDipperNetwork['name']>(network);

function useBigDipperNetworks(skipChainId = false) {
  // Fetch the networks data using the GraphQL query
  const { loading, error, data, refetch } = useQuery<Query>(query);

  // Refetch the query if there's an error and loading is completed
  const shouldRefetch = !!error && !loading;
  useEffect(() => {
    if (shouldRefetch) refetch();
  }, [shouldRefetch, refetch]);

  const isCompleted = !loading && !error;
  // Store the fetched networks data in the reactive variable when the data is loaded
  useEffect(() => {
    if (isCompleted) networksVar(mapQueryToModel(data));
  }, [isCompleted, data]);

  // Fetch the chain ID using a GraphQL query
  const chainIdQuery = useChainIdQuery({ skip: skipChainId });

  // Refetch the query if there's an error and loading is completed
  const shouldRefetchChainId = !!chainIdQuery.error && !chainIdQuery.loading;
  const refetchChainId = chainIdQuery.refetch;
  useEffect(() => {
    if (shouldRefetchChainId) refetchChainId();
  }, [shouldRefetchChainId, refetchChainId]);

  const isCompletedChainId = !chainIdQuery.loading && !chainIdQuery.error;
  const dataChainId = chainIdQuery.data;

  // Store the fetched chain ID in the reactive variable when the data is loaded
  useEffect(() => {
    if (isCompletedChainId && dataChainId) selectedNameVar(mapChainIdToModel(dataChainId));
  }, [isCompletedChainId, dataChainId]);

  const networks = useReactiveVar(networksVar);
  const setNetworks = useCallback((value: BigDipperNetwork[]) => networksVar(value), []);
  const selectedName = useReactiveVar(selectedNameVar);
  const setSelectedName = useCallback((value: string) => selectedNameVar(value), []);

  return {
    loading,
    error,
    networks,
    setNetworks,
    selectedName,
    setSelectedName,
  };
}

export default useBigDipperNetworks;
