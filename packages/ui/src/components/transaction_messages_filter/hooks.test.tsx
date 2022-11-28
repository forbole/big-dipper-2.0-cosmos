import { useTransactionsFilter } from '@/components/transaction_messages_filter/hooks';
import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';

const callback = jest.fn();

describe('hook: useTransactionsFilter', () => {
  test('handles filter selection correctly', () => {
    const { result } = renderHook(() => useTransactionsFilter(callback), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleSelect({ key: 'height' }));
    expect(result.current.selectedFilter).toEqual('height');
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
