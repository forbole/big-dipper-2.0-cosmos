import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgNftSend } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const NftSend: FC<{ message: MsgNftSend }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const receiver = useProfileRecoil(message.receiver);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgNftSendContent"
        components={[
          <Name address={message.sender} name={sender.name ?? message.sender} />,
          <b />,
          <b />,
          <Name address={message.receiver} name={receiver.name ?? message.receiver} />,
        ]}
        values={{
          id: message.id,
          class_id: message.class_id,
        }}
      />
    </Typography>
  );
};

export default NftSend;
