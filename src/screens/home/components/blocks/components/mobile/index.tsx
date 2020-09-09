import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useBlocksContext } from '@src/screens/home/components/blocks/contexts/blocks';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  SingleBlockMobile,
  AvatarName,
} from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@utils/go_to_page';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { blocks } = useBlocksContext();

  const formatSlots = blocks.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      height: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.height}
          </Typography>
        </Link>
      ),
      hash: getMiddleEllipsis(x.hash, { beginning: 13 }),
      txs: x.tx,
      time: dayjs(x.time).fromNow(),
      validator: <AvatarName
        address={x.validator.identity}
        imageUrl={x.validator.image}
        name={x.validator.moniker}
      />,
    });
  });
  return (
    <div className={classnames(className)}>
      {formatSlots.map((x, i) => {
        return (
          <React.Fragment key={`${x.slot}-${i}`}>
            <SingleBlockMobile {...x} />
            {i !== formatSlots.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
