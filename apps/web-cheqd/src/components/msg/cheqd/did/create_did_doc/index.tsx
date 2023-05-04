import { MsgCreateDidDoc } from '@/models/msg/cheqd/did/msg_create_did';
import Typography from '@mui/material/Typography';
import DID from '@/components/did';
import { Trans } from 'next-i18next';
import React from 'react';

const CreateDidDoc = (props: { message: MsgCreateDidDoc }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateDidDoc"
        components={[<DID did={message.payload.id} />]}
      />
    </Typography>
  );
};

export default CreateDidDoc;
