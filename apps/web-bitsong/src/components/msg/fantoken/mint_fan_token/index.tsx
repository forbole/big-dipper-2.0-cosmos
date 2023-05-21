import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMintFanToken from '@/models/msg/fantoken/msg_mint_fan_token';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const MintFanToken: FC<{ message: MsgMintFanToken }> = (props) => {
  const { message } = props;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgMintFanToken"
        components={[<Name address={message.recipient} name={recipientMoniker} />]}
      />
    </Typography>
  );
};

export default MintFanToken;
