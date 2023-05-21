import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { columns } from '@/screens/profile_details/components/connections/components/desktop/utils';
import { readDate, readTimeFormat } from '@/recoil/settings';
import chainConfig from '@/chainConfig';

const { prefix } = chainConfig();

type DesktopProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const { t } = useAppTranslation('accounts');

  const formattedItems = items?.map((x) => {
    let identity: ReactNode = x.identifier;
    if (new RegExp(`^(${prefix.account})`).test(x.identifier)) {
      identity = (
        <Link shallow href={ACCOUNT_DETAILS(x.identifier)} className="value">
          {x.identifier}
        </Link>
      );
    }

    return {
      key: `${x.identifier}-${x.creationTime}`,
      network: x.network.toUpperCase(),
      identifier: identity,
      creationTime: formatDayJs(dayjs.utc(x.creationTime), dateFormat, timeFormat),
    };
  });

  return (
    <div className={className}>
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
