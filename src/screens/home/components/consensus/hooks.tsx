import { useEffect } from 'react';

export const useConsensus = () => {
  const client = new WebSocket(process.env.NEXT_PUBLIC_WS_CHAIN_URL);
  useEffect(() => {
    // networks.cosmos.current.onopen = () => {
    //   networks.cosmos.current.send(HEIGHT_QUERY);
    // };
    client.onopen = () => {
      const header = '{ "jsonrpc": "2.0", "method": "subscribe", "id": 0, "params": { "query": "tm.event=\'NewBlock\'"}}';
      client.send(header);
      console.log('WebSocket Client Connected');
    };

    client.onclose = () => {
      console.log('close');
    };

    return () => {
      client.close();
    };
  }, []);
};
