import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useSettingsContext } from '@contexts';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: ProfileConnectionType[];
  native?: DesmosProfile;
}> = ({
  className,
  items,
  native,
}) => {
  const {
    dateFormat,
  } = useSettingsContext();
  const { t } = useTranslation('accounts');

  const formattedItems = items.map((x) => {
    return ({
      network: x.network.toUpperCase(),
      identifier: x.identifier,
      creationTime: formatDayJs(dayjs.utc(x.creationTime), dateFormat),
    });
  });

  console.log('formattedItems', formattedItems);
  console.log('native', native);
  console.log('items', items);
  console.log('className', className);

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
                console.log('columns', columns);
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
