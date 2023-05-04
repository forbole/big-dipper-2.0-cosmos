import { MsgCreateResource } from '@/models/msg/cheqd/resource/msg_create_resource';
import Typography from '@mui/material/Typography';
import Resource from '@/components/resource';
import { Trans } from 'next-i18next';
import React from 'react';

const CreateResource = (props: { message: MsgCreateResource }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateResource"
        components={[
          <Resource collection={message.payload.collection_id} id={message.payload.id} />,
        ]}
      />
    </Typography>
  );
};

export default CreateResource;
