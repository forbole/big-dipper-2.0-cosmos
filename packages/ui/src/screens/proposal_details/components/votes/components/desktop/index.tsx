/* eslint-disable no-nested-ternary */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { getVoteKey } from '@/screens/proposal_details/components/votes/utils';
import type { ItemType } from '@/screens/proposal_details/components/votes/types';
import { columns } from '@/screens/proposal_details/components/votes/components/desktop/utils';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import AvatarName from '@/components/avatar_name';

type VoteRowProps = {
  i: number;
  item: ItemType;
};

const VoteRow: FC<VoteRowProps> = ({ i, item }) => {
  const { t } = useAppTranslation('proposals');
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
          {column.key === 'voter' ? (
            <AvatarName address={address} imageUrl={imageUrl} name={name} />
          ) : column.key === 'vote' ? (
            t(getVoteKey(item.vote))
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
  const { t } = useAppTranslation('proposals');

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
            <VoteRow key={i} i={i} item={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
