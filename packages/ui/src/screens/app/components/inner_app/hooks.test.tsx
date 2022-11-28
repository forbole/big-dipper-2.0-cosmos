import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';
import { cleanup, renderHook } from '@testing-library/react-hooks';

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
    renderHook(() => useChainHealthCheck());
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
