import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@components/name';
import { type MsgCounterpartyChannel } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';

const CounterpartyChannel: React.FC<{ message: MsgCounterpartyChannel }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCounterpartyContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default CounterpartyChannel;
