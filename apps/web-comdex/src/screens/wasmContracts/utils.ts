import { WasmCodeType, WasmContractType } from '@/screens/wasmContracts/types';
import { Property } from 'csstype';

export const columnsContract: {
  columnKey: keyof WasmContractType;
  justifyContent?: Property.JustifyContent;
  textAlign?: Property.TextAlign;
  width: number | boolean;
  widthMobile: number | 'auto' | boolean;
  orderMobile?: Property.Order;
}[] = [
  {
    columnKey: 'contractName',
    width: true,
    widthMobile: 9,
  },
  {
    columnKey: 'contractTypeName',
    width: 1.9,
    widthMobile: 9,
    orderMobile: 2,
  },
  {
    columnKey: 'contractAddress',
    width: 1.5,
    widthMobile: 9,
    orderMobile: 3,
  },
  {
    columnKey: 'height',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 1,
    widthMobile: 3,
    orderMobile: 1,
  },
  {
    columnKey: 'creator',
    width: 1.5,
    widthMobile: 8,
    orderMobile: 4,
  },
  {
    columnKey: 'executes',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 1,
    widthMobile: 3,
    orderMobile: 2,
  },
  {
    columnKey: 'initiatedAt',
    width: 1.2,
    widthMobile: 3,
    orderMobile: 3,
  },
  {
    columnKey: 'lastExecuted',
    width: 1.2,
    widthMobile: 3,
    orderMobile: 5,
  },
];

export const columnsCode: {
  columnKey: keyof WasmCodeType;
  justifyContent?: Property.JustifyContent;
  textAlign?: Property.TextAlign;
  width: number | boolean;
  widthMobile: number | 'auto' | boolean;
  orderMobile?: Property.Order;
}[] = [
  {
    columnKey: 'id',
    width: 1,
    widthMobile: 3,
  },
  {
    columnKey: 'height',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: 1,
    widthMobile: 3,
    orderMobile: 2,
  },
  {
    columnKey: 'instantiatePermission',
    width: true,
    widthMobile: 9,
    orderMobile: 1,
  },
  {
    columnKey: 'sender',
    width: 4,
    widthMobile: 9,
  },
];
