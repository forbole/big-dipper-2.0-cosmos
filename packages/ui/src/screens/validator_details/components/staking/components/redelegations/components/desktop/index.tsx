import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { readDate } from '@/recoil/settings';
import { columns } from '@/screens/validator_details/components/staking/components/redelegations/components/desktop/utils';
import type { ItemType } from '@/screens/validator_details/components/staking/components/redelegations/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { formatNumber } from '@/utils/format_token';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const RedelegationsItem: FC<{ item: ItemType }> = ({ item }) => {
  const { address, imageUrl, name } = useProfileRecoil(item.address);
  const { address: toAddress, imageUrl: toImageUrl, name: toName } = useProfileRecoil(item.to);
  const dateFormat = useRecoilValue(readDate);
  const formattedItem = {
    address: <AvatarName address={address} imageUrl={imageUrl} name={name} />,
    to: <AvatarName address={toAddress} imageUrl={toImageUrl} name={toName} />,
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
      {columns.map((column) => (
        <TableCell key={column.key} align={column.align} style={{ width: `${column.width}%` }}>
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
  const { t } = useTranslation('accounts');

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
            <RedelegationsItem key={`${row.address}-${i}`} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
