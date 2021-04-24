import {
  useState, useEffect,
} from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { AvatarName } from '@components';
import { useChainContext } from '@contexts';
import { hexToBech32 } from '@utils/hex_to_bech32';
import { chainConfig } from '@src/chain_config';

export const useConsensus = () => {
  const {
    findAddress, findOperator,
  } = useChainContext();
  const [state, setState] = useState({
    height: 0,
    round: 0,
    step: 0,
    totalSteps: 5,
    roundCompletion: 0,
    proposer: '',
    proposerRaw: '',
  });

  const client = new WebSocket(process.env.NEXT_PUBLIC_WS_CHAIN_URL);

  useEffect(() => {
    const stepHeader = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 0,
      params: {
        query: 'tm.event=\'NewRoundStep\'',
      },
    };

    const roundHeader = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 0,
      params: {
        query: 'tm.event=\'NewRound\'',
      },
    };

    client.onopen = () => {
      client.send(JSON.stringify(stepHeader));
      client.send(JSON.stringify(roundHeader));
    };

    client.onmessage = (e: any) => {
      const data = JSON.parse(e.data);
      const event = R.pathOr('', ['result', 'data', 'type'], data);
      if (event === 'tendermint/event/NewRound') {
        formatNewRound(data);
      }
      if (event === 'tendermint/event/RoundState') {
        formatNewStep(data);
      }
    };

    return () => {
      client.close();
    };
  }, []);

  const formatNewRound = (data:any) => {
    const height = numeral(R.pathOr('', ['result', 'data', 'value', 'height'], data)).value();
    const proposer = R.pathOr('', ['result', 'data', 'value', 'proposer', 'address'], data);
    const consensusAddress = hexToBech32(proposer, chainConfig.prefix.consensus);

    setState((prevState) => ({
      ...prevState,
      height,
      proposer: consensusAddress,
      proposerRaw: proposer,
    }));
  };

  const formatNewStep = (data:any) => {
    const stepReference = {
      0: 0,
      RoundStepNewHeight: 1,
      RoundStepPropose: 2,
      RoundStepPrevote: 3,
      RoundStepPrecommit: 4,
      RoundStepCommit: 5,
    };

    const round = R.pathOr(0, ['result', 'data', 'value', 'round'], data);
    const step = stepReference[R.pathOr(0, ['result', 'data', 'value', 'step'], data)];

    const roundCompletion = (step / state.totalSteps) * 100;

    setState((prevState) => ({
      ...prevState,
      round,
      step,
      roundCompletion,
    }));
  };

  const formatUi = () => {
    const operatorAddress = findOperator(state.proposer);
    const proposer = findAddress(operatorAddress);

    return ({
      height: numeral(state.height).format('0,0'),
      round: numeral(state.round).format('0,0'),
      step: numeral(state.step).format('0,0'),
      proposer: operatorAddress ? (
        <AvatarName
          address={operatorAddress || state.proposer}
          imageUrl={proposer ? proposer?.imageUrl : null}
          name={proposer ? proposer.moniker : 'Shy Validator'}
        />
      ) : (
        '-'
      ),
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
