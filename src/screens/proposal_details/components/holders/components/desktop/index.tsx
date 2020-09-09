import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
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
import { columns } from './utils';
import { useHoldersContext } from '../../contexts/holders';
import { StackBar } from '..';

const Desktop:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const {
    items, page, rowsPerPage,
  } = useHoldersContext();

  const formatItems = items.map((x, i) => {
    return ({
      rank: `# ${(rowsPerPage * page) + i + 1}`,
      address: (
        <Link href={ACCOUNT_DETAILS(x.address)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.address}
          </Typography>
        </Link>
      ),
      quantity: x.quantity,
      percentage: (
        <StackBar percentage={x.percentage} />
      ),
      value: x.value,
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
