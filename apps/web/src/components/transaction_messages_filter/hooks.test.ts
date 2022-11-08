import {
  renderHook,
  cleanup,
  act,
} from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useTransactionsFilter } from './hooks';

const callback = jest.fn();

describe('hook: useTransactionsFilter', () => {
  test('handles filter selection correctly', () => {
    const { result } = renderHook(() => useTransactionsFilter(callback),
      {
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