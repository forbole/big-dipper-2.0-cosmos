import { useState } from 'react';

export const useThemeList = () => {
  const [anchor, setAnchor] = useState(null);

  const handleOpen = (event:any) => {
    setAnchor(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return {
    anchor,
    handleOpen,
    handleClose,
  };
};
