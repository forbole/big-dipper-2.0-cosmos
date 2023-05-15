import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgLinkApplication from '@/models/msg/profiles/msg_link_application';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const LinkApplication: FC<{ message: MsgLinkApplication }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgLinkApplication"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          username: message.linkData.username,
          application: message.linkData.application,
        }}
      />
    </Typography>
  );
};

export default LinkApplication;
