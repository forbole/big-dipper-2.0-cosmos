import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgLock from '@/models/msg/ethbridge/msg_lock';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Lock: FC<{ message: MsgLock }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgLock"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default Lock;
