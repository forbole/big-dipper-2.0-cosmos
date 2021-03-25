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
import dayjs from 'dayjs';
import { AvatarName } from '@components';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: any[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('proposals');
  const formatItems = items.map((x) => {
    return ({
      depositor: (
        <AvatarName
          address={x?.depositor?.identity}
          imageUrl={x?.depositor?.image}
          name={x?.depositor?.moniker}
        />
      ),
      amount: x.amount,
      time: dayjs(x.time).format('YYYY-MM-DD'),
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
