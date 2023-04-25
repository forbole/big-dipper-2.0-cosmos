import { ItemType } from '@/screens/accounts/components/list/types';

export type MobileProps = {
  className?: string | undefined;
  items: ItemType[] | undefined;
};

export type RowProps = {
  data: ItemType;
  index: number;
  itemCount: number | undefined;
};
