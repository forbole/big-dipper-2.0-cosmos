import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import Link from 'next/link';
import { columns } from './utils';
import { AccountType } from '../../../../types';

const Desktop: React.FC<{
  className?: string;
  items?: AccountType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('accounts');
  const formattedItems = items.map((x) => {
    return ({
      address: (
        <Link href={ACCOUNT_DETAILS(x)} passHref>
          <Typography variant="body1" component="a">
            {x}
          </Typography>
        </Link>
      ),
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
