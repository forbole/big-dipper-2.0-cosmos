import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import { type MsgTimeoutOnClose } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';

const TimeoutOnClose: React.FC<{ message: MsgTimeoutOnClose }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTimeoutOnCloseContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default TimeoutOnClose;
