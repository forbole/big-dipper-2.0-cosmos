import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import useShallowMemo from '@/hooks/useShallowMemo';
import { hexToBech32 } from '@/utils/hex_to_bech32';

const { endpoints, prefix } = chainConfig();

/* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';

type NewStepResult = {
  query: "tm.event='NewRoundStep'";
  data: {
    type: 'tendermint/event/RoundState';
    value: {
      height: string; // '7030123';
      round: number; // 0;
      step: 'RoundStepPropose';
    };
  };
  events: {
    'tm.event': ['NewRoundStep'];
  };
};

type NewRoundResult = {
  query: "tm.event='NewRound'";
  data: {
    type: 'tendermint/event/NewRound';
    value: {
      height: string; // '7030123';
      round: number; // 0;
      step: 'RoundStepNewRound';
      proposer: {
        address: string; // '2DA0A56810303EC8EFF8787C4F0ABE36C918C1C7';
        index: number; // 30;
      };
    };
  };
  events: {
    'tm.event': ['NewRound'];
  };
};

const wsEndpoints = [
  process.env.NEXT_PUBLIC_RPC_WEBSOCKET,
  endpoints.publicRpcWebsocket,
  endpoints.graphqlWebsocket,
  'ws://localhost:3000/websocket',
];

const stepReference = {
  0: 0,
  RoundStepNewHeight: 1,
  RoundStepPropose: 2,
  RoundStepPrevote: 3,
  RoundStepPrecommit: 4,
  RoundStepCommit: 5,
};

/* It's the number of milliseconds to wait before sending the subscription again. */
const KEEP_ALIVE = 30 * 1000;

let client: WebSocket | null;

/* It's a JSON-RPC request to subscribe to the NewRound event. */
const stepHeader = JSON.stringify({
  jsonrpc: '2.0',
  method: 'subscribe',
  id: 0,
  params: {
    query: "tm.event='NewRoundStep'",
  },
});

/* It's a JSON-RPC request to subscribe to the NewRound event. */
const roundHeader = JSON.stringify({
  jsonrpc: '2.0',
  method: 'subscribe',
  id: 0,
  params: {
    query: "tm.event='NewRound'",
  },
});

/* It's a keep alive message. */
const pingHeader = JSON.stringify({
  type: 'ping',
});

/**
 * If the client is not ready, wait a second and try again. If the client is ready, send the data and
 * if there's an error, wait a second and try again. If there's no error, and there's a keepAlive
 * value, wait the keepAlive value and try again
 * @param {WebSocket} ws - The WebSocket client that we want to subscribe to the data feed.
 * @param {string} data - The data to send to the server.
 * @param {number} [keepAlive] - The number of milliseconds to wait before sending the subscription
 * again.
 */
function subscribe(ws: WebSocket | null, data: string, keepAlive?: number) {
  /* It's checking if the client is still the same client that we created. If it's not, it means
  that the client has been replaced and we don't want to send any more data to this client. */
  if (!ws || ws !== client) {
    return;
  }

  if (ws.readyState !== WebSocket.OPEN) {
    setTimeout(() => subscribe(ws, data, keepAlive), 1000);
  } else {
    try {
      ws.send(data);
      if (keepAlive) setTimeout(() => subscribe(ws, data, keepAlive), keepAlive);
    } catch (err) {
      console.error(err);
      setTimeout(() => subscribe(ws, data, keepAlive), 1000);
    }
  }
}

/**
 * It connects to a websocket, subscribes to the events we want, and then calls the appropriate
 * callback function when it receives an event
 * @param formatNewRound - (data: unknown) => void
 * @param formatNewStep - (data: unknown) => void
 * @returns A WebSocket client
 */
function useConnect() {
  const [loadingNewRound, setLoadingNewRound] = useState(true);
  const [newRound, setNewRound] = useState<unknown | null>(null);
  const [loadingNewStep, setLoadingNewStep] = useState(true);
  const [newStep, setNewStep] = useState<unknown | null>(null);

  const connect = useCallback(() => {
    const ws = new WebSocket(wsEndpoints.find((u) => u) ?? '');
    const reconnectTimer = setTimeout(() => ws.close(), (12 + Math.random() * 4) * 1000);

    ws.onopen = () => {
      clearTimeout(reconnectTimer);
      subscribe(ws, stepHeader);
      subscribe(ws, roundHeader);
      subscribe(ws, pingHeader, KEEP_ALIVE);
    };
    ws.onmessage = (e) => {
      if (ws !== client) return;
      if (ws?.readyState !== WebSocket.OPEN) return;
      const data = JSON.parse(e.data as string);
      const event = R.pathOr<string>('', ['result', 'data', 'type'], data);
      if (event === 'tendermint/event/NewRound') {
        setNewRound((prevState: unknown | null) => (R.equals(prevState, data) ? prevState : data));
        setLoadingNewRound(false);
      } else if (event === 'tendermint/event/RoundState') {
        setNewStep((prevState: unknown | null) => (R.equals(prevState, data) ? prevState : data));
        setLoadingNewStep(false);
      }
    };
    ws.onclose = () => {
      console.warn('closing socket');
      setTimeout(() => {
        setLoadingNewRound(true);
        setLoadingNewStep(true);
        connect();
      }, 1000);
    };
    ws.onerror = (err: unknown) => {
      console.error('Socket encountered error', err);
    };
    client = ws;
  }, []);
  useEffect(() => {
    if (!ssrMode) connect();
    return () => {
      client?.close();
      client = null;
    };
  }, [connect]);

  return { loadingNewRound, loadingNewStep, newRound, newStep };
}

const TOTAL_STEPS = 5;

/* A callback function that is called when the websocket receives a new round event. */
const formatNewRound = (data: unknown) => {
  const result = R.pathOr<NewRoundResult | null>(null, ['result'], data);
  const height = numeral(result?.data.value.height).value() ?? 0;
  const proposerHex = result?.data.value.proposer.address ?? '';
  const consensusAddress = hexToBech32(proposerHex, prefix.consensus);
  return { height, proposer: consensusAddress };
};

/* A callback function that is called when the websocket receives a new round event. */
const formatNewStep = (data: unknown) => {
  const result = R.pathOr<NewStepResult | null>(null, ['result'], data);
  const round = result?.data.value.round ?? 0;
  const step = stepReference[result?.data.value.step ?? 0];
  const roundCompletion = (step / TOTAL_STEPS) * 100;
  return { round, step, roundCompletion };
};

/**
 * It creates a new websocket connection and closes it when the component unmounts
 * @returns The state of the consensus.
 */
export const useConsensus = () => {
  const { loadingNewRound, loadingNewStep, newRound, newStep } = useConnect();
  const stateMemo = useShallowMemo({
    loadingNewRound,
    loadingNewStep,
    ...formatNewRound(newRound),
    ...formatNewStep(newStep),
    totalSteps: TOTAL_STEPS,
  });

  return {
    state: stateMemo,
  };
};
