/* eslint-disable object-curly-newline */
import { useRef } from 'react';
import * as R from 'ramda';
import { VariableSizeGrid } from 'react-window';

export const useGrid = <T = VariableSizeGrid>(
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
      R.pathOr(() => null, ['current', 'resetAfterColumnIndex'], gridRef)(0);
    }
    if (columnRef.current != null) {
      R.pathOr(() => null, ['current', 'resetAfterColumnIndex'], columnRef)(0);
    }
  };

  const getColumnWidth = (width: number, index: string | number) => {
    return (columns[index as any].width * width) / 100;
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
