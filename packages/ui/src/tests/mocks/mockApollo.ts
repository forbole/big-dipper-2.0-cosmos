import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { jest } from '@jest/globals';

export const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

function mockApollo() {
  const useApolloClient = jest.fn(() => mockClient);
  jest.mock('@apollo/client', () => ({
    ...jest.requireActual<object>('@apollo/client'),
    useApolloClient,
  }));
}

export default mockApollo;
