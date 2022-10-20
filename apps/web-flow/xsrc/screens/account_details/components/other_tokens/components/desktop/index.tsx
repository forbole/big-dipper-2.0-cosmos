import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { OtherTokenType } from '@src/screens/account_details/types';
import { formatNumber } from '@utils/format_token';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: OtherTokenType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('accounts');

  const formattedItems = items.map((x) => {
    return ({
      token: x.denom.toUpperCase(),
      commission: formatNumber(x.commission.value, x.commission.exponent),
      available: formatNumber(x.available.value, x.available.exponent),
      reward: formatNumber(x.reward.value, x.reward.exponent),
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
