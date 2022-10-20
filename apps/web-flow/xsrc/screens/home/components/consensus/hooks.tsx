import {
  useState, useEffect,
} from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { hexToBech32 } from '@utils/hex_to_bech32';
import { chainConfig } from '@configs';
import WebSocket from 'isomorphic-ws';

export const useConsensus = () => {
  const [state, setState] = useState<{
    height: number;
    round: number;
    step: number;
    totalSteps: number;
    roundCompletion: number;
    proposer: string;
  }>({
    height: 0,
    round: 0,
    step: 0,
    totalSteps: 5,
    roundCompletion: 0,
    proposer: '',
  });

  useEffect(() => {
    const client = new WebSocket(process.env.NEXT_PUBLIC_WS_CHAIN_URL);
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

    client.onclose = () => {
      console.log('closing socket');
    };

    return () => {
      client.close();
    };
  }, []);

  const formatNewRound = (data:any) => {
    const height = numeral(R.pathOr('', ['result', 'data', 'value', 'height'], data)).value();
    const proposerHex = R.pathOr('', ['result', 'data', 'value', 'proposer', 'address'], data);
    const consensusAddress = hexToBech32(proposerHex, chainConfig.prefix.consensus);

    setState((prevState) => ({
      ...prevState,
      height,
      proposer: consensusAddress,
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

  return {
    state,
  };
};
