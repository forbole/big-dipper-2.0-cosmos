import { MsgUpdateDidDoc } from '@/models/msg/cheqd/did/msg_update_did';
import Typography from '@mui/material/Typography';
import DID from '@/components/did';
import { Trans } from 'next-i18next';
import React from 'react';

const UpdateDidDoc = (props: { message: MsgUpdateDidDoc }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateDidDoc"
        components={[<DID did={message.payload?.id ?? ''} />]}
      />
    </Typography>
  );
};

export default UpdateDidDoc;
