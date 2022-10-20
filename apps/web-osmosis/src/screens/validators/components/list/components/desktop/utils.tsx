import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import {
  InfoPopover, ConditionExplanation,
} from '@components';

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
    // {
    //   key: 'self',
    //   sortKey: 'selfPercent',
    //   align: 'right',
    //   width: 11,
    //   sort: true,
    // },
    // {
    //   key: 'delegators',
    //   sortKey: 'delegators',
    //   align: 'right',
    //   width: 11,
    //   sort: true,
    // },
    {
      key: 'condition',
      align: 'center',
      width: 15,
      component: (
        <Typography variant="h4" className="label popover">
          {t('condition')}
          <InfoPopover
            content={<ConditionExplanation />}
          />
        </Typography>
      ),
    },
    {
      key: 'status',
      width: 15,
    },
  ]);
};
