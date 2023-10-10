import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { formatNumber } from '@/utils/format_token';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import type { ItemType } from '@/screens/account_details/components/staking/components/redelegations/types';
import { columns } from '@/screens/account_details/components/staking/components/redelegations/components/desktop/utils';
import { readDate, readTimeFormat } from '@/recoil/settings';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import AvatarName from '@/components/avatar_name';

type RedelegationsRowProps = {
  item: ItemType;
  i: number;
};

const RedelegationsRow: FC<RedelegationsRowProps> = ({ item, i }) => {
  const {
    address: fromAddress,
    imageUrl: fromImageUrl,
    name: fromName,
  } = useProfileRecoil(item.from);
  const { address: toAddress, imageUrl: toImageUrl, name: toName } = useProfileRecoil(item.to);
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const formattedItem = {
    identifier: i,
    to: (
      <AvatarName
        address={toAddress}
        imageUrl={toImageUrl}
        name={toName}
        location="redelegationRow"
      />
    ),
    from: (
      <AvatarName
        address={fromAddress}
        imageUrl={fromImageUrl}
        name={fromName}
        location="redelegationRow"
      />
    ),
    amount: item.amount
      ? `${formatNumber(
          item.amount.value,
          item.amount.exponent
        )} ${item.amount.displayDenom.toUpperCase()}`
      : '',
    completionTime: formatDayJs(dayjs.utc(item.completionTime), dateFormat, timeFormat),
  };
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={`holders-row-${i}-${column.key}`}
          align={column.align}
          style={{ width: `${column.width}%` }}
        >
          {formattedItem[column.key as keyof typeof formattedItem]}
        </TableCell>
      ))}
    </TableRow>
  );
};

type DesktopProps = {
  className?: string;
  items: ItemType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
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
          {items?.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <RedelegationsRow key={`${row.from}-${row.to}-${i}`} i={i} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
