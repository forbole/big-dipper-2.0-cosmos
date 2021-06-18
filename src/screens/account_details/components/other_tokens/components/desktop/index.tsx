import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  AvatarName,
} from '@components';
import { DelegationType } from '@src/screens/account_details/types';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: DelegationType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('accounts');

  const formattedItems = items.map((x) => {
    return ({
      validator: (
        <AvatarName
          name={x.validator.name}
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
        />
      ),
      commission: `${numeral(x.commission * 100).format('0.00')}%`,
      amount: `${numeral(x.amount.value).format('0,0.[0000]')} ${x.amount.denom.toUpperCase()}`,
      reward: `${numeral(x.reward.value).format('0,0.[0000]')} ${x.reward.denom.toUpperCase()}`,
    });
  });

  return (
    <div className={classnames(className)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  );
};

export default Desktop;
