import React from 'react';
import chainConfig from 'ui/chainConfig';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
  items?: ProfileConnectionType[];
}> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const { t } = useTranslation('accounts');

  const formattedItems = items?.map((x) => {
    let identity: string | React.ReactNode = x.identifier;
    if (new RegExp(`^(${chainConfig.prefix.account})`).test(x.identifier)) {
      identity = (
        <Link href={ACCOUNT_DETAILS(x.identifier)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.identifier}
          </Typography>
        </Link>
      );
    }

    return {
      network: x.network.toUpperCase(),
      identifier: identity,
      creationTime: formatDayJs((dayjs as any).utc(x.creationTime), dateFormat),
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
