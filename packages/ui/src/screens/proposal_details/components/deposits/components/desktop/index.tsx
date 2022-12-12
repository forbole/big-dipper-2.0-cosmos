import AvatarName from '@/components/avatar_name';
import { readDate } from '@/recoil/settings';
import { columns } from '@/screens/proposal_details/components/deposits/components/desktop/utils';
import type { ItemType } from '@/screens/proposal_details/components/deposits/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Desktop: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({ className, items }) => {
  const { t } = useTranslation('proposals');
  const dateFormat = useRecoilValue(readDate);

  const formattedItems =
    items?.map((x) => ({
      depositor: x.user.address ? (
        <AvatarName address={x.user.address} imageUrl={x.user.imageUrl} name={x.user.name} />
      ) : (
        <>-</>
      ),
      amount: x.amount
        ? `${formatNumber(
            x.amount.value,
            x.amount.exponent
          )} ${x.amount.displayDenom.toUpperCase()}`
        : '',
      time: formatDayJs(dayjs.utc(x.timestamp), dateFormat),
    })) ?? [];

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
              {columns.map((column) => (
                <TableCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={`holders-row-${i}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
