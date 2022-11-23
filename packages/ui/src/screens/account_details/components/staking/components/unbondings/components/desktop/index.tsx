import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import AvatarName from '@/components/avatar_name';
import { useRecoilValue } from 'recoil';
import { readDate } from '@/recoil/settings';
import { formatNumber } from '@/utils/format_token';
import type { ItemType } from '@/screens/account_details/components/staking/components/unbondings/types';
import { columns } from '@/screens/account_details/components/staking/components/unbondings/components/desktop/utils';

const Desktop: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  const formattedItems = items?.map((x) => ({
    validator: (
      <AvatarName
        address={x.validator.address}
        imageUrl={x.validator.imageUrl}
        name={x.validator.name}
      />
    ),
    amount: `${formatNumber(
      x.amount.value,
      x.amount.exponent
    )} ${x.amount.displayDenom.toUpperCase()}`,
    completionTime: formatDayJs((dayjs as any).utc(x.completionTime), dateFormat),
  }));

  return (
    <div className={classnames(className)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
                style={{ width: `${column.width}%` }}
              >
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems?.map((row: { [key: string]: unknown }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                const selected = row[column.key];
                return (
                  <TableCell
                    // eslint-disable-next-line react/no-array-index-key
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {selected}
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
