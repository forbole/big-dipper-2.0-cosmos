/* eslint-disable object-curly-newline */
import AvatarName from '@/components/avatar_name';
import Typography from '@mui/material/Typography';
import chainConfig from '@/chainConfig';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatToken } from '@/utils/format_token';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import numeral from 'numeral';
import { memo } from 'react';
import { Cell } from './Cell';
import { RowProps } from '../types';
import { useColumns } from '../utils';

const { primaryTokenUnit } = chainConfig();

const Row = memo(({ data, columnIndex, rowIndex, style }: RowProps) => {
  const profile = useProfileRecoil(data.address);
  const columns = useColumns();

  const { key } = columns[columnIndex];
  const token = formatToken(data.balance, primaryTokenUnit);

  switch (key) {
    case 'top_rank':
      return (
        <Cell
          style={style}
          rowIndex={rowIndex}
          cx={!(rowIndex % 2) ? 'odd' : ''}
        >{`#${data.rank}`}</Cell>
      );
    case 'top_address':
      return (
        <Cell style={style} rowIndex={rowIndex} cx={!(rowIndex % 2) ? 'odd' : ''}>
          <AvatarName
            name={profile.name}
            address={data.address}
            imageUrl={profile.imageUrl}
            href={ACCOUNT_DETAILS}
          />
        </Cell>
      );
    case 'top_dtag':
      return (
        <Cell style={style} rowIndex={rowIndex} cx={!(rowIndex % 2) ? 'odd' : ''}>
          {/^@/.test(profile.name) && (
            <Typography variant="h4" className="label">
              {`@${profile.name}`}
            </Typography>
          )}
        </Cell>
      );
    case 'top_balance':
      return (
        <Cell style={style} rowIndex={rowIndex} cx={!(rowIndex % 2) ? 'odd' : ''}>
          {numeral(token.value).format('0,0')} {token.displayDenom.toUpperCase()}
        </Cell>
      );
    case 'top_percentage':
      return (
        <Cell style={style} rowIndex={rowIndex} cx={!(rowIndex % 2) ? 'odd' : ''}>
          {numeral(data.percentage).format('0,0.0000')} %
        </Cell>
      );
    default:
      return null;
  }
});

export default Row;
