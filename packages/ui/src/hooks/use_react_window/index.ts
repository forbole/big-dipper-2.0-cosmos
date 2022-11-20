import { createRef, useCallback, useEffect, useRef } from 'react';
import * as R from 'ramda';

// reusable hook helpers for react window list components

export const useList = () => {
  const listRef = useRef({});
  const rowHeights = useRef<{ [key: keyof any]: number }>({});

  const getRowHeight = useCallback((index: keyof any) => rowHeights.current[index] + 16 || 100, []);

  const setRowHeight = useCallback((idx: keyof any, size: number) => {
    R.pathOr(
      (_: number) => {
        console.error('something went wrong');
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
  const rowRef: any = useRef({});

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, R.pathOr(0, ['current', 'clientHeight'], rowRef));
    }
  }, [index, rowRef, setRowHeight]);

  return {
    rowRef,
  };
};

export const useGrid = (
  columns: {
    key: string;
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
    width: number;
  }[]
) => {
  const gridRef = createRef();
  const columnRef = createRef();

  const onResize = useCallback(() => {
    if (gridRef.current != null) {
      R.pathOr((_: number) => null, ['current', 'resetAfterColumnIndex'], gridRef)(0);
    }
    if (columnRef.current != null) {
      R.pathOr((_: number) => null, ['current', 'resetAfterColumnIndex'], columnRef)(0);
    }
  }, [columnRef, gridRef]);

  const getColumnWidth = useCallback(
    (width: number, index: number) => (columns[index].width * width) / 100,
    [columns]
  );

  const getRowHeight = useCallback(() => 
    // this matches mui table height setup
     50
  , []);

  return {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  };
};
