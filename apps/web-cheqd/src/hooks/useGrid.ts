/* eslint-disable object-curly-newline */
import { useRef } from 'react';
import * as R from 'ramda';
import { VariableSizeGrid } from 'react-window';

const useGrid = <T = VariableSizeGrid>(
  columns: {
    key: string;
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
    width: number;
  }[]
) => {
  const gridRef = useRef<T>();
  const columnRef = useRef<T>();

  const onResize = () => {
    if (gridRef.current != null) {
      R.pathOr((_: number) => null, ['current', 'resetAfterColumnIndex'], gridRef)(0);
    }
    if (columnRef.current != null) {
      R.pathOr((_: number) => null, ['current', 'resetAfterColumnIndex'], columnRef)(0);
    }
  };

  const getColumnWidth = (width: number, index: number) =>
    ((columns[index].width ?? 0) * width) / 100;

  const getRowHeight = () =>
    // this matches mui table height setup
    50;
  return {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  };
};

export default useGrid;
