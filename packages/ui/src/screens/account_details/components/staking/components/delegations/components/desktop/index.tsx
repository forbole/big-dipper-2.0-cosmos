import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { columns } from '@/screens/account_details/components/staking/components/delegations/components/desktop/utils';
import type { ItemType } from '@/screens/account_details/components/staking/components/delegations/types';
import { formatNumber } from '@/utils/format_token';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode, useMemo } from 'react';

type Props = {
  className?: string;
  items?: ItemType[];
};

const DelegationsRow: FC<{ item: ItemType; i: number }> = ({ item, i }) => {
  const { name, address, imageUrl } = useProfileRecoil(item.validator);
  const amount = item.amount ? formatNumber(item.amount.value, item.amount.exponent) : '';
  const reward = item.reward ? formatNumber(item.reward.value, item.reward.exponent) : '';
  const formattedItem = useMemo<{ [key: string]: ReactNode }>(
    () => ({
      identifier: i,
      validator: <AvatarName name={name} address={address} imageUrl={imageUrl} />,
      amount: `${amount} ${item.amount?.displayDenom.toUpperCase()}`,
      reward: `${reward} ${item.reward?.displayDenom.toUpperCase()}`,
    }),
    [amount, i, item, reward, name, address, imageUrl]
  );
  return (
    <TableRow key={`holders-row-${i}`}>
      {columns.map((column) => (
        <TableCell
          key={`holders-row-${i}-${column.key}`}
          align={column.align}
          style={{ width: `${column.width}%` }}
        >
          {formattedItem[column.key]}
        </TableCell>
      ))}
    </TableRow>
  );
};

const Desktop: FC<Props> = ({ className, items }) => {
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
          {items?.map((x, i) => (
            <DelegationsRow item={x} i={i} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
