import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AvatarName from '@components/avatar_name';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { NFT_DETAILS } from '@utils/go_to_page';
import { columns } from './utils';
import { useStyles } from './styles';
import { NFTTypes } from '../../../../types';

const Desktop: React.FC<{ items: NFTTypes[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('nfts');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return {
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
    };
  });
  return (
    <div className={classnames(props.className, classes.root)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
