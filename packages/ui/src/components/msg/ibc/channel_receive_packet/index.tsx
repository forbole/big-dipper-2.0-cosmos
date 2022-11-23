import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import { type MsgReceivePacket } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';

const ReceivePacket: React.FC<{ message: MsgReceivePacket }> = (props) => {
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
