import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgBurn from '@models/sifchain/msg/ethbridge/msg_burn';
import { useProfileRecoil } from 'ui/recoil/profiles';

const Burn: React.FC<{ message: MsgBurn }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgBurn"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />]}
      />
    </Typography>
  );
};

export default Burn;
