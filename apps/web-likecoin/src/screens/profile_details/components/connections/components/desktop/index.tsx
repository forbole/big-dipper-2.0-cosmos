import chainConfig from '@/chainConfig';
import { readDate } from '@/recoil/settings';
import { columns } from '@/screens/profile_details/components/connections/components/desktop/utils';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

const { prefix } = chainConfig();

type DesktopProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const { t } = useTranslation('accounts');

  const formattedItems = items?.map((x) => {
    let identity: ReactNode = x.identifier;
    if (new RegExp(`^(${prefix.account})`).test(x.identifier)) {
      identity = (
        <Link href={ACCOUNT_DETAILS(x.identifier)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.identifier}
          </Typography>
        </Link>
      );
    }

    return {
      key: `${x.identifier}-${x.creationTime}`,
      network: x.network.toUpperCase(),
      identifier: identity,
      creationTime: formatDayJs(dayjs.utc(x.creationTime), dateFormat),
    };
  });

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
          {formattedItems?.map((row) => (
            <TableRow key={row.key}>
              {columns.map((column) => (
                <TableCell
                  key={`${row.key}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key as keyof typeof row]}
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
