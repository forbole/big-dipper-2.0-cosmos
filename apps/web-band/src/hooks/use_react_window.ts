import {
  useRef,
  useEffect,
  createRef,
} from 'react';
import * as R from 'ramda';

// reusable hook helpers for react window list components

export const useList = () => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  const getRowHeight = (index) => {
    return rowHeights.current[index] + 16 || 100;
  };

  const setRowHeight = (idx, size) => {
    R.pathOr(() => { console.log('something went wrong'); }, ['current', 'resetAfterIndex'], listRef)(0);
    rowHeights.current = {
      ...rowHeights.current, [idx]: size,
    };
  };

  return {
    listRef,
    rowHeights,
    getRowHeight,
    setRowHeight,
  };
};

export const useListRow = (
  index: number,
  setRowHeight: (idx: number, clientHeight: number) => void,
) => {
  const rowRef:any = useRef({});

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, R.pathOr(0, ['current', 'clientHeight'], rowRef));
    }
  }, [rowRef]);

  return {
    rowRef,
  };
};

export const useGrid = (columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[]) => {
  const gridRef = createRef();
  const columnRef = createRef();

  const onResize = () => {
    if (gridRef.current != null) {
      R.pathOr(() => null, ['current', 'resetAfterColumnIndex'], gridRef)(0);
    }
    if (columnRef.current != null) {
      R.pathOr(() => null, ['current', 'resetAfterColumnIndex'], columnRef)(0);
    }
  };

  const getColumnWidth = (width, index) => {
    return (columns[index].width * width) / 100;
  };

  const getRowHeight = () => {
    // this matches mui table height setup
    return 50;
  };

  return {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  };
};
