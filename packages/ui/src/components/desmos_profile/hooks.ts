import { useCallback, useState } from 'react';

export const useDesmosProfile = () => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);

  const handleConnectionsOpen = useCallback(() => {
    setConnectionsOpen(true);
  }, []);

  const handleConnectionsClose = useCallback(() => {
    setConnectionsOpen(false);
  }, []);

  return {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
  };
};
