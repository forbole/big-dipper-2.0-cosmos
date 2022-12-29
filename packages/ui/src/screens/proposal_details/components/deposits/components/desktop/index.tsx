/* eslint-disable no-nested-ternary */
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { columns } from '@/screens/proposal_details/components/deposits/components/desktop/utils';
import type { ItemType } from '@/screens/proposal_details/components/deposits/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

type DepositsRowProps = {
  i: number;
  item: ItemType;
};

const DepositsRow: FC<DepositsRowProps> = ({ i, item }) => {
  const dateFormat = useRecoilValue(readDate);
  const { name, address, imageUrl } = useProfileRecoil(item.user);

  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          // eslint-disable-next-line react/no-array-index-key
          key={`holders-row-${i}-${column.key}`}
          align={column.align}
          style={{ width: `${column.width}%` }}
        >
          {column.key === 'depositor' ? (
            address ? (
              <AvatarName address={address} imageUrl={imageUrl} name={name} />
            ) : (
              <>-</>
            )
          ) : column.key === 'amount' ? (
            item.amount ? (
              `${formatNumber(
                item.amount.value,
                item.amount.exponent
              )} ${item.amount.displayDenom.toUpperCase()}`
            ) : (
              ''
            )
          ) : column.key === 'time' ? (
            formatDayJs(dayjs.utc(item.timestamp), dateFormat)
          ) : null}
        </TableCell>
      ))}
    </TableRow>
  );
};

type DesktopProps = {
  className?: string;
  items?: ItemType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { t } = useTranslation('proposals');

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
          {items?.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <DepositsRow i={i} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
