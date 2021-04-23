import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { InfoPopover } from '@components';

export const fetchColumns = (t): {
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
      width: 10,
    },
    {
      key: 'validator',
      sortKey: 'moniker',
      width: 20,
      sort: true,
    },
    {
      key: 'votingPower',
      sortKey: 'votingPower',
      width: 25,
      sort: true,
    },
    {
      key: 'self',
      sortKey: 'self',
      align: 'right',
      width: 15,
      sort: true,
    },
    {
      key: 'commission',
      align: 'right',
      width: 15,
    },
    {
      key: 'condition',
      align: 'center',
      width: 15,
      component: (
        <Typography variant="h4" className="label popover">
          {t('condition')}
          <InfoPopover
            content={t('conditionExplanation')}
          />
        </Typography>
      ),
    },
  ]);
};
