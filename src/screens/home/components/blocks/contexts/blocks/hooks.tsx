import {
  useState,
} from 'react';
import numeral from 'numeral';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@graphql/types';
import { AvatarName } from '@components';
import { useChainContext } from '@contexts';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { BlocksState } from './types';

dayjs.extend(relativeTime);

export const useBlocks = (initialState: BlocksState) => {
  const fakeData = {
    height: '812,768,640',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    tx: 2,
    time: 1615187146246,
  };
  // eslint-disable-next-line
  const [fakeblocks, setfakeBlocks] = useState<any[]>(Array(7).fill(fakeData));

  const { validatorsAddresses } = useChainContext();
  const [blocks, setBlocks] = useState<{
    height: number;
    txs: number;
    timestamp: string;
    proposer: string;
    hash: string;
  }[]>(initialState.blocks);
  useBlocksListenerSubscription({
    onSubscriptionData: (data) => {
      setBlocks(formatBlocks(data.subscriptionData.data));
    },
  });

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      return ({
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.validator.validatorInfo.operatorAddress,
      });
    });
  };

  const formatUi = (screen: 'mobile' | 'desktop' = 'mobile') => {
    return blocks.map((x) => {
      const validator = validatorsAddresses[x.proposer];
      const hash = screen === 'mobile'
        ? getMiddleEllipsis(x.hash, { beginning: 13 })
        : getMiddleEllipsis(x.hash, { beginning: 13 });

      return ({
        height: (
          <Link href={BLOCK_DETAILS(123)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(x.height).format('0,0')}
            </Typography>
          </Link>
        ),
        txs: numeral(x.txs).format('0,0'),
        time: dayjs(x.timestamp).fromNow(),
        proposer: (
          <AvatarName
            address={x.proposer}
            imageUrl={validator ? validator?.imageUrl : null}
            name={validator ? validator.moniker : x.proposer}
          />
        ),
        hash,
      });
    });
  };

  return {
    blocks: fakeblocks,
    rawData: blocks,
    uiData: formatUi(),
  };
};
