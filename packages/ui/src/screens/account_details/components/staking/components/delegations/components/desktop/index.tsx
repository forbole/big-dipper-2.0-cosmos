import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { formatNumber } from '@/utils/format_token';
import type { ItemType } from '@/screens/account_details/components/staking/components/delegations/types';
import { columns } from '@/screens/account_details/components/staking/components/delegations/components/desktop/utils';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import AvatarName from '@/components/avatar_name';

type DelegationsRowProps = {
  item: ItemType;
  i: number;
};

const DelegationsRow: FC<DelegationsRowProps> = ({ item, i }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const amount = item.amount ? formatNumber(item.amount.value, item.amount.exponent) : '';
  const commission = item.commission ?? 0;
  const reward = item.reward ? formatNumber(item.reward.value, item.reward.exponent) : '';
  const formattedItem = {
    identifier: i,
    validator: (
      <AvatarName name={name} address={address} imageUrl={imageUrl} location="delegationRow" />
    ),
    amount: `${amount} ${item.amount?.displayDenom.toUpperCase()}`,
    commission: `${commission} %`,
    reward: `${reward} ${item.reward?.displayDenom.toUpperCase()}`,
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
  items?: ItemType[];
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
          {items?.map((x, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <DelegationsRow key={`${x.validator}-${i}`} i={i} item={x} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
