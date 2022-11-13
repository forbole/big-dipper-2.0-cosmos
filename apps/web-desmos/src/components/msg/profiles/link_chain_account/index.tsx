import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgLinkChainAccount from '@models/desmos/msg/profiles/msg_link_chain_account';
import { useProfileRecoil } from '@recoil/profiles';

const LinkChainAccount = (props: { message: MsgLinkChainAccount }) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
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
