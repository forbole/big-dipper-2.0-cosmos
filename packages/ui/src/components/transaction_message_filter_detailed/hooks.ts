import { useState } from 'react';

export const useMsgFilter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleCancel,
  };
};
