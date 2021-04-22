import { useEffect } from 'react';

export const useConsensus = () => {
  const client = new WebSocket(process.env.NEXT_PUBLIC_WS_CHAIN_URL);
  useEffect(() => {
    // networks.cosmos.current.onopen = () => {
    //   networks.cosmos.current.send(HEIGHT_QUERY);
    // };
    client.onopen = () => {
      // const newRoundStep = {
      //   jsonrpc: '2.0',
      //   method: 'subscribe',
      //   id: 0,
      //   params: {
      //     query: 'tm.event=\'NewRoundStep\'',
      //   },
      // };

      // const polka = {
      //   jsonrpc: '2.0',
      //   method: 'subscribe',
      //   id: 0,
      //   params: {
      //     query: 'tm.event=\'Polka\'',
      //   },
      // };

      // const vote = {
      //   jsonrpc: '2.0',
      //   method: 'subscribe',
      //   id: 0,
      //   params: {
      //     query: 'tm.event=\'ValidBlock\'',
      //   },
      // };

      // const headerB = {
      //   jsonrpc: '2.0',
      //   method: 'subscribe',
      //   id: 0,
      //   params: {
      //     query: 'tm.event=\'CompleteProposal\'',
      //   },
      // };
      // client.send(JSON.stringify(vote));
      // client.send(JSON.stringify(headerB));
      // console.log('WebSocket Client Connected');
    };

    // client.onmessage = (e) => {
    //   console.log(e.data, 'what are you');
    // };

    // client.onclose = () => {
    //   console.log('close');
    // };

    // return () => {
    //   client.close();
    // };
    console.log('im in here');
  }, []);
};
