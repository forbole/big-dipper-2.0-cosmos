import { AssetType } from '@/screens/assets/types';
import { Property } from 'csstype';

export const columns: {
  columnKey: keyof AssetType;
  justifyContent?: Property.JustifyContent;
  textAlign?: Property.TextAlign;
  width: number | boolean;
  widthMobile: number | 'auto' | boolean;
  orderMobile?: Property.Order;
}[] = [
  {
    columnKey: 'tokenName',
    width: true,
    widthMobile: 12,
  },
  {
    columnKey: 'price',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 2,
    widthMobile: 6,
    orderMobile: 1,
  },
  {
    columnKey: 'markerType',
    width: 2,
    widthMobile: 6,
  },
  {
    columnKey: 'supply',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 2,
    widthMobile: 6,
    orderMobile: 1,
  },
];
