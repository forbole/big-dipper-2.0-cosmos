import Name from '@/components/name';
import { type MsgReceivePacket } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const ReceivePacket: FC<{ message: MsgReceivePacket }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txReceivePacketContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          sourceChannel: message.sourceChannel,
          destinationChannel: message.destinationChannel,
        }}
      />
    </Typography>
  );
};

export default ReceivePacket;
