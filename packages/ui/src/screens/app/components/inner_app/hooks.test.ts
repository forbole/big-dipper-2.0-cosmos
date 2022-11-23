import { useLatestBlockTimestampLazyQuery } from '@/graphql/types/general_types';
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';

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
    renderHook(() => useChainHealthCheck(useLatestBlockTimestampLazyQuery));
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
