import * as R from 'ramda';
import { useCallback, useEffect, useRef } from 'react';
import type { VariableSizeGrid } from 'react-window';
import useShallowMemo from '@/hooks/useShallowMemo';

// reusable hook helpers for react window list components

export const useList = () => {
  const listRef = useRef({});
  const rowHeights = useRef<{ [key: number]: number }>({});

  const getRowHeight = useCallback((index: number) => rowHeights.current[index] + 16 || 100, []);

  const setRowHeight = useCallback((idx: number, size: number) => {
    R.pathOr(
      (_: number) => {
        throw new Error('something went wrong');
      },
      ['current', 'resetAfterIndex'],
      listRef
    )(0);
    rowHeights.current = {
      ...rowHeights.current,
      [idx]: size,
    };
  }, []);

  return {
    listRef,
    rowHeights,
    getRowHeight,
    setRowHeight,
  };
};

export const useListRow = (
  index: number,
  setRowHeight: (idx: number, clientHeight: number) => void
) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef?.current?.clientHeight ?? 0);
    }
  }, [index, rowRef, setRowHeight]);

  return {
    rowRef,
  };
};

export const useGrid = (
  columns: Array<{
    key: string;
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
    width: number;
  }>
) => {
  const gridRef = useRef<VariableSizeGrid>();
  const columnRef = useRef<VariableSizeGrid>();
  const columnsMemo = useShallowMemo(columns);

  const onResize = useCallback(() => {
    if (gridRef.current !== null) {
      (gridRef?.current?.resetAfterColumnIndex ?? ((_: number) => null))(0);
    }
    if (columnRef.current !== null) {
      (columnRef?.current?.resetAfterColumnIndex ?? ((_: number) => null))(0);
    }
  }, [columnRef, gridRef]);

  const getColumnWidth = useCallback(
    (width: number, index: number) => (columnsMemo[index].width * width) / 100,
    [columnsMemo]
  );

  const getRowHeight = useCallback(
    () =>
      // this matches mui table height setup
      50,
    []
  );

  return {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  };
};
