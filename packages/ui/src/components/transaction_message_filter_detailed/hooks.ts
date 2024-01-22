import { useEffect, useMemo, useState } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';

export const useMsgFilter = () => {
  const [open, setOpen] = useState(false);
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [messageFilter, setMessageFilter] = useState([] as string[]);

  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const formatMsgTypes = (msgTypes: any[]) => {
    const categories = [...new Set(msgTypes?.map((msgType) => msgType.module))];
    return categories.reduce((acc, module) => {
      const msgs = msgTypes.filter((msgType) => msgType.module === module);
      return [...acc, { module, msgTypes: msgs }];
    }, []);
  };

  const msgTypeList = useMemo(() => {
    const msgs = formatMsgTypes(data?.msgTypes);
    setMessageFilter(msgs);
  }, [data]);

  const exists = useMemo(() => loading || !!data?.length, [loading, data]);

  const filterMsgTypeList = useMemo(
    () => async (value: string, clear?: () => void) => {
      const parsedValue = value.replace(/\s+/g, '');
      const msgs = messageFilter.filter(
        (v: { module: string; msgTypes }) =>
          v.msgTypes.forEach((ms) => ms?.type === parsedValue) || v.module === parsedValue
      );
      setMessageFilter(msgs);
      if (clear) {
        clear();
      }
    },
    [messageFilter]
  );

  return {
    open,
    data,
    loading,
    exists,
    msgTypeList,
    messageFilter,
    filterMsgTypeList,
  };
};
