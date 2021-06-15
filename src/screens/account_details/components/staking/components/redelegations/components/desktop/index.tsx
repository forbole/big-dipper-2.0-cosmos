import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs from '@utils/dayjs';
import numeral from 'numeral';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { RedelegationType } from '@src/screens/account_details/types';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items: RedelegationType[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('accounts');
  const formattedItems = items.map((x) => {
    return ({
      to: (
        <AvatarName
          address={x.to.address}
          imageUrl={x.to.imageUrl}
          name={x.to.name}
        />
      ),
      from: (
        <AvatarName
          address={x.from.address}
          imageUrl={x.from.imageUrl}
          name={x.from.name}
        />
      ),
      linkedUntil: dayjs.utc(x.linkedUntil).local().format('MMMM DD, YYYY hh:mm A'),
      amount: `${numeral(x.amount.value).format('0,0.[0000]')} ${x.amount.denom.toUpperCase()}`,
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
