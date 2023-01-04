/* eslint-disable object-curly-newline */
import { AvatarName } from '@components';
import Typography from '@material-ui/core/Typography';
import { chainConfig } from '@src/configs';
import { useProfileRecoil } from '@src/recoil/profiles/hooks';
import { formatToken } from '@src/utils/format_token';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import Big from 'big.js';
import { memo } from 'react';
import { Cell } from './Cell';
import { RowProps } from '../types';
import { useColumns } from '../utils';

const { primaryTokenUnit } = chainConfig;

export const Row = memo(
  ({ data, columnIndex, rowIndex, style }: RowProps) => {
    const profile = useProfileRecoil(data.address);
    const columns = useColumns();

    const { key } = columns[columnIndex];
    const token = formatToken(data.balance, primaryTokenUnit);

    switch (key) {
      case 'top_rank': return (
        <Cell style={style} rowIndex={rowIndex}>{`#${data.rank}`}</Cell>
      );
      case 'top_address': return (
        <Cell style={style} rowIndex={rowIndex}>
          <AvatarName
            name={profile.name}
            address={data.address}
            imageUrl={profile.imageUrl}
            href={ACCOUNT_DETAILS}
          />
        </Cell>
      );
      case 'top_dtag': return (
        <Cell style={style} rowIndex={rowIndex}>
          {/^@/.test(profile.name) && (
            <Typography variant="h4" className="label">
              {`@${profile.name}`}
            </Typography>
          )}
        </Cell>
      );
      case 'top_balance': return (
        <Cell style={style} rowIndex={rowIndex}>
          {Big(token.value).toFixed(0)}
          {' '}
          {token.displayDenom.toUpperCase()}
        </Cell>
      );
      case 'top_percentage': return (
        <Cell style={style} rowIndex={rowIndex}>
          {`${data.percentage.toFixed(4)} %`}
        </Cell>
      );
      default: return null;
    }
  },
);
