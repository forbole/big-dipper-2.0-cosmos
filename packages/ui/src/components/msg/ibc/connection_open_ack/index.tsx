import Name from '@/components/name';
import { type MsgConnectionOpenAck } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const ConnectionOpenAck: FC<{ message: MsgConnectionOpenAck }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenAckContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          connectionId: message.connectionId,
          counterpartyConnectionId: message.counterpartyConnectionId,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenAck;
