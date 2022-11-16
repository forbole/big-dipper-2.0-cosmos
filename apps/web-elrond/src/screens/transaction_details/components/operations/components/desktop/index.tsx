import React from 'react';
import * as R from 'ramda';
import useTranslation from 'next-translate/useTranslation';
import { formatNumber } from 'ui/utils/format_token';
import Link from 'next/link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import AvatarName from '@components/avatar_name';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { TOKEN_DETAILS, NFT_DETAILS } from '@utils/go_to_page';
import { columns } from './utils';
import type { OperationType } from '../../../../types';

const Desktop: React.FC<{ items: OperationType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const formattedItems = props.items.map((x) => {
    const isToken = R.pathOr('', ['identifier'], x).split('-').length === 2;
    const isNft = R.pathOr('', ['identifier'], x).split('-').length === 3;
    let link;
    if (isToken) {
      link = TOKEN_DETAILS;
    }
    if (isNft) {
      link = NFT_DETAILS;
    }

    return {
      action: x.action.replace(/([A-Z])/g, ' $1').toUpperCase(),
      identifier: x.identifier,
      sender: (
        <AvatarName
          address={x.sender}
          name={getMiddleEllipsis(x.sender, {
            beginning: 15,
            ending: 20,
          })}
        />
      ),
      receiver: (
        <AvatarName
          address={x.receiver}
          name={getMiddleEllipsis(x.receiver, {
            beginning: 15,
            ending: 20,
          })}
        />
      ),
      value: link ? (
        <div>
          <Typography component="span">{formatNumber(x.value.value, x.value.exponent)} </Typography>
          <Link href={link(x.identifier)} passHref>
            <Typography component="a">{x.value.displayDenom.toUpperCase()}</Typography>
          </Link>
        </div>
      ) : (
        `${formatNumber(x.value.value, x.value.exponent)} ${x.value.displayDenom.toUpperCase()}`
      ),
    };
  });
  return (
    <div className={props.className}>
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
          {formattedItems?.map((row: { [key: string]: unknown }, i) => (
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
