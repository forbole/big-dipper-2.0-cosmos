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
    key: 'votingPower',
    sortKey: 'votingPower',
    width: 30,
    sort: true,
  },
  {
    key: 'commission',
    sortKey: 'commission',
    align: 'right',
    width: 15,
    sort: true,
  },
  {
    key: 'status',
    align: 'center',
    width: 25,
  },
];
