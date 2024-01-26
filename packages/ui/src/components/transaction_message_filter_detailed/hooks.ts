import { useEffect, useMemo, useState, ChangeEvent, useCallback } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeFilterMsgTypes, writeOpenDialog } from '@/recoil/transactions_filter';

type MsgsTypes = {
  __typename: string;
  type: string;
  module: string;
  label: string;
};

export const useMsgFilter = () => {
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [messageFilter, setMessageFilter] = useState([] as string[]);
  const [queryMsgTypeList, setQueryMsgTypeList] = useState([] as string[]);
  const [_, setMsgTypes] = useRecoilState(writeFilterMsgTypes) as [string, SetterOrUpdater<string>];
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

  const formatMsgTypes = (messages: MsgsTypes[]) => {
    // merge v1 and v1beta1 MsgVote type into one
    const filteredMsgVotes = messages?.filter((msg) => msg.label === 'MsgVote');
    if (filteredMsgVotes?.length > 1) {
      messages = [
        ...messages.filter((msg) => msg.label !== 'MsgVote'),
        {
          __typename: 'message_type',
          type: 'cosmos.gov.v1beta1.MsgVote,cosmos.gov.v1.MsgVote',
          module: 'gov',
          label: 'MsgVote',
        },
      ];
    }

    // merge v1 and v1beta1 MsgSubmitProposal type into one
    const filteredMsgSubmitProposals = messages?.filter((msg) => msg.label === 'MsgSubmitProposal');
    if (filteredMsgSubmitProposals?.length > 1) {
      messages = [
        ...messages.filter((msg) => msg.label !== 'MsgSubmitProposal'),
        {
          __typename: 'message_type',
          type: 'cosmos.gov.v1beta1.MsgSubmitProposal,cosmos.gov.v1.MsgSubmitProposal',
          module: 'gov',
          label: 'MsgSubmitProposal',
        },
      ];
    }
    const categories = [...new Set(messages?.map((msgType) => msgType?.module))];
    return categories.reduce((acc, module) => {
      const msgs = messages?.filter((msgType) => msgType?.module === module);
      return [...acc, { module, msgTypes: msgs }];
    }, []);
  };

  const handleFilterTxs = () => {
    const str = queryMsgTypeList.join(',');
    const query = `{${str}}`;
    setMsgTypes(() => query);
    handleClose();
  };

  const handleMsgTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    let msgList = queryMsgTypeList;
    if (!msgList.includes(event.target.value)) {
      msgList.push(event.target.value);
      setQueryMsgTypeList(msgList);
    } else {
      msgList = msgList.filter((v) => v !== event.target.value);
      setQueryMsgTypeList(msgList);
    }
  };

  const msgTypeList = useMemo(() => {
    const msgs = formatMsgTypes(data?.msgTypes);
    msgs.sort((a, b) => a.module.localeCompare(b.module));
    setMessageFilter(msgs);
  }, [data]);

  const filterMsgTypeList = useCallback(
    (value: string) => {
      const parsedValue = value.replace(/\s+/g, '').toLowerCase();
      if (parsedValue === '' || parsedValue === null) {
        const msgs = formatMsgTypes(data?.msgTypes);
        msgs.sort((a, b) => a.module.localeCompare(b.module));
        setMessageFilter(msgs);
      } else {
        const msgList = formatMsgTypes(data?.msgTypes);
        msgList.sort((a, b) => a.module.localeCompare(b.module));
        const msgs = msgList.filter(
          (v: { module: string; msgTypes: [{ type: string; label: string }] }) =>
            v.msgTypes.some((ms) => ms.type.toLowerCase().indexOf(parsedValue) !== -1)
        );
        setMessageFilter(msgs);
      }
    },
    [data]
  );

  return {
    data,
    loading,
    msgTypeList,
    messageFilter,
    filterMsgTypeList,
    handleCancel,
    handleOpen,
    handleFilterTxs,
    handleMsgTypeSelection,
  };
};
