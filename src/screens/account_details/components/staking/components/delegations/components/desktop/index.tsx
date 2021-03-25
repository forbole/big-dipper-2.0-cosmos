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
import { AvatarName } from '@components';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items: any[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('accounts');
  const formatItems = items.map((x) => {
    return ({
      validator: (
        <AvatarName
          address={x?.validator?.identity}
          imageUrl={x?.validator?.image}
          name={x?.validator?.moniker}
        />
      ),
      amount: x.amount,
      commission: x.commission,
      reward: x.reward,
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
