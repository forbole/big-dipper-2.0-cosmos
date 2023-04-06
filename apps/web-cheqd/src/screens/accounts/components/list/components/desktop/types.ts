import { CSSProperties, ReactNode } from 'react';
import { ItemType } from '@/screens/accounts/components/list/types';

export type DesktopProps = {
  className?: string;
  items: ItemType[] | undefined;
};

export type CellProps = {
  style: CSSProperties;
  rowIndex: number;
  children: ReactNode;
  cx: string;
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
