import { columns } from '@/components/desmos_profile/components/connections/components/desktop/utils';
import { readDate } from '@/recoil/settings';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

type DesktopProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const { t } = useTranslation('accounts');

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
                      node = formatDayJs(dayjs.utc(row.creationTime), dateFormat);
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
