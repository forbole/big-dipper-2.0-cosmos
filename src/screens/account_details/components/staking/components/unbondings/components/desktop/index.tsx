import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import numeral from 'numeral';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { formatNumber } from '@src/utils/format_token';
import { columns } from './utils';
import { ItemType } from '../../types';
import { useStyles } from './styles';

const Desktop: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const dateFormat = useRecoilValue(readDate);
  const formattedItems = items.map((x) => {
    const entries = x.entries.map((y) => ({
      amount: `${formatNumber(y.amount.value, y.amount.exponent)} ${y.amount.displayDenom.toUpperCase()}`,
      completionTime: formatDayJs(dayjs.utc(y.completionTime), dateFormat),
    }));
    return ({
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      entries,
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
                const selected = row[column.key];
                if (column.key === 'amount') {
                  return (
                    <TableCell
                      key={`holders-row-${i}-${column.key}`}
                      align={column.align}
                      style={{ width: `${column.width}%` }}
                      className={classes.wrapper}
                    >
                      {row.entries.map((y, index) => {
                        return (
                          <div className={classes.item} key={`desktop-entries-${y.completionTime}-${index}`}>
                            <Typography variant="body1" className="value">
                              {y.amount}
                            </Typography>
                          </div>
                        );
                      })}
                    </TableCell>
                  );
                }

                if (column.key === 'completionTime') {
                  return (
                    <TableCell
                      key={`holders-row-${i}-${column.key}`}
                      align={column.align}
                      style={{ width: `${column.width}%` }}
                      className={classes.wrapper}
                    >
                      {row.entries.map((y, index) => {
                        return (
                          <div className={classes.item} key={`desktop-entries-${y.completionTime}-${index}`}>
                            <Typography variant="body1" className="label">
                              {y.completionTime}
                            </Typography>
                          </div>
                        );
                      })}
                    </TableCell>
                  );
                }

                return (
                  <TableCell
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
