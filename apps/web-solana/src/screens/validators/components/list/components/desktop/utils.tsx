import React from 'react';

export const fetchColumns = (_t): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => {
  return ([
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
      key: 'skipRate',
      sortKey: 'skipRate.rate',
      align: 'right',
      width: 25,
      sort: true,
    },
    {
      key: 'stake',
      sortKey: 'stake',
      align: 'right',
      width: 15,
      sort: true,
    },
    {
      key: 'commission',
      sortKey: 'commission',
      align: 'right',
      width: 10,
      sort: true,
    },
    {
      key: 'voteDistance',
      sortKey: 'voteDistance',
      align: 'right',
      width: 10,
      sort: true,
    },
    {
      key: 'rootDistance',
      sortKey: 'rootDistance',
      align: 'right',
      width: 10,
      sort: true,
    },
  ]);
};
