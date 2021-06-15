import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { columns } from './utils';
import { DepositType } from '../../../../types';

const Desktop: React.FC<{
  className?: string;
  items?: DepositType[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('proposals');

  const formattedItems = items.map((x) => {
    return ({
      depositor: (
        <AvatarName
          address={x.user.address}
          imageUrl={x.user.imageUrl}
          name={x.user.name}
        />
      ),
      amount: `${numeral(x.amount.value).format('0,0.[000000]')} ${x.amount.denom.toUpperCase()}`,
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
