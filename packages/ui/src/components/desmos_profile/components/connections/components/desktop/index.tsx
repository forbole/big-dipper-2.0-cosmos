import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { readDate, readTimeFormat } from '@/recoil/settings';
import { columns } from '@/components/desmos_profile/components/connections/components/desktop/utils';

type DesktopProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const { t } = useAppTranslation('accounts');

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
          {items?.map((row) => {
            const key = `${row.identifier}-${row.creationTime}`;
            return (
              <TableRow key={`holders-row-${key}`}>
                {columns.map((column) => {
                  let node: ReactNode = null;
                  switch (column.key) {
                    case 'network':
                      node = row.network.toUpperCase();
                      break;
                    case 'identifier':
                      node = row.identifier;
                      break;
                    case 'creationTime':
                      node = formatDayJs(dayjs.utc(row.creationTime), dateFormat, timeFormat);
                      break;
                    default:
                  }
                  return (
                    <TableCell
                      key={`holders-row-${key}-${column.key}`}
                      align={column.align}
                      style={{ width: `${column.width}%` }}
                    >
                      {node}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
