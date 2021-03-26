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
      from: (
        <AvatarName
          address={x?.from?.identity}
          imageUrl={x?.from?.image}
          name={x?.from?.moniker}
        />
      ),
      to: (
        <AvatarName
          address={x?.to?.identity}
          imageUrl={x?.to?.image}
          name={x?.to?.moniker}
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
