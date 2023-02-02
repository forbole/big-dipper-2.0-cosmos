import Result from '@/components/result';
import SingleTransactionMobile from '@/components/single_transaction_mobile';
import Tag from '@/components/tag';
import Timestamp from '@/components/Timestamp';
import type { TransactionType } from '@/screens/home/components/transactions/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, Fragment } from 'react';

type MobileProps = {
  className?: string;
  items: TransactionType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const formattedData = items.map((x, i) => ({
    key: `${x.hash}-${i}`,
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(x.height)}>
        {numeral(x.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(x.hash)}>
        {getMiddleEllipsis(x.hash, {
          beginning: 15,
          ending: 5,
        })}
      </Link>
    ),
    type: (
      <div>
        <Tag value={x.type?.[0] ?? ''} theme="six" />
        {x.messages > 1 && ` + ${x.messages - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: <Timestamp timestamp={x.timestamp} />,
    messages: numeral(x.messages).format('0,0'),
  }));

  return (
    <div className={className}>
      {formattedData.map((x, i) => (
        <Fragment key={x.key}>
          <SingleTransactionMobile {...x} />
          {i !== formattedData.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
