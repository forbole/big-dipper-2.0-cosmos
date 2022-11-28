import Name from '@/components/name';
import { type MsgConnectionEnd } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const ConnectionEnd: React.FC<{ message: MsgConnectionEnd }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionEndContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default ConnectionEnd;
