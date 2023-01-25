import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';
import { mockClient } from '@/tests/mocks/mockApollo';
import { ApolloProvider } from '@apollo/client';
import { cleanup, renderHook } from '@testing-library/react';

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('hook: useChainHealthCheck', () => {
  test('handles open correctly', () => {
    renderHook(() => useChainHealthCheck(), {
      wrapper: ({ children }) => <ApolloProvider client={mockClient}>{children}</ApolloProvider>,
    });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
