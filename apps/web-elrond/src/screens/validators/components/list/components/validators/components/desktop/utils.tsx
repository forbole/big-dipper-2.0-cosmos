import { ReactNode } from 'react';

export const fetchColumns = (): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => [
  {
    key: 'idx',
    width: 5,
  },
  {
    key: 'validator',
    sortKey: 'validator.name',
    width: 25,
    sort: true,
  },
  {
    key: 'locked',
    sortKey: 'locked.value',
    width: 22,
    sort: true,
  },
  // {
  //   key: 'stake',
  //   sortKey: 'stake.value',
  //   align: 'right',
  //   width: 10,
  //   sort: true,
  // },
  {
    key: 'commission',
    sortKey: 'commission',
    align: 'right',
    width: 12,
    sort: true,
  },
  {
    key: 'apr',
    sortKey: 'apr',
    align: 'right',
    width: 12,
    sort: true,
  },
  {
    key: 'delegators',
    sortKey: 'delegators',
    align: 'right',
    width: 12,
    sort: true,
  },
  {
    key: 'nodes',
    sortKey: 'nodes',
    align: 'right',
    width: 12,
    sort: true,
  },
];
