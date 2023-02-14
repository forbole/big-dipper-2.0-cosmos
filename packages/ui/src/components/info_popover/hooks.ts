import { MouseEventHandler, useState } from 'react';

export const useInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);

  const handlePopoverOpen: MouseEventHandler<HTMLAnchorElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;

  return {
    handlePopoverOpen,
    handlePopoverClose,
    anchorEl,
    open,
  };
};
