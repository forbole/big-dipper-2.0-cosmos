import { MsgDeactivateDidDoc } from '@/models/msg/cheqd/did/msg_deactivate_did';
import Typography from '@mui/material/Typography';
import DID from '@/components/did';
import { Trans } from 'next-i18next';
import React from 'react';

const DeactivateDidDoc = (props: { message: MsgDeactivateDidDoc }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgDeactivateDidDoc"
        components={[<DID did={message.payload.id} />]}
      />
    </Typography>
  );
};

export default DeactivateDidDoc;
