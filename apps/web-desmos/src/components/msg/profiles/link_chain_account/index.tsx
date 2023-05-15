import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgLinkChainAccount from '@/models/msg/profiles/msg_link_chain_account';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const LinkChainAccount: FC<{ message: MsgLinkChainAccount }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txLinkChainAccount"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          name: message.chainConfig.name,
        }}
      />
    </Typography>
  );
};

export default LinkChainAccount;
