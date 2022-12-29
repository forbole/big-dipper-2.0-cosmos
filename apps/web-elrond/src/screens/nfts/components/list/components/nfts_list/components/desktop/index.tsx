import React, { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AvatarName from '@/components/avatar_name';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import { NFT_DETAILS } from '@/utils/go_to_page';
import type { NFTTypes } from '@/screens/nfts/components/list/types';
import { columns } from '@/screens/nfts/components/list/components/nfts_list/components/desktop/utils';
import { useStyles } from '@/screens/nfts/components/list/components/nfts_list/components/desktop/styles';

const Desktop: FC<{ className?: string; items: NFTTypes[] }> = (props) => {
  const { t } = useTranslation('nfts');
  const classes = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    nft: (
      <Link href={NFT_DETAILS(x.identifier)} passHref>
        <Typography variant="body1" className="value" component="a">
          {x.name}
        </Typography>
      </Link>
    ),
    type: x.type,
    creator: <AvatarName name={x.creator} address={x.creator} />,
  }));
  return (
    <div className={classnames(props.className, classes.root)}>
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
            <TableRow key={`holders-row-${row.key}`}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.key}-${column.key}`}
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
