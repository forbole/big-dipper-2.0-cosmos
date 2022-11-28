import Name from '@/components/name';
import { type MsgChannelOpenAck } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const ChannelOpenAck: React.FC<{ message: MsgChannelOpenAck }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelOpenAckContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
          counterpartyChannelId: message.counterpartyChannelId,
          counterpartyVersion: message.counterpartyVersion,
        }}
      />
    </Typography>
  );
};

export default ChannelOpenAck;
