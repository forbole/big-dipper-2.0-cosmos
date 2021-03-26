import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs from 'dayjs';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items: any[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('validators');
  const formatItems = items.map((x) => {
    return ({
      address: (
        <AvatarName
          address={x?.address?.identity}
          imageUrl={x?.address?.image}
          name={x?.address?.moniker}
        />
      ),
      amount: x.amount,
      linkedUntil: dayjs(x.linkedUntil).format('YYYY-MM-DD'),
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
          {formatItems.map((row, i) => (
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
