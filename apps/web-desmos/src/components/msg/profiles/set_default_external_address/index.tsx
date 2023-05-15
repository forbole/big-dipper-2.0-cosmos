import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSetDefaultExternalAddress from '@/models/msg/profiles/msg_set_default_external_address';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SetDefaultExternalAddress: FC<{ message: MsgSetDefaultExternalAddress }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSetDefaultExternalAddress"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{ chainName: message.chainName, target: message.target }}
      />
    </Typography>
  );
};

export default SetDefaultExternalAddress;
