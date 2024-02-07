import { useEffect, useMemo, useState, ChangeEvent, useCallback } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeFilter, writeOpenDialog } from '@/recoil/transactions_filter';

type MessageType = {
  __typename: string;
  type: string;
  module: string;
  label: string;
};

export const useTransactionTypeFilter = () => {
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [filteredTypes, setFilteredTypes] = useState<string[]>([]);
  const [txsFilter, setTxsFilter] = useState<string[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);
  const [_, setFilter] = useRecoilState(writeFilter) as [string, SetterOrUpdater<string>];
  const [__, setOpenDialog] = useRecoilState(writeOpenDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];

  // Fetch data if there's an error
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpenDialog(false);
    setTxsFilter([]);
  };

  const mergeMessagesByLabel = (messages: MessageType[]): MessageType[] => {
    const labelMap: { [key: string]: string } = {};

    messages.forEach(message => {
      if (!labelMap[message.label]) {
        labelMap[message.label] = message.type;
      } else {
        labelMap[message.label] += `,${message.type}`;
      }
    });

    const reducedMessages: MessageType[] = [];

    Object.entries(labelMap).forEach(([label, type]) => {
      reducedMessages.push({
        __typename: 'message_type',
        type,
        module: messages.find(msg => msg.label === label)?.module || '',
        label,
      });
    });

    return reducedMessages;
  };

  const formatTypes = useCallback((messages: MessageType[] | null | undefined): MessageType[] => {
    if (!messages) {
      return [];
    }

    let updatedMessages = [...messages];

    updatedMessages = mergeMessagesByLabel(updatedMessages);

    const moduleMessagesMap: { [key: string]: MessageType[] } = {};

    updatedMessages.forEach(msgType => {
      if (!moduleMessagesMap[msgType.module]) {
        moduleMessagesMap[msgType.module] = [];
      }
      if (!moduleMessagesMap[msgType.module].some(msg => msg.label === msgType.label)) {
        moduleMessagesMap[msgType.module].push(msgType);
      }
    });

    return Object.entries(moduleMessagesMap).map(([module, msgTypes]) => ({ module, msgTypes }));
  }, []);

  const handleFilterTxs = () => {
    const str = txsFilter.join(',');
    const query = `{${str}}`;
    setFilter(() => query);
    setSelectAllChecked(false);
    handleClose();
  };

  const handleTxTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setTxsFilter(prevFilter => [...prevFilter, value]);
    } else {
      setTxsFilter(prevFilter => prevFilter.filter(item => item !== value));
      setSelectAllChecked(false); // Uncheck "Select All" if any checkbox is unchecked individually
    }
  };

  const handleSelectAllTxTypes = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setSelectAllChecked(checked);
    if (checked) {
      const allTypes = filteredTypes.flatMap(msgData => msgData.msgTypes.map(msg => msg.type));
      setTxsFilter(allTypes);
    } else {
      setTxsFilter([]);
    }
  };

  const msgTypeList = useMemo(() => {
    const typesList = formatTypes(data?.msgTypes);
    typesList.sort((a, b) => a.module.localeCompare(b.module));
    setFilteredTypes(typesList);
  }, [data?.msgTypes, formatTypes]);

  const txTypeSearchFilter = useCallback(
    (value: string) => {
      const parsedValue = value.replace(/\s+/g, '').toLowerCase();
      if (parsedValue === '' || parsedValue === null) {
        const typesList = formatTypes(data?.msgTypes);
        typesList.sort((a, b) => a.module.localeCompare(b.module));
        setFilteredTypes(typesList);
      } else {
        const typesList = formatTypes(data?.msgTypes);
        typesList.sort((a, b) => a.module.localeCompare(b.module));
        const types = typesList.filter(
          (v: { module: string; msgTypes: [{ type: string; label: string }] }) =>
            v.msgTypes.some(ms => ms.type.toLowerCase().indexOf(parsedValue) !== -1)
        );
        setFilteredTypes(types);
      }
    },
    [data?.msgTypes, formatTypes]
  );

  return {
    data,
    loading,
    msgTypeList,
    filteredTypes,
    txsFilter,
    selectAllChecked,
    txTypeSearchFilter,
    handleCancel,
    handleOpen,
    handleFilterTxs,
    handleTxTypeSelection,
    handleSelectAllTxTypes,
  };
};
