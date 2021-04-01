import {
  useState,
} from 'react';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@graphql/types';
import { AvatarName } from '@components';
import { useChainContext } from '@contexts';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { BlocksState } from './types';

export const useBlocks = (initialState: BlocksState) => {
  const { findAddress } = useChainContext();
  const [blocks, setBlocks] = useState<{
    height: number;
    txs: number;
    timestamp: string;
    proposer: string;
    hash: string;
  }[]>(initialState.rawData);
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
      const validator = findAddress(x.proposer);
      const hash = screen === 'mobile'
        ? getMiddleEllipsis(x.hash, {
          beginning: 13, ending: 10,
        })
        : getMiddleEllipsis(x.hash, {
          beginning: 6, ending: 5,
        });

      return ({
        height: (
          <Link href={BLOCK_DETAILS(x.height)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(x.height).format('0,0')}
            </Typography>
          </Link>
        ),
        txs: numeral(x.txs).format('0,0'),
        time: dayjs.utc(x.timestamp).fromNow(),
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
    rawData: blocks,
    formatUi,
  };
};
