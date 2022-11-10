import { useState } from 'react';

export const useInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return {
    handlePopoverOpen,
    handlePopoverClose,
    anchorEl,
    open,
  };
};
