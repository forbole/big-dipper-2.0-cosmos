import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { cleanup, renderHook } from '@testing-library/react';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('hook: useChainHealthCheck', () => {
  test('handles open correctly', () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    renderHook(() => useChainHealthCheck(), {
      wrapper: ({ children }) => <ApolloProvider client={mockClient}>{children}</ApolloProvider>,
    });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
