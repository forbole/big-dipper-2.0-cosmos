import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgBurn from '@/models/msg/ethbridge/msg_burn';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Burn: FC<{ message: MsgBurn }> = (props) => {
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
