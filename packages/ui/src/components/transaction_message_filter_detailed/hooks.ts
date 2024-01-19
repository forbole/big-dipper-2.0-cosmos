import { useEffect, useMemo, useState } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';

export const useMsgFilter = () => {
  const [open, setOpen] = useState(false);
  const { data, error, loading, refetch } = useMessageTypesQuery();

  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const exists = useMemo(() => loading || !!data?.length, [loading, data]);

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
    data,
    loading,
    exists,
  };
};
