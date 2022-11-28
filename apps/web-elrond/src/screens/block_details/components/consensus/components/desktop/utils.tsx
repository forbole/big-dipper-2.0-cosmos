import type { ConsensusType } from '@/screens/block_details/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { NODE_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import numeral from 'numeral';
import { ReactNode } from 'react';

export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'idx',
    width: 5,
  },
  {
    key: 'validator',
    width: 95,
  },
];

export const formatRows = (data: ConsensusType[]) =>
  data.map((x, i): { [key: string]: ReactNode } => ({
    idx: numeral(i + 1).format('0,0'),
    validator: (
      <Link href={NODE_DETAILS(x)} passHref>
        <Typography variant="body1" className="value" component="a">
          {getMiddleEllipsis(x, {
            beginning: 40,
            ending: 30,
          })}
        </Typography>
      </Link>
    ),
  }));
