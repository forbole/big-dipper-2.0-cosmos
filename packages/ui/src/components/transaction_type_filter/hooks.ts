import { useEffect, useMemo, useState, ChangeEvent, useCallback } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeFilter, writeOpenDialog } from '@/recoil/transactions_filter';

type MsgsTypes = {
  __typename: string;
  type: string;
  module: string;
  label: string;
};

export const useTransactionTypeFilter = () => {
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [filteredTypes, setFilteredTypes] = useState([] as string[]);
  const [txsFilter, setTxsFilter] = useState([] as string[]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [_, setFilter] = useRecoilState(writeFilter) as [string, SetterOrUpdater<string>];
  const [__, setOpenDialog] = useRecoilState(writeOpenDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];

  /* If there is an error, refetch the data. */
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
  };

  const formatTypes = (messages: MsgsTypes[]) => {
    // merge v1 and v1beta1 MsgVote type into one
    const filteredMsgVotes = messages?.filter(msg => msg.label === 'MsgVote');
    if (filteredMsgVotes?.length > 1) {
      messages = [
        ...messages.filter(msg => msg.label !== 'MsgVote'),
        {
          __typename: 'message_type',
          type: 'cosmos.gov.v1beta1.MsgVote,cosmos.gov.v1.MsgVote',
          module: 'gov',
          label: 'MsgVote',
        },
      ];
    }

    // merge v1 and v1beta1 MsgSubmitProposal type into one
    const filteredMsgSubmitProposals = messages?.filter(msg => msg.label === 'MsgSubmitProposal');
    if (filteredMsgSubmitProposals?.length > 1) {
      messages = [
        ...messages.filter(msg => msg.label !== 'MsgSubmitProposal'),
        {
          __typename: 'message_type',
          type: 'cosmos.gov.v1beta1.MsgSubmitProposal,cosmos.gov.v1.MsgSubmitProposal',
          module: 'gov',
          label: 'MsgSubmitProposal',
        },
      ];
    }
    const categories = [...new Set(messages?.map(msgType => msgType?.module))];
    return categories.reduce((acc, module) => {
      const msgs = messages?.filter(msgType => msgType?.module === module);
      return [...acc, { module, msgTypes: msgs }];
    }, []);
  };

  const handleFilterTxs = () => {
    const str = txsFilter.join(',');
    const query = `{${str}}`;
    setFilter(() => query);
    setSelectAllChecked(false);
    handleClose();
  };

  const handleTxTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      let msgList = txsFilter;
      if (!msgList.includes(event?.target?.value)) {
        msgList.push(event?.target?.value);
        setTxsFilter(msgList);
      } else {
        msgList = msgList.filter(v => v !== event?.target?.value);
        setTxsFilter(msgList);
      }
    }
  };

  const handleSelectAllTxTypes = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      setTxsFilter(filteredTypes);
      setSelectAllChecked(true);
    } else {
      // setTxsFilter([]);
      setSelectAllChecked(false);
    }
  };

  const msgTypeList = useMemo(() => {
    const typesList = formatTypes(data?.msgTypes);
    typesList.sort((a, b) => a.module.localeCompare(b.module));
    setFilteredTypes(typesList);
  }, [data]);

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
    [data]
  );

  return {
    data,
    loading,
    msgTypeList,
    filteredTypes,
    selectAllChecked,
    txTypeSearchFilter,
    handleCancel,
    handleOpen,
    handleFilterTxs,
    handleTxTypeSelection,
    handleSelectAllTxTypes,
  };
};
