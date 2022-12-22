import chainConfig from '@/chainConfig';
import { hexToBech32 } from '@/utils/hex_to_bech32';
import WebSocket from 'isomorphic-ws';
import numeral from 'numeral';
import equals from 'ramda/es/equals';
import pathOr from 'ramda/es/pathOr';
import { useCallback, useEffect, useState } from 'react';

const { endpoints, prefix } = chainConfig();

type State = {
  height: number;
  round: number;
  step: number;
  totalSteps: number;
  roundCompletion: number;
  proposer: string;
};

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

// /* Checking if the code is running on the server or the client. */
const ssrMode = typeof window === 'undefined';

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
const KEEP_ALIVE = 30000;

let client: WebSocket;

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
function subscribe(ws: WebSocket, data: string, keepAlive?: number) {
  /* It's checking if the client is still the same client that we created. If it's not, it means
  that the client has been replaced and we don't want to send any more data to this client. */
  if (ws !== client) return;

  if (ws.readyState !== WebSocket.OPEN) {
    setTimeout(() => subscribe(ws, data, keepAlive), 1000);
  } else {
    ws.send(data, (err) => {
      if (err) {
        console.error(err);
        setTimeout(() => subscribe(ws, data, keepAlive), 1000);
      } else if (keepAlive) {
        setTimeout(() => subscribe, keepAlive);
      }
    });
  }
}

/**
 * It connects to a websocket, subscribes to the events we want, and then calls the appropriate
 * callback function when it receives an event
 * @param formatNewRound - (data: unknown) => void
 * @param formatNewStep - (data: unknown) => void
 * @returns A WebSocket client
 */
function connect(formatNewRound: (data: unknown) => void, formatNewStep: (data: unknown) => void) {
  client = new WebSocket(wsEndpoints.find((u) => u) ?? '');

  client.onopen = () => {
    subscribe(client, stepHeader);
    subscribe(client, roundHeader);
    subscribe(client, pingHeader, KEEP_ALIVE);
  };

  client.onmessage = (e) => {
    const data = JSON.parse(e.data as string);
    const event = pathOr<string>('', ['result', 'data', 'type'], data);
    if (event === 'tendermint/event/NewRound') {
      formatNewRound(data);
    }
    if (event === 'tendermint/event/RoundState') {
      formatNewStep(data);
    }
  };

  client.onclose = () => {
    console.warn('closing socket');
    setTimeout(() => {
      connect(formatNewRound, formatNewStep);
    }, 1000);
  };

  client.onerror = (err: unknown) => {
    console.error('Socket encountered error', err);
  };
}

/**
 * It creates a new websocket connection and closes it when the component unmounts
 * @returns The state of the consensus.
 */
export const useConsensus = () => {
  const [state, setState] = useState<State>({
    height: 0,
    round: 0,
    step: 0,
    totalSteps: 5,
    roundCompletion: 0,
    proposer: '',
  });

  /* A callback function that is called when the websocket receives a new round event. */
  const formatNewRound = useCallback((data: unknown) => {
    const result = pathOr<NewRoundResult | null>(null, ['result'], data);
    const height = numeral(result?.data.value.height).value() ?? 0;
    const proposerHex = result?.data.value.proposer.address ?? '';
    const consensusAddress = hexToBech32(proposerHex, prefix.consensus);

    setState((prevState) => {
      const newState = {
        ...prevState,
        height,
        proposer: consensusAddress,
      };
      return equals(newState, prevState) ? prevState : newState;
    });
  }, []);

  /* A callback function that is called when the websocket receives a new round event. */
  const formatNewStep = useCallback(
    (data: unknown) => {
      const result = pathOr<NewStepResult | null>(null, ['result'], data);
      const round = result?.data.value.round ?? 0;
      const step = stepReference[result?.data.value.step ?? 0];
      const roundCompletion = (step / state.totalSteps) * 100;

      setState((prevState) => {
        const newState = {
          ...prevState,
          round,
          step,
          roundCompletion,
        };
        return equals(newState, prevState) ? prevState : newState;
      });
    },
    [state.totalSteps]
  );

  /* Creating a new websocket connection and closing it when the component unmounts. */
  useEffect(() => {
    if (!ssrMode) connect(formatNewRound, formatNewStep);
    return () => client?.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state,
  };
};
