import { ContractType } from '@/screens/wasmContracts/types';
import { Property } from 'csstype';

export const columns: {
  columnKey: keyof ContractType;
  justifyContent?: Property.JustifyContent;
  textAlign?: Property.TextAlign;
  width: number | boolean;
  widthMobile: number | 'auto' | boolean;
  orderMobile?: Property.Order;
}[] = [
  {
    columnKey: 'contractName',
    width: true,
    widthMobile: 12,
  },
  {
    columnKey: 'contractType',
    width: 1,
    widthMobile: 12,
  },
  {
    columnKey: 'contractAddress',
    width: 1,
    widthMobile: 6,
  },
  {
    columnKey: 'height',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 1,
    widthMobile: 6,
  },
  {
    columnKey: 'creator',
    width: 1,
    widthMobile: 6,
  },
  {
    columnKey: 'executes',
    width: 1,
    widthMobile: 6,
  },
  {
    columnKey: 'initiatedAt',
    width: 1,
    widthMobile: 6,
  },
  {
    columnKey: 'lastExecuted',
    width: 1,
    widthMobile: 6,
  },
];
