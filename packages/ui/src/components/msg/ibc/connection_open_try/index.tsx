import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import { type MsgConnectionOpenTry } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';

const ConnectionOpenTry: React.FC<{ message: MsgConnectionOpenTry }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenTryContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          chainId: message.chainId,
          clientId: message.clientId,
          counterpartyClientId: message.counterpartyClientId,
          counterpartyConnectionId: message.counterpartyConnectionId,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenTry;
