import { useEffect, useMemo, useState, ChangeEvent } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeFilterMsgTypes } from '@/recoil/settings';

export const useMsgFilter = () => {
  const [open, setOpen] = useState(false);
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [messageFilter, setMessageFilter] = useState([] as string[]);
  const [queryMsgTypeList, setQueryMsgTypeList] = useState([] as string[]);
  const [msgTypes, setMsgTypes] = useRecoilState(writeFilterMsgTypes) as [
    string,
    SetterOrUpdater<string>
  ];
  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const formatMsgTypes = (msgTypes: any[]) => {
    const categories = [...new Set(msgTypes?.map(msgType => msgType.module))];
    return categories.reduce((acc, module) => {
      const msgs = msgTypes.filter(msgType => msgType.module === module);
      return [...acc, { module, msgTypes: msgs }];
    }, []);
  };

  const msgTypeList = useMemo(() => {
    const msgs = formatMsgTypes(data?.msgTypes);
    msgs.sort((a, b) => a.module.localeCompare(b.module));
    setMessageFilter(msgs);
  }, [data]);

  const exists = useMemo(() => loading || !!data?.length, [loading, data]);

  const filterMsgTypeList = useMemo(
    () => async (value: string, clear?: () => void) => {
      const parsedValue = value.replace(/\s+/g, '');
      if (parsedValue === '' || parsedValue === null) {
        const msgs = formatMsgTypes(data?.msgTypes);
        msgs.sort((a, b) => a.module.localeCompare(b.module));
        setMessageFilter(msgs);
      } else {
        const msgs = messageFilter.filter(
          (v: { module: string; msgTypes }) =>
            v.msgTypes.forEach(ms => ms?.type.includes(parsedValue)) ||
            v.module.includes(parsedValue)
        );
        setMessageFilter(msgs);
      }
    },
    [messageFilter, data]
  );

  const handleFilterTxs = () => {
    const str = queryMsgTypeList.join(',');
    const query = `{${str}}`;
    setMsgTypes(() => query);
    console.log(query);
  };

  const handleMsgTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    let msgList = queryMsgTypeList;
    if (!msgList.includes(event.target.value)) {
      msgList.push(event.target.value);
      setQueryMsgTypeList(msgList);
    } else {
      msgList = msgList.filter(v => v !== event.target.value);
      setQueryMsgTypeList(msgList);
    }
  };

  return {
    open,
    data,
    loading,
    exists,
    msgTypeList,
    messageFilter,
    filterMsgTypeList,
    handleFilterTxs,
    handleMsgTypeSelection,
  };
};
