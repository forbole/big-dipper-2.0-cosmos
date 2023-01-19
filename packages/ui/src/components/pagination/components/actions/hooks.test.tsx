import { act, cleanup, renderHook } from '@testing-library/react';
import { useTablePaginationActions } from '@/components/pagination/components/actions/hooks';

const props = {
  count: 100,
  onPageChange: () => jest.fn(),
  handleRowsPerPageChange: () => jest.fn(),
  page: 0,
  rowsPerPage: 100,
};

describe('hook: useTablePaginationActions', () => {
  test('handles first page correctly', () => {
    const { result } = renderHook(() => useTablePaginationActions(props));

    act(() => result.current.handleFirstPage());
    expect(result.current.page).toEqual(0);
  });

  test('handles next page correctly', () => {
    const { result } = renderHook(() => useTablePaginationActions(props));
    act(() => result.current.handleNextPage());
    expect(result.current.page).toEqual(0);
  });

  test('handles previous page correctly', () => {
    const { result } = renderHook(() => useTablePaginationActions(props));

    act(() => result.current.handlePreviousPage());
    expect(result.current.page).toEqual(0);
  });

  test('handles last page correctly', () => {
    const { result } = renderHook(() => useTablePaginationActions(props));

    act(() => result.current.handleLastPage());
    expect(result.current.page).toEqual(0);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
