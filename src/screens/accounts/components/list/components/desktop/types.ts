import { CSSProperties } from '@material-ui/styles';
import { ItemType } from '../../types';

export type DesktopProps = {
  className?: string;
  items: ItemType[] | undefined;
};

export type CellProps = {
  style: CSSProperties;
  rowIndex: number;
};
export type HeaderProps = {
  style: CSSProperties;
  columnIndex: number;
};

export type RowProps = {
  data: ItemType;
  style: CSSProperties;
  rowIndex: number;
  columnIndex: number;
};
