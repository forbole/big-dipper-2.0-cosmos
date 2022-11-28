import Name from '@/components/name';
import MsgRescueCeth from '@/models/msg/ethbridge/msg_rescue_ceth';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const RescueCeth: React.FC<{ message: MsgRescueCeth }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRescueCeth"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default RescueCeth;
