import Name from '@/components/name';
import { type MsgUpgradeClient } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const UpgradeClient: React.FC<{ message: MsgUpgradeClient }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpgradeClientContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          clientId: message.clientId,
        }}
      />
    </Typography>
  );
};

export default UpgradeClient;
