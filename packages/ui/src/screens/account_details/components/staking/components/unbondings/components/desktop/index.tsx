import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { columns } from '@/screens/account_details/components/staking/components/unbondings/components/desktop/utils';
import type { ItemType } from '@/screens/account_details/components/staking/components/unbondings/types';
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

type UnbondingsRowProps = {
  item: ItemType;
};

const UnbondingsRow: FC<UnbondingsRowProps> = ({ item }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const dateFormat = useRecoilValue(readDate);
  const formattedItem = {
    validator: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
    amount: item.amount
      ? `${formatNumber(
          item.amount.value,
          item.amount.exponent
        )} ${item.amount.displayDenom.toUpperCase()}`
      : '',
    completionTime: formatDayJs(dayjs.utc(item.completionTime), dateFormat),
  };
  return (
    <TableRow>
      {columns.map((column) => {
        const selected = formattedItem[column.key as keyof typeof formattedItem];
        return (
          <TableCell
            key={`${item.validator}-${column.key}`}
            align={column.align}
            style={{ width: `${column.width}%` }}
          >
            {selected}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

type DesktopProps = {
  className?: string;
  items: ItemType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
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
          {items?.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <UnbondingsRow key={`${row.validator}-${i}`} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
