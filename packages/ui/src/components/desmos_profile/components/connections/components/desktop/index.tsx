import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from 'ui/recoil/settings';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: ProfileConnectionType[];
}> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const { t } = useTranslation('accounts');

  const formattedItems =
    items?.map((x) => ({
        network: x.network.toUpperCase(),
        identifier: x.identifier,
        creationTime: formatDayJs((dayjs as any).utc(x.creationTime), dateFormat),
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
          {formattedItems?.map((row: { [key: string]: unknown }) => (
            <TableRow key={`holders-row-${row.identifier}`}>
              {columns.map((column) => (
                  <TableCell
                    key={`holders-row-${row.identifier}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {(row as any)?.[column.key]}
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
