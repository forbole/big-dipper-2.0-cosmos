import Name from '@/components/name';
import MsgAnchorDataRequest from '@/models/msg/data/msg_anchor_data_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const AnchorDataRequest: FC<{ message: MsgAnchorDataRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgAnchorDataRequest"
        components={[<Name address={message.sender} name={senderMoniker} />]}
      />
    </Typography>
  );
};

export default AnchorDataRequest;
