import Name from '@/components/name';
import { type MsgCreateClient } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const CreateClient: React.FC<{ message: MsgCreateClient }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateClientContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          chainId: message.chainId,
        }}
      />
    </Typography>
  );
};

export default CreateClient;
