import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import AvatarName from 'ui/components/avatar_name';
import { formatNumber } from 'ui/utils/format_token';
import { useRecoilValue } from 'recoil';
import { readDate } from 'ui/recoil/settings';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import { columns } from './utils';
import type { ItemType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('proposals');
  const dateFormat = useRecoilValue(readDate);

  const formattedItems =
    items?.map((x) => {
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
        time: formatDayJs((dayjs as any).utc(x.timestamp), dateFormat),
      };
    }) ?? [];

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
          {formattedItems?.map((row: { [key: string]: unknown }, i) => (
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
