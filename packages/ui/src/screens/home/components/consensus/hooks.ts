import chainConfig from '@/chainConfig';
import { hexToBech32 } from '@/utils/hex_to_bech32';
import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import { Client as WebSocket } from 'rpc-websockets';

const { endpoints, prefix } = chainConfig();

/* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';

const wsEndpoints = [
  process.env.NEXT_PUBLIC_RPC_WEBSOCKET,
  endpoints.publicRpcWebsocket,
  endpoints.graphqlWebsocket,
  'ws://localhost:3000/websocket',
];

const stepHeader = {
  jsonrpc: '2.0',
  method: 'subscribe',
  id: 0,
  params: {
    query: "tm.event='NewRoundStep'",
  },
};
const roundHeader = {
  jsonrpc: '2.0',
  method: 'subscribe',
  id: 0,
  params: {
    query: "tm.event='NewRound'",
  },
};

function connect(formatNewRound: (data: object) => void, formatNewStep: (data: object) => void) {
  const ws = new WebSocket(wsEndpoints.find((u) => u) ?? '', {
    max_reconnects: 0,
    skipUTF8Validation: true,
  });
  ws.subscribe(['tendermint/event/NewRound', 'tendermint/event/RoundState']);
  ws.on('tendermint/event/NewRound', (data) => formatNewRound(data));
  ws.on('tendermint/event/RoundState', (data) => formatNewStep(data));
  ws.on('open', async () => {
    await ws.call(stepHeader.method, stepHeader.params);
    await ws.call(roundHeader.method, roundHeader.params);
  });

  ws.on('close', () => {
    // console.warn('closing socket');
    setTimeout(() => {
      connect(formatNewRound, formatNewStep);
    }, 1000);
  });

  ws.on('error', (err: unknown) => {
    console.error('Socket encountered error: Closing socket', err);
  });
}

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

  const formatNewRound = useCallback((data: object) => {
    const height =
      numeral(R.pathOr('0', ['result', 'data', 'value', 'height'] ?? '0')).value() ?? 0;
    const proposerHex = R.pathOr('', ['result', 'data', 'value', 'proposer', 'address'], data);
    const consensusAddress = hexToBech32(proposerHex, prefix.consensus);

    setState((prevState) => ({
      ...prevState,
      height,
      proposer: consensusAddress,
    }));
  }, []);

  const formatNewStep = useCallback(
    (data: object) => {
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
    },
    [state.totalSteps]
  );

  useEffect(() => {
    if (!ssrMode) connect(formatNewRound, formatNewStep);
  }, [formatNewRound, formatNewStep]);

  return {
    state,
  };
};
