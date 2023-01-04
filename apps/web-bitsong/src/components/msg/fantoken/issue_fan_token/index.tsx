import Name from '@/components/name';
import MsgIssueFanToken from '@/models/msg/fantoken/msg_issue_fan_token';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const IssueFanToken: FC<{ message: MsgIssueFanToken }> = (props) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIssueFanToken"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          name: message.name,
          maxSupply: message.maxSupply,
        }}
      />
    </Typography>
  );
};

export default IssueFanToken;
