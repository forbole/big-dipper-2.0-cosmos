import { useEffect, useMemo, useState, ChangeEvent } from 'react';
import { useMessageTypesQuery } from '@/graphql/types/general_types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeFilterMsgTypes } from '@/recoil/settings';

type MsgsTypes = {
  __typename: string;
  type: string;
  module: string;
  label: string;
};

export const useMsgFilter = () => {
  const [open, setOpen] = useState(false);
  const { data, error, loading, refetch } = useMessageTypesQuery();
  const [messageFilter, setMessageFilter] = useState([] as string[]);
  const [queryMsgTypeList, setQueryMsgTypeList] = useState([] as string[]);
  const [_, setMsgTypes] = useRecoilState(writeFilterMsgTypes) as [string, SetterOrUpdater<string>];

  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
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
    console.log(query);
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

  const exists = useMemo(() => loading || !!data?.length, [loading, data]);

  const filterMsgTypeList = useMemo(
    () => async (value: string) => {
      const parsedValue = value.replace(/\s+/g, '');
      if (parsedValue === '' || parsedValue === null) {
        const msgs = formatMsgTypes(data?.msgTypes);
        msgs.sort((a, b) => a.module.localeCompare(b.module));
        setMessageFilter(msgs);
      } else {
        const msgs = messageFilter.filter(
          (v: { module: string; msgTypes: [{ type: string; label: string }] }) =>
            v.msgTypes.some((ms) => ms.type.includes(parsedValue))
        );
        setMessageFilter(msgs);
      }
    },
    [data?.msgTypes, messageFilter]
  );

  return {
    open,
    data,
    loading,
    exists,
    msgTypeList,
    messageFilter,
    filterMsgTypeList,
    handleCancel,
    handleOpen,
    handleFilterTxs,
    handleMsgTypeSelection,
  };
};
