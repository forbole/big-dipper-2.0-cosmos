import { useState } from 'react';

export const useDesmosProfile = () => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);

  const handleConnectionsOpen = () => {
    setConnectionsOpen(true);
  };

  const handleConnectionsClose = () => {
    setConnectionsOpen(false);
  };

  return {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
  };
};
