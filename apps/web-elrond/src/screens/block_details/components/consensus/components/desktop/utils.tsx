import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import type { ConsensusType } from '@/screens/block_details/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { NODE_DETAILS } from '@/utils/go_to_page';

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

const FormattedRow: FC<{ consensus: string }> = ({ consensus }) => (
  <Link shallow prefetch={false} href={NODE_DETAILS(consensus)} className="value">
    {getMiddleEllipsis(consensus, {
      beginning: 40,
      ending: 30,
    })}
  </Link>
);

export const formatRows = (data: ConsensusType[]) =>
  data.map((x, i) => ({
    idx: numeral(i + 1).format('0,0'),
    validator: <FormattedRow key={x} consensus={x} />,
  }));
