import { useState } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import * as R from 'ramda';
import { AvatarName } from '@components';
import { useInterval } from '@hooks';
import { useChainContext } from '@contexts';
import { hexToBech32 } from '@utils/hex_to_bech32';

export const useConsensus = () => {
  const {
    findAddress, findOperator,
  } = useChainContext();
  const [state, setState] = useState({
    height: 0,
    round: 0,
    step: 0,
    proposer: '',
    stepCompletion: 0,
    proposerRaw: '',
  });

  const callback = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_RPC_CHAIN_URL}/consensus_state`);
      formatCallback(data);
    } catch (error) {
      console.log(error.message, 'ls error');
    }
  };

  useInterval(callback, 1000);

  const formatCallback = (data: any) => {
    // console.log(data, 'data');
    const [height, round, step] = R.pathOr('0/0/0', ['result', 'round_state', 'height/round/step'], data).split('/');

    let completionPercent = '0.00';
    // prevote
    completionPercent = R.pathOr(0, ['result', 'round_state', 'height_vote_set', round, 'precommits_bit_array'], data);
    if (step >= 4) {
      completionPercent = R.pathOr(0, ['result', 'round_state', 'height_vote_set', round, 'precommits_bit_array'], data);
    }

    // precommit
    if (step <= 5) {
      completionPercent = R.pathOr(0, ['result', 'round_state', 'height_vote_set', round, 'prevotes_bit_array'], data);
    }

    const stepCompletion = numeral(R.pathOr('0.00', [1], completionPercent.split(' = '))).value() * 100;

    setState({
      height,
      round,
      step,
      proposer: hexToBech32(R.pathOr('', ['result', 'round_state', 'proposer', 'address'], data), 'desmosvalcons'),
      stepCompletion,
      proposerRaw: R.pathOr('', ['result', 'round_state', 'proposer', 'address'], data),
    });
  };

  const formatUi = () => {
    const operatorAddress = findOperator(state.proposer);
    const proposer = findAddress(operatorAddress);

    return ({
      height: numeral(state.height).format('0,0'),
      round: numeral(state.round).format('0,0'),
      step: numeral(state.step).format('0,0'),
      proposer: (
        <AvatarName
          address={operatorAddress || state.proposer}
          imageUrl={proposer ? proposer?.imageUrl : null}
          name={proposer ? proposer.moniker : 'Shy Validator'}
        />
      ),
      stepCompletion: `${numeral(state.stepCompletion).format('0')}%`,
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
