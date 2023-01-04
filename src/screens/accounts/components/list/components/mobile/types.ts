import { ItemType } from '../../types';

export type MobileProps = {
  className?: string | undefined;
  items: ItemType[] | undefined;
};

export type RowProps = {
  data: ItemType;
  index: number;
  itemCount: number | undefined;
};
