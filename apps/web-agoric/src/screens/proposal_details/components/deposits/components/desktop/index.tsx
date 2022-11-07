import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import AvatarName from '@components/avatar_name';
import { formatNumber } from 'ui/utils/format_token';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { columns } from './utils';
import { ItemType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('proposals');
  const dateFormat = useRecoilValue(readDate);

  const formattedItems = items.map((x) => {
    return {
      depositor: (
        <>
          {x.user.address ? (
            <AvatarName address={x.user.address} imageUrl={x.user.imageUrl} name={x.user.name} />
          ) : (
            <>-</>
          )}
        </>
      ),
      amount: `${formatNumber(
        x.amount.value,
        x.amount.exponent
      )} ${x.amount.displayDenom.toUpperCase()}`,
      time: formatDayJs(dayjs.utc(x.timestamp), dateFormat),
    };
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
