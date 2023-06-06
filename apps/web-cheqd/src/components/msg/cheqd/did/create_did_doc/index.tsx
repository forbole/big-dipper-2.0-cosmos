import AppTrans from '@/components/AppTrans';
import DID from '@/components/did';
import { MsgCreateDidDoc } from '@/models/msg/cheqd/did/msg_create_did';
import Typography from '@mui/material/Typography';
import React from 'react';

const CreateDidDoc = (props: { message: MsgCreateDidDoc }) => {
  const { message } = props;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgCreateDidDoc"
        components={[<DID did={message.payload?.id ?? ''} />]}
      />
    </Typography>
  );
};

export default CreateDidDoc;
