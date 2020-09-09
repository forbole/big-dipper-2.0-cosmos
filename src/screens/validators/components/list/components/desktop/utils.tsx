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
  sort?: boolean;
}[] => {
  return ([
    {
      key: 'idx',
      width: 10,
    },
    {
      key: 'validator',
      width: 20,
      sort: true,
    },
    {
      key: 'stake',
      align: 'right',
      width: 15,
      sort: true,
    },
    {
      key: 'fee',
      align: 'right',
      width: 10,
      sort: true,
    },
    {
      key: 'lastVote',
      align: 'right',
      width: 15,
    },
    {
      key: 'skipRate',
      width: 15,
      sort: true,
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
