import { useState } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import * as R from 'ramda';
import { AvatarName } from '@components';
import { useInterval } from '@hooks';
import { useChainContext } from '@contexts';
import { hexToBech32 } from '@utils/hex_to_bech32';

export const useConsensus = () => {
  const { findAddress } = useChainContext();
  const [state, setState] = useState({
    height: 0,
    round: 0,
    step: 0,
    proposer: '',
  });

  const callback = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_RPC_CHAIN_URL}/consensus_state`);
      formatCallback(data);
    } catch (error) {
      console.log(error.message, 'ls error');
    }
  };

  useInterval(callback, 50000);

  const formatCallback = (data: any) => {
    console.log(data, 'data');
    const [height, round, step] = R.pathOr('0/0/0', ['result', 'round_state', 'height/round/step'], data).split('/');

    setState({
      height,
      round,
      step,
      proposer: hexToBech32(R.pathOr('', ['result', 'round_state', 'proposer', 'address'], data), 'desmosvaloper'),
    });
  };

  const formatUi = () => {
    const proposer = findAddress(state.proposer);
    return ({
      height: numeral(state.height).format('0,0'),
      round: numeral(state.round).format('0,0'),
      step: numeral(state.step).format('0,0'),
      proposer: (
        <AvatarName
          address={state.proposer}
          imageUrl={proposer ? proposer?.imageUrl : null}
          name={proposer ? proposer.moniker : 'Shy Validator'}
        />
      ),
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
