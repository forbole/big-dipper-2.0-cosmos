import {
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import dayjs from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { replaceNaN } from '@utils/replace_nan';
import { AvatarName } from '@components';
import { useChainContext } from '@contexts';
import { formatDenom } from '@utils/format_denom';
import {
  useBlockDetailsQuery,
  BlockDetailsQuery,
} from '@graphql/types';
import { BlockState } from './types';

export const useBlock = (initialState: BlockState) => {
  const fakeSignature = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '10%',
    signed: true,
  };

  const fakeSignatureTwo = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '50%',
    signed: false,
  };

  const fakeTransactions = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 123,
    success: false,
    time: 1615187146246,
  };

  const fakeTransactionsTwo = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 12,
    success: true,
    time: 1615187146246,
  };

  const fakeData = {
    height: '812,768,640',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    txs: 2,
    time: 1615187146246,
    signedVotingPower: '89%',
    signatures: [...Array(4).fill(fakeSignature), ...Array(4).fill(fakeSignatureTwo)],
    transactions: [...Array(4).fill(fakeTransactions), ...Array(4).fill(fakeTransactionsTwo)],
  };

  const [fakestate, fsetState] = useState<any>({
    item: {},
  });

  useEffect(() => {
    fsetState((prevState) => ({
      ...prevState,
      item: fakeData,
    }));
  }, []);

  const {
    item,
  } = fakestate;

  // ==============================
  // start
  // ==============================
  const router = useRouter();
  const { t } = useTranslation('blocks');
  const { findAddress } = useChainContext();

  const [state, setState] = useState(initialState);

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useBlockDetailsQuery({
    variables: {
      height: numeral(router.query.height).value(),
    },
    onCompleted: (data) => {
      const rawData = formatBlockDetails(data);
      console.log(rawData, 'rawData');
      handleSetState(formatBlockDetails(data));
    },
  });

  const formatBlockDetails = (data: BlockDetailsQuery) => {
    const results: any = {
      rawData: {
        loading: false,
      },
    };

    if (!data.block.length) {
      results.rawData.exists = false;
      return results;
    }

    const block = {
      height: data.block[0].height,
      hash: data.block[0].hash,
      txs: data.block[0].txs,
      timestamp: data.block[0].timestamp,
      proposer: data.block[0].validator.validatorInfo.operatorAddress,
      votingPower: R.pathOr(0, [
        'block',
        0,
        'preCommitsAggregate',
        'aggregate',
        'sum',
        'votingPower',
      ], data),
    };

    results.rawData.block = block;

    const supply = {
      bonded: formatDenom(R.pathOr(0, ['pool', 0, 'bondedTokens'], data)),
    };
    results.rawData.supply = supply;

    return results;
  };

  const formatUi = () => {
    const validator = findAddress(state.rawData.block.proposer);
    return ({
      block: [
        {
          label: t('height'),
          detail: (
            <Link href={BLOCK_DETAILS(state.rawData.block.height)} passHref>
              <Typography variant="body1" className="value" component="a">
                {numeral(state.rawData.block.height).format('0,0')}
              </Typography>
            </Link>
          ),
        },
        {
          label: t('hash'),
          detail: state.rawData.block.hash,
        },
        {
          label: t('proposer'),
          detail: (
            <AvatarName
              address={state.rawData.block.proposer}
              imageUrl={validator ? validator?.imageUrl : null}
              name={validator ? validator.moniker : state.rawData.block.proposer}
            />
          ),
        },
        {
          label: t('time'),
          detail: replaceNaN(dayjs.utc(state.rawData.block.timestamp).fromNow()),
        },
        {
          label: t('signedVotingPower'),
          detail: `${replaceNaN(
            numeral((state.rawData.block.votingPower / state.rawData.supply.bonded) * 100).format('0.00'),
          )}%`,
        },
        {
          label: t('txs'),
          detail: numeral(state.rawData.block.txs).format('0,0'),
        },
      ],
    });
  };

  return {
    item,
    uiData: formatUi(),
    rawData: state.rawData,
  };
};
