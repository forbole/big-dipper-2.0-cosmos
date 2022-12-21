import chainConfig from '@/chainConfig';
import { hexToBech32 } from '@/utils/hex_to_bech32';
import { MessageType, stringifyMessage } from 'graphql-ws';
import WebSocket from 'isomorphic-ws';
import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

const { endpoints, prefix } = chainConfig();

/* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';

const wss = [
  process.env.NEXT_PUBLIC_RPC_WEBSOCKET,
  endpoints.publicRpcWebsocket,
  endpoints.graphqlWebsocket,
];

const keepAlive = 30000;
let queuedPing: ReturnType<typeof setTimeout>;

let client: WebSocket;
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
  const ws = wss.find((u) => u) || 'ws://localhost:3000/websocket';
  client = new WebSocket(ws);

  client.onopen = () => {
    client.send(JSON.stringify(stepHeader));
    client.send(JSON.stringify(roundHeader));
    enqueuePing();
  };

  client.onmessage = (e) => {
    const data = JSON.parse(e.data as string);
    const event = R.pathOr<string>('', ['result', 'data', 'type'], data);
    if (event === 'tendermint/event/NewRound') {
      formatNewRound(data);
    } else if (event === 'tendermint/event/RoundState') {
      formatNewStep(data);
    }
  };

  client.onclose = () => {
    // console.warn('closing socket');
    setTimeout(() => {
      connect(formatNewRound, formatNewStep);
    }, 1000);
  };

  client.onerror = (err: unknown) => {
    client.close();
    console.error('Socket encountered error: Closing socket', err);
  };

  function enqueuePing() {
    clearTimeout(queuedPing); // in case where a pong was received before a ping (this is valid behaviour)
    queuedPing = setTimeout(() => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(stringifyMessage({ type: MessageType.Ping }));
      }
    }, keepAlive);
  }
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

    return () => {
      client?.close();
    };
  }, [formatNewRound, formatNewStep]);

  return {
    state,
  };
};
