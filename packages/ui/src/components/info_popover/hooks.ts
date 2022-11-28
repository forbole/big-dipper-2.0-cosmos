import { useState } from 'react';

export const useInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen: React.MouseEventHandler<HTMLElement> = (event) => {
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
