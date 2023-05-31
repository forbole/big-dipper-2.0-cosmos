import AppTrans from '@/components/AppTrans';
import DID from '@/components/did';
import { MsgUpdateDidDoc } from '@/models/msg/cheqd/did/msg_update_did';
import Typography from '@mui/material/Typography';
import React from 'react';

const UpdateDidDoc = (props: { message: MsgUpdateDidDoc }) => {
  const { message } = props;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgUpdateDidDoc"
        components={[<DID did={message.payload?.id ?? ''} />]}
      />
    </Typography>
  );
};

export default UpdateDidDoc;
